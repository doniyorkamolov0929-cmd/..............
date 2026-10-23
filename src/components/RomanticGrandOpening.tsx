import React, { useState } from 'react';
import { DONIYOR_CONFESSION } from '../data/romanticData';
import { playRomanticChime } from '../utils/romanticAudio';
import { Heart, Sparkles, Mail, Volume2, Flower2, X } from 'lucide-react';

interface RomanticGrandOpeningProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RomanticGrandOpening: React.FC<RomanticGrandOpeningProps> = ({
  isOpen,
  onClose,
}) => {
  const [isUnfolded, setIsUnfolded] = useState(false);

  if (!isOpen) return null;

  const handleOpenLetter = () => {
    playRomanticChime();
    setIsUnfolded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-zinc-950/95 backdrop-blur-2xl animate-in fade-in duration-500 overflow-y-auto">
      {/* Background ambient lighting */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating close button */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors shadow-xl"
        title="Yopish"
      >
        <X className="w-5 h-5" />
      </button>

      {!isUnfolded ? (
        /* The Sealed Royal Wax Envelope Stage */
        <div className="relative w-full max-w-xl text-center my-auto p-4 animate-in zoom-in-95 duration-500">
          <div className="relative mx-auto w-full max-w-md bg-gradient-to-br from-[#1a141d] via-[#120f16] to-[#0c0a0e] border border-rose-500/40 rounded-3xl p-8 md:p-10 shadow-2xl shadow-rose-950/60 flex flex-col items-center">
            {/* Stamp & Ribbon */}
            <div className="absolute -top-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white text-xs font-serif-luxury italic tracking-widest uppercase shadow-lg shadow-rose-600/30 flex items-center gap-1.5 border border-rose-300/30">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Maxsus Maktub • Doniyordan Zilolaga</span>
            </div>

            <div className="my-6 relative cursor-pointer group" onClick={handleOpenLetter}>
              {/* Wax Seal */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-800 via-rose-600 to-rose-500 border-4 border-amber-300/60 shadow-2xl shadow-rose-600/50 flex flex-col items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                <span className="font-display font-black text-2xl tracking-tighter text-amber-200">
                  D & Z
                </span>
                <Heart className="w-4 h-4 fill-amber-200 text-amber-200 -mt-1" />
              </div>
              <div className="absolute inset-0 rounded-full bg-rose-500/20 animate-ping -z-10" />
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-rose-200 via-amber-100 to-rose-300 bg-clip-text text-transparent">
              Zilolam Uchun...
            </h2>

            <p className="font-serif-luxury italic text-sm md:text-base text-zinc-300 max-w-xs mx-auto leading-relaxed mb-6">
              «Bu xat oddiy so'zlar emas, bu mening yuragimning eng toza va cheksiz muhabbat sadolaridir.»
            </p>

            <button
              onClick={handleOpenLetter}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-spin" />
              <span>Maktubni Ochish & O'qish</span>
              <Heart className="w-4 h-4 fill-current text-rose-200" />
            </button>

            <span className="text-[11px] text-zinc-500 mt-4 flex items-center gap-1 font-serif-luxury italic">
              <Volume2 className="w-3 h-3 text-rose-400" />
              <span>Ochilganda mayin romantik musiqa yangraydi</span>
            </span>
          </div>
        </div>
      ) : (
        /* The Unfolded Grand Declaration Stage */
        <div className="relative w-full max-w-3xl bg-gradient-to-b from-[#16121a] via-[#100d14] to-[#0a080c] border border-rose-500/30 rounded-3xl p-6 md:p-12 shadow-2xl shadow-rose-950/60 my-8 animate-in zoom-in-95 duration-500 text-left">
          {/* Header banner */}
          <div className="text-center mb-8 pb-6 border-b border-rose-500/20">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-serif-luxury italic mb-3">
              <Flower2 className="w-3.5 h-3.5 text-rose-400" />
              <span>{DONIYOR_CONFESSION.subtitle}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 bg-gradient-to-r from-rose-200 via-amber-100 to-rose-300 bg-clip-text text-transparent">
              {DONIYOR_CONFESSION.title}
            </h1>

            <p className="font-serif-luxury italic text-sm md:text-base text-amber-200/90 max-w-xl mx-auto leading-relaxed">
              {DONIYOR_CONFESSION.leadQuote}
            </p>
          </div>

          {/* Letter Body */}
          <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed font-serif-luxury">
            {DONIYOR_CONFESSION.letterParagraphs.map((p, idx) => (
              <p key={idx} className="indent-4 md:indent-6">
                {p}
              </p>
            ))}
          </div>

          {/* Poetic Stanzas */}
          <div className="my-8 p-6 rounded-2xl bg-zinc-950/60 border border-rose-500/20 text-center space-y-4">
            {DONIYOR_CONFESSION.poemStanzas.map((stanza, idx) => (
              <p key={idx} className="font-serif-luxury italic text-rose-200 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {stanza}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div className="pt-6 border-t border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{DONIYOR_CONFESSION.date} • Bir Umrlik Sevgi</span>
            </div>

            <div className="text-right">
              <span className="text-xs text-zinc-400 block font-serif-luxury italic">Cheksiz muhabbat va vafodorlik bilan:</span>
              <span className="font-display font-bold text-xl text-rose-300 tracking-wide">
                {DONIYOR_CONFESSION.signOff}
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
            >
              Bizning Sevgi Maskanimizga Kirish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
