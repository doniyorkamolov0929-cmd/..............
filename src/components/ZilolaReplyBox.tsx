import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageCircleHeart, CheckCircle2 } from 'lucide-react';
import { playRomanticChime } from '../utils/romanticAudio';

export const ZilolaReplyBox: React.FC = () => {
  const [replyText, setReplyText] = useState('');
  const [savedReplies, setSavedReplies] = useState<{ id: string; text: string; date: string }[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('zilola_replies_doniyor');
      if (stored) {
        setSavedReplies(JSON.parse(stored));
      } else {
        // Default warm sample reply
        setSavedReplies([
          {
            id: 'sample-1',
            text: "Doniyor, bu dunyoda sizning borligingiz mening eng katta baxtim! So'zlaringizdan ko'zlarimga quvonch yoshlari keldi. Men ham sizni judayam yaxshi ko'raman!",
            date: "Zilolaning javobi",
          },
        ]);
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    playRomanticChime();
    const newReply = {
      id: `reply-${Date.now()}`,
      text: replyText.trim(),
      date: new Date().toLocaleDateString('uz-UZ', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [newReply, ...savedReplies];
    setSavedReplies(updated);
    try {
      localStorage.setItem('zilola_replies_doniyor', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }

    setReplyText('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#18111a] via-[#100d14] to-[#0a080c] border border-rose-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-rose-500/20">
        <div>
          <div className="flex items-center gap-2">
            <MessageCircleHeart className="w-5 h-5 text-rose-400" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">
              Zilolaning Doniyorga Qalb Javobi
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Zilolam, ushbu sahifani o'qib qalbida paydo bo'lgan his-tuyg'ularini yozib qoldirishi mumkin bo'lgan maxsus burchak
          </p>
        </div>

        <span className="text-xs font-serif-luxury italic text-rose-300 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30">
          Faqat Ikkimiz Uchun
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSendReply} className="space-y-3">
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Zilolam, Doniyorga o'z qalb so'zlaringizni yozing..."
          rows={3}
          className="w-full bg-zinc-950/80 border border-rose-500/30 rounded-2xl p-4 text-xs md:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-400 font-serif-luxury leading-relaxed resize-none"
        />

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-zinc-500 font-serif-luxury italic">
            Xatingiz ushbu sahifada abadiy saqlanadi
          </span>

          <button
            type="submit"
            disabled={!replyText.trim()}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-600/30 disabled:opacity-50 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Doniyorga Yuborish</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>
      </form>

      {showSuccess && (
        <div className="mt-4 p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 text-xs flex items-center gap-2 animate-in fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
          <span>Maktubingiz saqlandi! Doniyor buni cheksiz hayajon bilan o'qiydi.</span>
        </div>
      )}

      {/* Displayed replies */}
      {savedReplies.length > 0 && (
        <div className="mt-6 pt-5 border-t border-zinc-800/80 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
            Zilolaning Qalb Nidalari:
          </span>
          {savedReplies.map((reply) => (
            <div
              key={reply.id}
              className="p-4 rounded-2xl bg-zinc-950/60 border border-rose-500/20 text-xs text-zinc-200 font-serif-luxury leading-relaxed relative overflow-hidden"
            >
              <Heart className="w-4 h-4 text-rose-500/40 absolute top-3 right-3" />
              <p className="italic text-rose-100 pr-6">"{reply.text}"</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-500">
                <span>— Zilolangiz</span>
                <span>{reply.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
