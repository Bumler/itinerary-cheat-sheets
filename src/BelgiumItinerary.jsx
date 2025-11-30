import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function BelgiumItinerary() {
  const cardRef = useRef(null);

  const downloadAsImage = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement('a');
      link.download = 'belgium-itinerary.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div ref={cardRef} className="w-[390px] min-h-[844px] bg-gradient-to-b from-amber-900 via-red-900 to-slate-900 p-4 font-sans relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-40 left-0 w-48 h-48 bg-red-400 opacity-10 rounded-full blur-3xl -translate-x-1/2"></div>
      
      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🇧🇪</span>
          <h1 className="text-3xl font-bold text-white tracking-tight">Belgium</h1>
        </div>
        <p className="text-amber-200/60 text-xs tracking-wide mb-3">
          <span className="text-amber-300 font-semibold">Brussels</span>
          <span className="mx-1">→</span>Paris<span className="mx-1">→</span>Strasbourg<span className="mx-1">→</span>Zurich<span className="mx-1">→</span>Salzburg<span className="mx-1">→</span>Vienna
        </p>
        
        {/* Travel Info Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-2 border border-white/20">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-amber-300 text-xs uppercase tracking-wider">Arrive</p>
              <p className="text-white font-bold">12/13</p>
              <p className="text-white/70 text-xs">1:40pm ✈️</p>
            </div>
            <div className="flex-1 flex items-center justify-center px-3">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full"></div>
              <span className="text-xl mx-2">🎄</span>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full"></div>
            </div>
            <div className="text-center">
              <p className="text-amber-300 text-xs uppercase tracking-wider">Depart</p>
              <p className="text-white font-bold">12/17</p>
              <p className="text-white/70 text-xs">11:13am 🚂</p>
            </div>
          </div>
        </div>
        
        {/* Hotel Info */}
        <div className="bg-white/5 rounded-lg px-3 py-2 mb-4 flex items-center justify-center gap-2">
          <span className="text-sm">🏨</span>
          <p className="text-white/80 text-xs">Staying at <span className="text-white font-medium">The Scott Hotel Brussels</span></p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex gap-3 items-stretch">
          {/* Left Column - Itinerary (58%) */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Day 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">DAY 1 · 12/13</span>
                <span className="text-white font-semibold text-sm">Arrive! 🛬</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex gap-2">
                  <span className="text-amber-300">☀️</span>
                  <p className="text-white/90">Explore Neighborhood</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-300">🌙</span>
                  <p className="text-white/90">Christmas Markets 🎅</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">DAY 2 · 12/14</span>
                <span className="text-white font-semibold text-sm">🍫 & Jazz 🎷</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex gap-2">
                  <span className="text-amber-300">🌅</span>
                  <p className="text-white/90">🍫 Sommelier @10:30</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-300">☀️</span>
                  <p className="text-white/90 leading-snug">City Center: Leopold Quarter, Parc Leopold, Cinquantenaire</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-300">🌙</span>
                  <p className="text-white/90">Ixelles → Jazz @8:30<br/><span className="text-white/50 text-[10px]">Music Village</span></p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">DAY 3 · 12/15</span>
                <span className="text-white font-semibold text-sm">Bruges 🏰</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex gap-2">
                  <span className="text-amber-300">🌅</span>
                  <p className="text-white/90">🍳 It's Toast</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-300">☀️</span>
                  <p className="text-white/90 leading-snug">Minnewater, Belfort, Market & Rosary Quay</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-300">🌙</span>
                  <p className="text-white/90">🎄 Market & Return</p>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">DAY 4 · 12/16</span>
                <span className="text-white font-semibold text-sm">Relax or RUN</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex gap-2">
                  <span className="text-amber-300">🌅</span>
                  <div className="text-white/90 space-y-1">
                    <p>🏃 Run (5k or 10k)</p>
                    <p>or Cafe Crawl</p>
                    <p>or 🥕 Marché du Chatelain</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-300">☀️</span>
                  <p className="text-white/90">🖼️ Royal Museum <span className="text-white/50">OR</span> Ixelles Ponds</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-300">🌙</span>
                  <p className="text-white/90">✨ Nice Dinner 🍽️</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Panels (42%) */}
          <div className="w-[145px] space-y-2">
            {/* Christmas Markets */}
            <div className="bg-gradient-to-br from-emerald-800/50 to-emerald-900/70 backdrop-blur-sm rounded-xl p-3 border border-emerald-500/30 h-fit">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-lg">🎄</span>
                <h3 className="text-emerald-300 font-bold text-xs uppercase tracking-wider">Markets</h3>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-0.5">★</span>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-tight">Grand Place</p>
                    <p className="text-white/50 text-[9px]">Light shows & tree</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-0.5">★</span>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-tight">Place Ste-Catherine</p>
                    <p className="text-white/50 text-[9px]">Main market hub</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-0.5">★</span>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-tight">Marché aux Poissons</p>
                    <p className="text-white/50 text-[9px]">200+ chalets</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-0.5">★</span>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-tight">Place de Brouckère</p>
                    <p className="text-white/50 text-[9px]">Ice rink & Ferris wheel</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-0.5">★</span>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-tight">Tour Noire</p>
                    <p className="text-white/50 text-[9px]">Medieval tower</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-0.5">★</span>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-tight">Bruges Markt</p>
                    <p className="text-white/50 text-[9px]">Main square</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Must-Have Foods */}
            <div className="bg-gradient-to-br from-orange-800/50 to-red-900/70 backdrop-blur-sm rounded-xl p-3 border border-orange-500/30">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-lg">🍴</span>
                <h3 className="text-orange-300 font-bold text-xs uppercase tracking-wider">Must Eats</h3>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base">🧇</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Waffles</p>
                    <p className="text-white/50 text-[9px]">Liège style!</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🍟</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Frites</p>
                    <p className="text-white/50 text-[9px]">Double-fried + mayo</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🥔</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Croquettes</p>
                    <p className="text-white/50 text-[9px]">Crispy & creamy</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🦪</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Moules-Frites</p>
                    <p className="text-white/50 text-[9px]">National dish!</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🍪</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Speculoos</p>
                    <p className="text-white/50 text-[9px]">Spiced cookie</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🍺</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Trappist Beer</p>
                    <p className="text-white/50 text-[9px]">Abbey brews</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🍷</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Glühwein</p>
                    <p className="text-white/50 text-[9px]">Hot mulled wine</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🥃</span>
                  <div>
                    <p className="text-white text-[11px] font-medium">Jenever</p>
                    <p className="text-white/50 text-[9px]">Belgian gin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-white/40 text-[10px] tracking-widest">Nicole and Henry 2025</p>
          <div className="flex justify-center gap-1 mt-1">
            <span className="text-sm">🍫</span><span className="text-sm">🍺</span><span className="text-sm">🧇</span><span className="text-sm">🎄</span><span className="text-sm">❄️</span>
          </div>
        </div>
      </div>
    </div>
    
    <button
      onClick={downloadAsImage}
      className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-colors flex items-center gap-2"
    >
      <span>📥</span> Download as Image
    </button>
  </div>
  );
}
