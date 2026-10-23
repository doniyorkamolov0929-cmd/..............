import React, { useState } from 'react';
import { RomanticMemory, PhotoStyle, ImageResolution, AspectRatio } from '../types';
import {
  Sparkles,
  Camera,
  Wand2,
  Moon,
  Sun,
  Instagram,
  Maximize2,
  Download,
  Loader2,
  RefreshCw,
  Heart,
  Plus,
  Send,
  Check
} from 'lucide-react';

interface MemoryStudioProps {
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
}

export const MemoryStudio: React.FC<MemoryStudioProps> = ({
  memories,
  onGenerateMemory,
  onEditMemory,
  isGenerating,
  isEditing,
}) => {
  const [selectedStyle, setSelectedStyle] = useState<PhotoStyle>('Rustic/Dark');
  const [selectedSize, setSelectedSize] = useState<ImageResolution>('2K');
  const [selectedAspect, setSelectedAspect] = useState<AspectRatio>('1:1');
  const [customScene, setCustomScene] = useState('');
  const [activeTab, setActiveTab] = useState<'gallery' | 'create'>('gallery');

  // Retouch modal state
  const [editingMemory, setEditingMemory] = useState<RomanticMemory | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [inspectMemory, setInspectMemory] = useState<RomanticMemory | null>(null);

  const styles: { id: PhotoStyle; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: 'Rustic/Dark',
      label: 'Rustik / Qorong\'i (Chiaroscuro)',
      desc: 'Shamlarning iliq yog\'dusi, yulduzli tun, olov shu\'lasi va chuqur romantik kontrast',
      icon: <Moon className="w-4 h-4 text-amber-400" />,
    },
    {
      id: 'Bright/Modern',
      label: 'Yorug\' / Zamonaviy',
      desc: 'Tonggi oltin quyosh nuri, och pushti atirgullar, nurafshon Parij balkoni va nafosat',
      icon: <Sun className="w-4 h-4 text-rose-300" />,
    },
    {
      id: 'Social Media',
      label: 'Ijtimoiy Tarmoq (Flat-Lay)',
      desc: '90° tepadan polaroid kompozitsiya, tilla uzuk, qo\'lyozma sevgi xati va gul yaproqlari',
      icon: <Instagram className="w-4 h-4 text-pink-400" />,
    },
  ];

  const resolutions: { id: ImageResolution; label: string; desc: string }[] = [
    { id: '1K', label: '1K', desc: '1024×1024' },
    { id: '2K', label: '2K', desc: '2048×2048 (Tavsiya)' },
    { id: '4K', label: '4K', desc: '4096×4096 (Cinema)' },
  ];

  const presetDreamScenes = [
    "Doniyor va Zilolaning Venetsiya gondolasida yulduzlar ostidagi romantik sayri",
    "Parij Eyfel minorasi qarshisidagi terassada 101 ta qizil atirgul bilan uchrashuv",
    "Shinam tog' kaminasi oldida iliq adyolga o'ralgan holda qahva ichish",
    "Dengiz sohilida quyosh botishi paytida qo'l ushlashib yurganimiz",
    "Samarqand Registon maydoni oqshom chiroqlari ostidagi sehrli uchrashuv"
  ];

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customScene.trim()) return;
    await onGenerateMemory(customScene.trim(), selectedStyle, selectedSize, selectedAspect);
    setCustomScene('');
    setActiveTab('gallery');
  };

  const handleApplyEdit = async () => {
    if (!editingMemory || !editingMemory.photoUrl || !editPrompt.trim()) return;
    await onEditMemory(editingMemory.id, editingMemory.photoUrl, editPrompt.trim(), selectedSize);
    setEditPrompt('');
    setEditingMemory(null);
  };

  const handleDownload = (memory: RomanticMemory) => {
    if (!memory.photoUrl) return;
    const a = document.createElement('a');
    a.href = memory.photoUrl;
    a.download = `Doniyor_va_Zilola_${memory.title.replace(/[^a-zA-Z0-9]/g, '_')}_${memory.photoResolution || selectedSize}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full bg-zinc-900/50 border border-rose-500/20 rounded-3xl p-5 md:p-8 backdrop-blur-xl shadow-2xl">
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-400" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">
              Zilola Uchun Romantik Xotiralar & Orzular Studiyasi
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Gemini 3 Pro yordamida Doniyor va Zilolaning eng unutilmas onlari va orzularini yuqori aniqlikda tasvirlang
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-zinc-950 rounded-xl border border-zinc-800">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'gallery'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Bizning Xotiralar Galereyasi ({memories.length})
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'create'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Yangi Xotira / Orzu Yaratish</span>
          </button>
        </div>
      </div>

      {/* Style & Resolution Toggles Bar */}
      <div className="mb-6 space-y-4">
        {/* Style Toggles (Rustic/Dark, Bright/Modern, Social Media) */}
        <div>
          <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2">
            Fotografik Uslubni Tanlang:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {styles.map((s) => {
              const isSelected = selectedStyle === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStyle(s.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-950 border-rose-500/70 shadow-lg shadow-rose-950/30'
                      : 'bg-zinc-950/50 hover:bg-zinc-900/60 border-zinc-800/80'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-700 shrink-0 mt-0.5">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-white">
                        {s.label}
                      </span>
                      {isSelected && (
                        <span className="w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center text-[10px] text-white">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resolution Affordance (1K, 2K, 4K) & Aspect Ratio */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              Rasm Sifati (Aniqligi):
            </span>
            <div className="flex items-center gap-1 p-0.5 bg-zinc-900 rounded-xl border border-zinc-800">
              {resolutions.map((res) => (
                <button
                  key={res.id}
                  onClick={() => setSelectedSize(res.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedSize === res.id
                      ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-zinc-950 shadow-md'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {res.label}
                  <span className="text-[10px] ml-1 font-normal opacity-80 hidden sm:inline">
                    {res.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              Nisbat:
            </span>
            <div className="flex items-center gap-1 p-0.5 bg-zinc-900 rounded-xl border border-zinc-800">
              {(['1:1', '4:3', '16:9', '9:16'] as AspectRatio[]).map((ar) => (
                <button
                  key={ar}
                  onClick={() => setSelectedAspect(ar)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedAspect === ar
                      ? 'bg-zinc-800 text-rose-300 border border-rose-500/40'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {ar}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content: Create New Scene */}
      {activeTab === 'create' && (
        <form onSubmit={handleCreateSubmit} className="space-y-4 mb-8 p-5 rounded-2xl bg-zinc-950/80 border border-rose-500/30">
          <div>
            <label className="text-xs font-semibold text-zinc-200 block mb-1">
              Doniyor va Zilolaning Romantik Sahnasini Yozing:
            </label>
            <textarea
              value={customScene}
              onChange={(e) => setCustomScene(e.target.value)}
              placeholder="Masalan: Doniyor va Zilolaning yulduzlar ostidagi dengiz bo'yidagi uchrashuvi, 101 ta atirgul va shamlarning iliq yog'dusi..."
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs md:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-rose-500/60"
            />
          </div>

          {/* Quick presets */}
          <div>
            <span className="text-[11px] text-zinc-400 block mb-1.5">Tayyor orzu g'oyalari:</span>
            <div className="flex flex-wrap gap-1.5">
              {presetDreamScenes.map((ps, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setCustomScene(ps)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] text-zinc-300 hover:text-rose-300 text-left transition-colors"
                >
                  + {ps}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isGenerating || !customScene.trim()}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 disabled:opacity-50 transition-all"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Gemini 3 Pro ({selectedSize}) tasvirlamoqda...</span>
              </>
            ) : (
              <>
                <Camera className="w-4 h-4" />
                <span>Gemini 3 Pro Bilan Tasvirlash ({selectedSize} • {selectedStyle})</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Tab Content: Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="bg-zinc-950/70 border border-zinc-800/80 hover:border-rose-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group shadow-xl"
          >
            {/* Visual Photo */}
            <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden cursor-pointer" onClick={() => setInspectMemory(memory)}>
              {memory.photoUrl ? (
                <>
                  <img
                    src={memory.photoUrl}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-950/80 backdrop-blur-md text-rose-300 border border-rose-500/40">
                      {memory.photoStyle || memory.recommendedStyle}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-zinc-800">
                      {memory.photoResolution || selectedSize}
                    </span>
                  </div>

                  {/* Actions on hover */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(memory);
                      }}
                      className="p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-rose-300 border border-zinc-700 shadow-md transition-all"
                      title="Yuklab olish"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInspectMemory(memory);
                      }}
                      className="p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-rose-300 border border-zinc-700 shadow-md transition-all"
                      title="Kattalashtirish"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <Camera className="w-8 h-8 text-zinc-600 mb-2" />
                  <span className="text-xs text-zinc-500">Tayyorlanmoqda...</span>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-zinc-500 font-serif-luxury italic block mb-1">
                  {memory.date} • {memory.location}
                </span>

                <h3 className="font-display text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                  {memory.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                  {memory.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-2">
                <button
                  onClick={() => setEditingMemory(memory)}
                  className="flex-1 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-rose-300 hover:text-rose-200 border border-rose-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Wand2 className="w-3.5 h-3.5 text-rose-400" />
                  <span>Retush (Nano Banana 2.1)</span>
                </button>

                <button
                  onClick={() => setInspectMemory(memory)}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white"
                  title="Ko'rish"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Retouch Modal with gemini-nano-banana-2.1 */}
      {editingMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-zinc-900 border border-rose-500/40 rounded-3xl p-6 shadow-2xl">
            <h3 className="font-display text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-rose-400" />
              <span>Gemini Nano Banana 2.1 Bilan Retush</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              "{editingMemory.title}" rasmini matnli ko'rsatma orqali o'zgartiring
            </p>

            <textarea
              value={editPrompt}
              onChange={(e) => setEditPrompt(e.target.value)}
              placeholder="Masalan: Osmonga yulduzlar qo'sh, shamlar yog'dusini iliqroq qil, atirgullarni ko'paytir..."
              rows={3}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-rose-500/60 mb-3"
            />

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setEditingMemory(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleApplyEdit}
                disabled={isEditing || !editPrompt.trim()}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-xs flex items-center gap-2 disabled:opacity-50"
              >
                {isEditing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                <span>O'zgartirishni Qo'llash</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Inspect Modal */}
      {inspectMemory && inspectMemory.photoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-xl animate-in fade-in duration-200" onClick={() => setInspectMemory(null)}>
          <div className="relative max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden p-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={inspectMemory.photoUrl}
              alt={inspectMemory.title}
              className="max-h-[75vh] w-auto mx-auto object-contain rounded-2xl"
            />
            <div className="p-4 text-center">
              <h3 className="font-display text-base font-bold text-white">{inspectMemory.title}</h3>
              <p className="text-xs text-zinc-400 mt-1">{inspectMemory.description}</p>
              <button
                onClick={() => handleDownload(inspectMemory)}
                className="mt-3 px-4 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-zinc-950 text-xs font-bold inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Yuklab Olish</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
