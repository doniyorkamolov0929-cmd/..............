import React, { useState } from 'react';
import { Gift, Heart, Sparkles, X, Gem, CheckCircle } from 'lucide-react';
import { playRomanticChime } from '../utils/romanticAudio';

interface SurpriseGiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurpriseGiftModal: React.FC<SurpriseGiftModalProps> = ({ isOpen, onClose }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);

  if (!isOpen) return null;

  const handleOpenChest = () => {
    playRomanticChime();
    setIsOpened(true);
  };

  const handleAccept = () => {
    playRomanticChime();
    setAccepted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#18121d] via-[#100d14] to-[#08070a] border border-amber-500/40 rounded-3xl p-6 md:p-10 shadow-2xl shadow-rose-950/60 text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isOpened ? (
          <div className="py-6 space-y-5 animate-in zoom-in-95 duration-300">
            <div className="relative inline-block cursor-pointer group" onClick={handleOpenChest}>
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 border-2 border-amber-200 shadow-2xl shadow-amber-500/40 flex items-center justify-center text-zinc-950 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-12 h-12" />
              </div>
              <div className="absolute inset-0 rounded-3xl bg-amber-400/20 animate-ping -z-10" />
            </div>

            <h2 className="font-display text-2xl font-bold text-white">
              Zilola Uchun Sirli Syurpriz
            </h2>

            <p className="font-serif-luxury italic text-sm text-zinc-300 max-w-xs mx-auto leading-relaxed">
              Doniyor ushbu qutida o'zining eng muqaddas tuyg'ularini qoldirgan. Ochish uchun bosing!
            </p>

            <button
              onClick={handleOpenChest}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all"
            >
              Syurprizni Ochish ✨
            </button>
          </div>
        ) : !accepted ? (
          <div className="py-4 space-y-5 animate-in zoom-in-95 duration-400">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-rose-600/40">
              <Gem className="w-10 h-10 animate-bounce" />
            </div>

            <span className="text-xs font-serif-luxury italic text-amber-300 uppercase tracking-widest block">
              Doniyorning Eng Muhim Savoli
            </span>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              «Zilolam, men bilan bir umr baxtli bo'lishga rozimisan?»
            </h3>

            <p className="font-serif-luxury italic text-xs md:text-sm text-zinc-300 leading-relaxed">
              «Har tong sening tabassuming bilan uyg'onish, har oqshom senga muhabbatimni aytish — mening bu dunyodagi eng katta orzuimdir.»
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-rose-600/40 hover:scale-105 transition-all"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>HA, BIR UMRLIK ROZIMAN! ❤️</span>
              </button>
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-amber-300 font-bold text-xs transition-all"
              >
                <span>SIZNI SEVAMAN! 💍</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8 space-y-4 animate-in zoom-in-95 duration-400">
            <div className="w-20 h-20 rounded-full bg-rose-500/20 border border-rose-500 text-rose-300 mx-auto flex items-center justify-center">
              <Heart className="w-10 h-10 fill-rose-500" />
            </div>

            <h3 className="font-display text-3xl font-bold text-white">
              Biz Bir Umr Birgamiz!
            </h3>

            <p className="font-serif-luxury italic text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              «Doniyor va Zilolaning sevgisi — bu osmondagi yulduzlar kabi so'nmas, vaqt sinovlaridan ustun bo'lgan abadiy mo''jizadir!»
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-8 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
            >
              Yopish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
