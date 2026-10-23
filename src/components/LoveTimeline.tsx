import React from 'react';
import { LOVE_TIMELINE } from '../data/romanticData';
import { Sparkles, Heart, Clock, Infinity, Star } from 'lucide-react';

export const LoveTimeline: React.FC = () => {
  return (
    <div className="w-full bg-zinc-900/50 border border-rose-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-serif-luxury italic mb-2">
          <Clock className="w-3.5 h-3.5" />
          <span>Vaqt va Abadiyat</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
          Doniyor va Zilolaning Muhabbat Qissasi
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Ilk nigohdan boshlab abadiy kelajakka qadar bo'lgan eng go'zal bosqichlarimiz
        </p>
      </div>

      <div className="relative border-l border-rose-500/30 ml-4 md:ml-32 space-y-8 pl-6 md:pl-10">
        {LOVE_TIMELINE.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 border-2 border-zinc-950 flex items-center justify-center text-white text-[10px] shadow-lg shadow-rose-600/40 group-hover:scale-125 transition-transform">
              <Heart className="w-3 h-3 fill-current" />
            </div>

            {/* Content card */}
            <div className="p-5 md:p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 group-hover:border-rose-500/40 transition-all shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 w-fit">
                  {item.year}
                </span>
                <span className="text-xs text-amber-300/80 font-serif-luxury italic">
                  Doniyor & Zilola
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-serif-luxury mb-3">
                {item.description}
              </p>

              <p className="text-xs font-serif-luxury italic text-rose-200/90 pt-2 border-t border-zinc-800/80">
                {item.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
