/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { ROMANTIC_MEMORIES } from './data/romanticData';
import { RomanticMemory, PhotoStyle, ImageResolution, AspectRatio } from './types';
import { StartSection } from './components/StartSection';
import { MiddleSection } from './components/MiddleSection';
import { FinaleSection } from './components/FinaleSection';
import { RomanticGrandOpening } from './components/RomanticGrandOpening';
import { SurpriseGiftModal } from './components/SurpriseGiftModal';
import { playRomanticChime } from './utils/romanticAudio';
import {
  Heart,
  Sparkles,
  Music,
  Gift,
  Mail,
  Volume2
} from 'lucide-react';

export default function App() {
  const [memories, setMemories] = useState<RomanticMemory[]>(ROMANTIC_MEMORIES);
  const [isGrandOpeningOpen, setIsGrandOpeningOpen] = useState<boolean>(true);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  const middleRef = useRef<HTMLDivElement>(null);

  // Floating heart burst animation
  const triggerLoveEffect = () => {
    playRomanticChime();
    const newHearts = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 85 + 5,
    }));
    setFloatingHearts((prev) => [...prev, ...newHearts]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => !newHearts.includes(h)));
    }, 2500);
  };

  const scrollToMiddle = () => {
    middleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate a new romantic memory using gemini-3-pro-image-preview
  const handleGenerateMemory = async (
    scenePrompt: string,
    style: PhotoStyle,
    imageSize: ImageResolution,
    aspectRatio: AspectRatio,
    customNotes?: string
  ) => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/memory/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenePrompt,
          style,
          imageSize,
          aspectRatio,
          model: 'gemini-3-pro-image-preview',
          customNotes,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json();
        throw new Error(errJson.error || 'Surat yaratib bo\'lmadi');
      }

      const resData = await response.json();
      const newMemory: RomanticMemory = {
        id: `memory-gen-${Date.now()}`,
        title: scenePrompt.slice(0, 45) + '...',
        subtitle: `Doniyor & Zilola • ${style}`,
        description: scenePrompt,
        location: "Orzularimiz Maskani",
        date: "Yangi yaratilgan xotira",
        recommendedStyle: style,
        photoUrl: resData.imageUrl,
        photoResolution: resData.imageSize || imageSize,
        photoStyle: resData.style || style,
        photoAspectRatio: resData.aspectRatio || aspectRatio,
        modelUsed: resData.modelUsed || 'gemini-3-pro-image-preview',
      };

      setMemories((prev) => [newMemory, ...prev]);
    } catch (err: any) {
      console.error('Generation failed:', err);
      alert(`Xotirani tasvirlashda xatolik: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Retouch existing image using gemini-nano-banana-2.1
  const handleEditMemory = async (
    memoryId: string,
    currentImageUrl: string,
    editPrompt: string,
    imageSize: ImageResolution
  ) => {
    setIsEditing(true);
    try {
      const response = await fetch('/api/memory/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          base64Image: currentImageUrl,
          editPrompt,
          imageSize,
          aspectRatio: '1:1',
        }),
      });

      if (!response.ok) {
        const errJson = await response.json();
        throw new Error(errJson.error || 'Tahrirlashda xatolik');
      }

      const resData = await response.json();
      setMemories((prev) =>
        prev.map((m) =>
          m.id === memoryId
            ? {
                ...m,
                photoUrl: resData.imageUrl,
                modelUsed: resData.modelUsed || 'gemini-nano-banana-2.1',
                editHistory: [
                  ...(m.editHistory || []),
                  {
                    id: `edit-${Date.now()}`,
                    imageUrl: currentImageUrl,
                    prompt: editPrompt,
                    timestamp: Date.now(),
                  },
                ],
              }
            : m
        )
      );
    } catch (err: any) {
      console.error('Edit failed:', err);
      alert(`Tahrirlashda xatolik: ${err.message}`);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070609] text-zinc-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white relative overflow-x-hidden">
      {/* Floating Animated Hearts */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed bottom-10 pointer-events-none z-50 text-rose-500 animate-float-fade"
          style={{ left: `${heart.x}%` }}
        >
          <Heart className="w-7 h-7 fill-rose-500 text-rose-300 drop-shadow-lg" />
        </div>
      ))}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#070609]/90 backdrop-blur-2xl border-b border-rose-500/20 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={triggerLoveEffect}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 p-0.5 shadow-lg shadow-rose-950/60 hover:scale-105 transition-transform"
              title="Muhabbat kuyi"
            >
              <div className="w-full h-full bg-[#0d0912] rounded-[10px] flex items-center justify-center text-rose-400">
                <Heart className="w-5 h-5 fill-current animate-pulse" />
              </div>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-lg md:text-xl font-bold text-white bg-gradient-to-r from-rose-200 via-amber-100 to-rose-300 bg-clip-text text-transparent">
                  Doniyor & Zilola
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-serif-luxury italic bg-rose-500/10 text-rose-300 border border-rose-500/30">
                  Hozirgi Sevgi
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-serif-luxury italic">
                Aynan shu lahzadagi eng sof va cheksiz muhabbat izhori
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerLoveEffect}
              className="px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-xs text-zinc-300 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
            >
              <Music className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">Romantik Kuy</span>
            </button>

            <button
              onClick={() => setIsGrandOpeningOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-rose-500/40 text-xs font-semibold text-rose-200 flex items-center gap-1.5 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>Sevgi Xati</span>
            </button>

            <button
              onClick={() => setIsSurpriseOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/25 hover:scale-105 transition-all"
            >
              <Gift className="w-3.5 h-3.5 text-zinc-950" />
              <span className="hidden sm:inline">Maxsus Syurpriz</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main 3-Act Cinematic Journey: START -> MIDDLE -> FINALE */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8 space-y-16">
        {/* ACT 1: START (Kinematografik Boshlanish) */}
        <StartSection
          onScrollToMiddle={scrollToMiddle}
          onTriggerHearts={triggerLoveEffect}
        />

        {/* ACT 2: MIDDLE (Nafis She'rlar & 101 Atirgul & Romantik Studiya) */}
        <div ref={middleRef}>
          <MiddleSection
            memories={memories}
            onGenerateMemory={handleGenerateMemory}
            onEditMemory={handleEditMemory}
            isGenerating={isGenerating}
            isEditing={isEditing}
            onTriggerHearts={triggerLoveEffect}
          />
        </div>

        {/* ACT 3: FINALE (Yakun: Oliyjanob Qasam, Zilolaning Javobi & Abadiy Muhr) */}
        <FinaleSection onTriggerHearts={triggerLoveEffect} />
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-rose-500/20 bg-[#050407] py-10 px-4 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold text-rose-300">
              Doniyor & Zilola
            </span>
            <span className="text-zinc-600">•</span>
            <span>Aynan Shu Lahzadagi Sevgi Qasri • 2026</span>
          </div>

          <div
            onClick={triggerLoveEffect}
            className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 cursor-pointer font-serif-luxury italic text-xs transition-colors"
          >
            <Heart className="w-4 h-4 fill-rose-500" />
            <span>Doniyor tomonidan Zilola uchun butun mehr bilan yaratildi</span>
          </div>

          <div className="text-[11px] text-zinc-600 font-mono">
            gemini-3-pro-image-preview • gemini-nano-banana-2.1
          </div>
        </div>
      </footer>

      {/* Grand Opening Modal (Wax Seal Envelope) */}
      <RomanticGrandOpening
        isOpen={isGrandOpeningOpen}
        onClose={() => setIsGrandOpeningOpen(false)}
      />

      {/* Surprise Gift Modal */}
      <SurpriseGiftModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  );
}
