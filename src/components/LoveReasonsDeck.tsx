import React, { useState } from 'react';
import { LOVE_REASONS } from '../data/romanticData';
import { Heart, Sparkles, Shuffle, Star, Quote } from 'lucide-react';

export const LoveReasonsDeck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % LOVE_REASONS.length);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * LOVE_REASONS.length);
    setCurrentIndex(randomIndex);
  };

  const currentReason = LOVE_REASONS[currentIndex];

  return (
    <div className="w-full bg-gradient-to-br from-[#151119] via-[#0f0d13] to-[#0a090d] border border-rose-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500/40" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">
              Zilolamni Nega Sevaman?
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            Doniyorning qalbida Zilolaga bo'lgan cheksiz sabablardan parchalari
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRandom}
            className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-300 flex items-center gap-1.5 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5 text-rose-400" />
            <span>Tasodifiy Sabab</span>
          </button>
          <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-300 border border-rose-500/30">
            {currentIndex + 1} / {LOVE_REASONS.length}
          </span>
        </div>
      </div>

      {/* Featured Reason Card */}
      <div className="relative my-4 p-8 md:p-12 rounded-3xl bg-zinc-950/70 border border-rose-500/30 shadow-inner flex flex-col items-center text-center">
        <Quote className="w-8 h-8 text-rose-500/30 mb-3" />

        <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-rose-500/20 text-rose-300 border border-rose-500/40 mb-4">
          Sabab #{currentReason.id} • {currentReason.category}
        </span>

        <p className="font-serif-luxury italic text-lg md:text-2xl text-white max-w-xl leading-relaxed">
          "{currentReason.text}"
        </p>

        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent my-6" />

        <span className="text-xs text-zinc-400 font-serif-luxury italic">
          — Sening vafodor Doniyoring
        </span>

        <button
          onClick={handleNext}
          className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-600/20 transition-all hover:scale-105"
        >
          <span>Keyingi Sababni O'qish</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>
    </div>
  );
};
