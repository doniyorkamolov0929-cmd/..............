import React, { useState } from 'react';
import { Heart, Sparkles, Volume2, ArrowDown, Flower2, Flame } from 'lucide-react';
import { playRomanticChime } from '../utils/romanticAudio';

interface StartSectionProps {
  onScrollToMiddle: () => void;
  onTriggerHearts: () => void;
}

export const StartSection: React.FC<StartSectionProps> = ({
  onScrollToMiddle,
  onTriggerHearts,
}) => {
  const [isPlayingHeartbeat, setIsPlayingHeartbeat] = useState(false);

  const handlePulse = () => {
    setIsPlayingHeartbeat(true);
    playRomanticChime();
    onTriggerHearts();
    setTimeout(() => setIsPlayingHeartbeat(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-b from-[#180f1d] via-[#100a14] to-[#08070b] shadow-2xl shadow-rose-950/40">
      {/* Ambient background light spheres */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Top Pill */}
      <div
        onClick={handlePulse}
        className="relative z-10 cursor-pointer inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs md:text-sm font-serif-luxury italic hover:bg-rose-500/25 transition-all shadow-lg shadow-rose-950/50 mb-6 hover:scale-105"
      >
        <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
        <Heart className="w-4 h-4 fill-rose-500 text-rose-300" />
        <span>Doniyorning Zilolaga Aynan Shu Lahzadagi Sevgi Izhori</span>
        <Sparkles className="w-4 h-4 text-amber-300" />
      </div>

      {/* Grand Title: Bold, Majestic, Present-Tense Love */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
          «Zilolam, Men Seni{' '}
          <span className="bg-gradient-to-r from-rose-400 via-rose-200 to-amber-300 bg-clip-text text-transparent underline decoration-rose-500/40">
            Aynan Hozir
          </span>
          , Shu Soniyada Sevaman!»
        </h1>

        <p className="font-serif-luxury italic text-lg sm:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed pt-2">
          «Dunyo to'xtasin, vaqt to'xtasin — bu olamda faqat ikkimiz va sening ko'zlaringdagi o'chmas quyosh bor...»
        </p>

        {/* Interactive Heartbeat Emblem */}
        <div className="pt-6 pb-4">
          <div
            onClick={handlePulse}
            className={`relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 p-1 cursor-pointer transition-transform duration-300 shadow-2xl shadow-rose-600/50 ${
              isPlayingHeartbeat ? 'scale-125' : 'hover:scale-110 animate-pulse'
            }`}
          >
            <div className="w-full h-full rounded-full bg-[#130b18] flex flex-col items-center justify-center text-white">
              <Heart className={`w-10 h-10 sm:w-12 sm:h-12 fill-rose-500 text-rose-400 ${isPlayingHeartbeat ? 'scale-125' : ''} transition-transform`} />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-amber-300 font-bold -mt-1">
                D + Z
              </span>
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border border-rose-500/50 animate-ping pointer-events-none" />
          </div>
          <span className="block text-xs text-zinc-400 font-serif-luxury italic mt-3">
            Yurakni bosing — muhabbat sadolari yangraydi
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onScrollToMiddle}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-rose-600/35 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
          >
            <span>She'rlarni & Tuyg'ularni Ko'rish</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={handlePulse}
            className="px-6 py-3.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-rose-500/40 text-rose-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
          >
            <Flower2 className="w-4 h-4 text-rose-400" />
            <span>Gullar Yog'dusi</span>
          </button>
        </div>
      </div>

      {/* Present Feeling Badges */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl w-full mt-12 pt-8 border-t border-rose-500/20 text-left">
        <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display text-xs font-bold text-white">Olovli Muhabbat</h4>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Doniyorning yuragi faqat Zilola deb yonmoqda
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
            <Heart className="w-4 h-4 fill-current" />
          </div>
          <div>
            <h4 className="font-display text-xs font-bold text-white">Shu Soniyada</h4>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Har bir nafasda sening kulging va iforing
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display text-xs font-bold text-white">Yagona Malak</h4>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Zilola — Doniyorning butun dunyodagi yagonasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
