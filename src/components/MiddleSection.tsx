import React, { useState } from 'react';
import { PRESENT_POEMS, PoemCard } from '../data/poemsData';
import { RomanticMemory, PhotoStyle, ImageResolution, AspectRatio } from '../types';
import { MemoryStudio } from './MemoryStudio';
import { Heart, Sparkles, Volume2, Flower2, Quote, Check, BookmarkCheck } from 'lucide-react';
import { playRomanticChime } from '../utils/romanticAudio';

interface MiddleSectionProps {
  memories: RomanticMemory[];
  onGenerateMemory: (
    scenePrompt: string,
    style: PhotoStyle,
    imageSize: ImageResolution,
    aspectRatio: AspectRatio,
    customNotes?: string
  ) => Promise<void>;
  onEditMemory: (
    memoryId: string,
    currentImageUrl: string,
    editPrompt: string,
    imageSize: ImageResolution
  ) => Promise<void>;
  isGenerating: boolean;
  isEditing: boolean;
  onTriggerHearts: () => void;
}

export const MiddleSection: React.FC<MiddleSectionProps> = ({
  memories,
  onGenerateMemory,
  onEditMemory,
  isGenerating,
  isEditing,
  onTriggerHearts,
}) => {
  const [lovedPoems, setLovedPoems] = useState<string[]>([]);
  const [roseCount, setRoseCount] = useState(1);
  const [showRoseModal, setShowRoseModal] = useState(false);

  const toggleLovePoem = (id: string) => {
    playRomanticChime();
    onTriggerHearts();
    setLovedPoems((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleGiveRoses = () => {
    playRomanticChime();
    onTriggerHearts();
    setRoseCount((r) => (r >= 101 ? 101 : r + 10));
    setShowRoseModal(true);
  };

  return (
    <section className="space-y-12">
      {/* Middle Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-serif-luxury italic">
          <Flower2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Hozirgi Sevgi va Qalb Nidalari</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Zilola Uchun Bitilgan She'rlar
        </h2>
        <p className="font-serif-luxury italic text-sm md:text-base text-zinc-400">
          «Har bir misra, har bir satr — Doniyorning aynan shu soniyada urayotgan yuragidan to'kilgan durdonadir»
        </p>
      </div>

      {/* Poetry Showcase: Luxury Illustrated Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PRESENT_POEMS.map((poem, index) => {
          const isLoved = lovedPoems.includes(poem.id);

          return (
            <div
              key={poem.id}
              className={`relative rounded-3xl overflow-hidden border p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl group ${poem.accentGlow} bg-gradient-to-b ${poem.bgGradient}`}
            >
              {/* Background ambient picture with gradient overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundImage: `url(${poem.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />

              <div className="relative z-10 space-y-5">
                {/* Header of poem card */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700 text-amber-300">
                    She'r 0{index + 1}
                  </span>
                  <button
                    onClick={() => toggleLovePoem(poem.id)}
                    className={`p-2 rounded-xl border transition-all ${
                      isLoved
                        ? 'bg-rose-500 border-rose-400 text-white shadow-lg shadow-rose-500/40'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-rose-300'
                    }`}
                    title="Yurakcha qoldirish"
                  >
                    <Heart className={`w-4 h-4 ${isLoved ? 'fill-white' : ''}`} />
                  </button>
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {poem.title}
                  </h3>
                  <p className="text-xs text-rose-300/80 font-serif-luxury italic mt-1">
                    {poem.subtitle}
                  </p>
                </div>

                {/* Stanzas with elegant typography */}
                <div className="space-y-4 my-2">
                  {poem.stanzas.map((stanza, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-100 font-serif-luxury text-sm md:text-base italic leading-relaxed whitespace-pre-line shadow-inner"
                    >
                      {stanza}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-zinc-400 font-serif-luxury italic border-l-2 border-rose-500/50 pl-3 leading-relaxed">
                  "{poem.emotionalNote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-serif-luxury italic">
                  Doniyor tomonidan Zilolaga
                </span>
                <button
                  onClick={() => {
                    playRomanticChime();
                    onTriggerHearts();
                  }}
                  className="text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Kuy Tinglash</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive 101 Red Roses Gifting Action */}
      <div className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-950/40 via-[#140c17] to-amber-950/30 p-6 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl text-center md:text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-serif-luxury italic">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Zilola Uchun Sevgi Guldastasi</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
            Doniyordan Zilolaga 101 Ta Qizil Atirgul
          </h3>
          <p className="font-serif-luxury italic text-xs md:text-sm text-zinc-300 leading-relaxed">
            «Har bir gul — senga aytilgan muhabbat so'zimdir. Har safar tugmani bosganingda guldasta yana gullar bilan to'ladi.»
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 shrink-0">
          <button
            onClick={handleGiveRoses}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs md:text-sm shadow-xl shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Flower2 className="w-4 h-4 animate-spin" />
            <span>Guldastani Kengaytirish ({roseCount}/101)</span>
          </button>
          <span className="text-[11px] text-zinc-400 font-mono">
            {roseCount >= 101 ? "🎉 101 ta atirgul to'liq taqdim etildi!" : `Yana ${101 - roseCount} ta gul qoldi`}
          </span>
        </div>
      </div>

      {/* Memory Studio (Visual Memories & AI Creation Engine with 1K/2K/4K) */}
      <div>
        <MemoryStudio
          memories={memories}
          onGenerateMemory={onGenerateMemory}
          onEditMemory={onEditMemory}
          isGenerating={isGenerating}
          isEditing={isEditing}
        />
      </div>
    </section>
  );
};
