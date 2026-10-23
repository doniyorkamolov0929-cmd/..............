import React, { useState } from 'react';
import { Heart, Sparkles, Gem, PartyPopper, CheckCircle, Send, MessageCircleHeart } from 'lucide-react';
import { playRomanticChime } from '../utils/romanticAudio';
import { ZilolaReplyBox } from './ZilolaReplyBox';

interface FinaleSectionProps {
  onTriggerHearts: () => void;
}

export const FinaleSection: React.FC<FinaleSectionProps> = ({ onTriggerHearts }) => {
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const handleCelebrate = () => {
    playRomanticChime();
    onTriggerHearts();
    setHasCelebrated(true);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-b from-[#180f1d] via-[#100a14] to-[#070609] p-8 md:p-14 shadow-2xl shadow-rose-950/60 text-center space-y-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Altar Crest */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 to-amber-500/20 border border-rose-500/40 text-rose-200 text-xs font-serif-luxury italic">
          <Gem className="w-4 h-4 text-amber-300" />
          <span>Abadiy Sadoqat Muhrlangan Yakun</span>
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          «Zilolam, Sen Mening{' '}
          <span className="bg-gradient-to-r from-rose-400 via-rose-200 to-amber-300 bg-clip-text text-transparent">
            Qalbimdagi Eng Oliy Baxtimsan!
          </span>»
        </h2>

        <p className="font-serif-luxury italic text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          «Boshqa hech qanday so'z kerak emas — faqat sening nigohing, sening mayin qo'llaring va shu soniyadagi chinakam sevgimiz bas. Doniyor senga butun qalbini fido etadi!»
        </p>

        {/* Big Climax Response Button for Zilola */}
        <div className="pt-6 pb-2">
          {!hasCelebrated ? (
            <button
              onClick={handleCelebrate}
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-rose-600/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto"
            >
              <Heart className="w-6 h-6 fill-current text-white animate-bounce" />
              <span>Men Ham Sizni Sevaman, Doniyor! ❤️</span>
              <Sparkles className="w-5 h-5 text-amber-200" />
            </button>
          ) : (
            <div className="p-6 rounded-2xl bg-rose-950/60 border border-rose-500/60 max-w-md mx-auto space-y-2 animate-in zoom-in-95 duration-300 shadow-xl">
              <div className="flex items-center justify-center gap-2 text-rose-300 font-display font-bold text-lg">
                <PartyPopper className="w-6 h-6 text-amber-300" />
                <span>Muhabbatimiz Abadiy!</span>
              </div>
              <p className="font-serif-luxury italic text-xs sm:text-sm text-zinc-200">
                «Doniyor va Zilolaning yuraklari bir butun bo'ldi. Bu olamdagi eng baxtli insonlar bizmiz!»
              </p>
            </div>
          )}
          <span className="block text-xs text-zinc-400 font-serif-luxury italic mt-3">
            Zilola, ushbu tugmani bosib Doniyorga muhabbatingizni tasdiqlang
          </span>
        </div>

        {/* Doniyor's Handcrafted Signature Block */}
        <div className="pt-8 max-w-md mx-auto border-t border-rose-500/20 text-center">
          <span className="text-xs text-zinc-500 font-serif-luxury italic block mb-1">
            Har doim sening mehribon va vafodor oshig'ing:
          </span>
          <span className="font-display font-bold text-2xl md:text-3xl text-rose-300 tracking-wider">
            Doniyor
          </span>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mt-2" />
        </div>
      </div>

      {/* Zilola's Interactive Love Reply Note Box */}
      <div className="relative z-10 pt-4 max-w-3xl mx-auto text-left">
        <ZilolaReplyBox />
      </div>
    </section>
  );
};
