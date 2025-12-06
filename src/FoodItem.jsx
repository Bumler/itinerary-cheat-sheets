import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function FoodItem({ emoji, name, description }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const openTooltip = () => {
    setShowTooltip(true);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  const modal = showTooltip && createPortal(
    <div 
      className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4"
      onClick={closeTooltip}
    >
      <div 
        className="bg-slate-800 rounded-2xl p-5 w-[85vw] max-w-sm border border-white/20 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{emoji}</span>
          <h3 className="text-white font-bold text-xl">{name}</h3>
        </div>
        <p className="text-white/80 text-base leading-relaxed">{description}</p>
        <button 
          onClick={closeTooltip}
          className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white text-sm py-2.5 rounded-lg transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer select-none active:opacity-70"
        onClick={openTooltip}
      >
        <span className="text-base">{emoji}</span>
        <p className="text-white text-[11px] font-medium">{name}</p>
      </div>
      {modal}
    </>
  );
}
