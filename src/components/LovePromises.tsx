import React from 'react';
import { LOVE_PROMISES } from '../data/romanticData';
import { ShieldCheck, Heart, Sparkles, Smile, HandHeart, CheckCircle2 } from 'lucide-react';

export const LovePromises: React.FC = () => {
  return (
    <div className="w-full bg-zinc-900/50 border border-amber-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif-luxury italic mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Muqaddas Qasam</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
          Doniyorning Zilolaga Abadiy Va'dalari
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Har bir so'z — bu mening yuragimga o'yilgan qasamyoddir
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {LOVE_PROMISES.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg hover:scale-[1.01]"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                  0{item.id}
                </span>
                <Heart className="w-4 h-4 text-rose-500/60 group-hover:fill-rose-500 transition-colors" />
              </div>

              <h3 className="font-display text-base font-bold text-white group-hover:text-amber-200 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="font-serif-luxury italic text-xs text-zinc-300 leading-relaxed">
                "{item.promise}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
              <CheckCircle2 className="w-3 h-3 text-amber-400" />
              <span>Doniyor tomonidan qasamyod qilindi</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
