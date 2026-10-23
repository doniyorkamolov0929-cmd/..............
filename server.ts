import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    couple: 'Doniyor & Zilola',
    type: 'Abadiy Sevgi Izhori',
  });
});

// Generate custom romantic love poem or letter from Doniyor to Zilola
app.post('/api/love-letter/generate', async (req, res) => {
  try {
    const { mood = 'deeply_romantic', topic = 'forever_love', language = 'uz' } = req.body;

    const prompt = `Siz sevgi, vafo va romantika borasida eng mahoratli shoirsiz.
Doniyor o'zining yagona va aziz sevgilisi Zilolaga bo'lgan samimiy, yurakdan chiqqan, titroqli va cheksiz sevgisini izhor qilmoqda.
Mavzu yoki kayfiyat: ${topic} (${mood}).
Ushbu maktub yoki she'rni o'qiganda Zilolaning ko'zlarida baxt yoshi qalqisin, Doniyorning sevgisi naqadar buyuk va sadoqatli ekanini his qilsin.
Maktub faqat o'zbek tilida (yuksak badiiy, zamonaviy va iliq tilda) yozilsin.

JSON formatida qaytaring:
{
  "title": "Maktub sarlavhasi (masalan: 'Zilolam, hayotimdagi eng go\\'zal faslim...')",
  "quote": "Qisqa, yodda qoladigan yurak so\\'zi",
  "paragraphs": [
    "1-paragraf...",
    "2-paragraf...",
    "3-paragraf..."
  ],
  "poemStanzas": [
    "She'r 1-bandi...",
    "She'r 2-bandi..."
  ],
  "signOff": "Doim sening vafodor Doniyoring"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    });

    const parsedData = JSON.parse(response.text || '{}');
    return res.json({ success: true, data: parsedData });
  } catch (error: any) {
    console.error('Love letter generation error:', error);
    return res.status(500).json({ error: error.message || 'Xat yaratishda xatolik yuz berdi' });
  }
});

// Master Romantic Memory Image Generation using gemini-3-pro-image-preview
app.post('/api/memory/generate', async (req, res) => {
  try {
    const {
      scenePrompt,
      style = 'Rustic/Dark', // 'Rustic/Dark' | 'Bright/Modern' | 'Social Media'
      imageSize = '2K', // '1K' | '2K' | '4K' (required affordance)
      aspectRatio = '1:1', // '1:1' | '4:3' | '3:4' | '16:9' | '9:16'
      model = 'gemini-3-pro-image-preview', // default as instructed
      customNotes = '',
    } = req.body;

    if (!scenePrompt) {
      return res.status(400).json({ error: 'Sahna tavsifi kiritilishi shart' });
    }

    let styleDirection = '';
    let cameraSpecs = '';

    if (style === 'Rustic/Dark') {
      styleDirection = `Moody romantic chiaroscuro aesthetic, warm intimate candlelight, glowing fireplace embers, deep velvet textures, starry night sky with twinkling stars, cinematic golden rim light creating tender emotional atmosphere.`;
      cameraSpecs = `Shot on Leica M11 with 50mm Noctilux-M f/0.95 lens, creamy dreamlike bokeh, rich atmospheric shadows, hyper-realistic fine art photography.`;
    } else if (style === 'Bright/Modern') {
      styleDirection = `Luminous high-end editorial romantic aesthetic, soft morning golden sunlight, Parisian balcony with blooming roses, clean marble balustrade, ethereal champagne and blush tones, radiant joy.`;
      cameraSpecs = `Shot on Hasselblad X2D 100C with 80mm f/1.9 lens, pristine clarity, gentle sun flare, vibrant true romantic colors.`;
    } else {
      // Social Media / Polaroid Flat-Lay
      styleDirection = `Top-down aesthetic flat-lay and polaroid romantic scrapbook aesthetic: vintage gold ring, handwritten love letter from Doniyor to Zilola with wax seal, dried red rose petals, delicate ribbon, cozy fairy lights.`;
      cameraSpecs = `Overhead 90-degree flat-lay, high fashion magazine spread for couples, edge-to-edge tack sharp, dreamy warm tones.`;
    }

    const masterPrompt = `Award-winning fine-art romantic photograph representing the eternal love between Doniyor and his beloved Zilola:
"${scenePrompt}".
${customNotes ? `Specific detail: ${customNotes}.` : ''}
${styleDirection}
${cameraSpecs}
Masterpiece quality, breathtaking emotional resonance, lifelike cinematic realism, hyper-detailed, romantic storytelling, elegant luxury composition.`;

    const candidateModels = [
      model,
      'gemini-3-pro-image-preview',
      'gemini-nano-banana-2.1',
      'gemini-3.1-flash-lite-image',
    ];
    const uniqueModels = Array.from(new Set(candidateModels));

    let finalImageUrl: string | null = null;
    let usedModel = uniqueModels[0];
    let lastError: any = null;

    for (const targetModel of uniqueModels) {
      try {
        console.log(`Generating romantic memory with model: ${targetModel}, size: ${imageSize}, aspect: ${aspectRatio}`);
        const response = await ai.models.generateContent({
          model: targetModel,
          contents: {
            parts: [{ text: masterPrompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: aspectRatio || '1:1',
              imageSize: imageSize || '2K',
            },
          },
        });

        if (response.candidates && response.candidates[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData && part.inlineData.data) {
              const mime = part.inlineData.mimeType || 'image/png';
              finalImageUrl = `data:${mime};base64,${part.inlineData.data}`;
              usedModel = targetModel;
              break;
            }
          }
        }

        if (finalImageUrl) break;
      } catch (err: any) {
        console.warn(`Model ${targetModel} generation failed:`, err.message || err);
        lastError = err;
      }
    }

    if (!finalImageUrl) {
      throw lastError || new Error('Surat yaratib bo\'lmadi');
    }

    return res.json({
      success: true,
      imageUrl: finalImageUrl,
      modelUsed: usedModel,
      style,
      imageSize,
      aspectRatio,
      prompt: masterPrompt,
    });
  } catch (error: any) {
    console.error('Memory generation error:', error);
    return res.status(500).json({
      error: error.message || 'Surat yaratishda xatolik yuz berdi',
      details: error.toString(),
    });
  }
});

// Edit & Retouch Romantic Image using gemini-nano-banana-2.1
app.post('/api/memory/edit', async (req, res) => {
  try {
    const {
      base64Image,
      editPrompt,
      imageSize = '2K',
      aspectRatio = '1:1',
    } = req.body;

    if (!base64Image) {
      return res.status(400).json({ error: 'Rasm bazasi kiritilishi shart' });
    }
    if (!editPrompt || !editPrompt.trim()) {
      return res.status(400).json({ error: 'Tahrir matni kiritilishi shart' });
    }

    let cleanBase64 = base64Image;
    let mimeType = 'image/png';
    const match = base64Image.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (match) {
      mimeType = match[1];
      cleanBase64 = match[2];
    }

    console.log(`Editing romantic image with gemini-nano-banana-2.1: "${editPrompt}"`);

    const editInstruction = `Expert romantic fine art retouching:
"${editPrompt}".
Maintain photorealistic lighting, tender emotional intimacy, cinematic bokeh, and lifelike quality. Dedicated to Doniyor and Zilola's love story.`;

    const response = await ai.models.generateContent({
      model: 'gemini-nano-banana-2.1',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: editInstruction,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio || '1:1',
          imageSize: imageSize || '2K',
        },
      },
    });

    let editedImageUrl: string | null = null;
    if (response.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const mime = part.inlineData.mimeType || 'image/png';
          editedImageUrl = `data:${mime};base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    if (!editedImageUrl) {
      throw new Error('Tahrirlash natijasida rasm qaytarilmadi');
    }

    return res.json({
      success: true,
      imageUrl: editedImageUrl,
      modelUsed: 'gemini-nano-banana-2.1',
      editPrompt,
    });
  } catch (error: any) {
    console.error('Image edit error:', error);
    return res.status(500).json({
      error: error.message || 'Rasmni tahrirlashda xatolik yuz berdi',
      details: error.toString(),
    });
  }
});

// Vite middleware in dev, static in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Doniyor & Zilola Sevgi Izhori server running at http://localhost:${port}`);
  });
}

startServer();
