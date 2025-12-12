import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DayCard({ day, accent, details, city }) {
  const [showDetails, setShowDetails] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showDetails]);

  const closeModal = () => {
    setShowDetails(false);
  };

  const modal = showDetails && details && createPortal(
    <div 
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div 
        className="bg-slate-800 rounded-2xl p-5 w-[90vw] max-w-md max-h-[80vh] overflow-y-auto border border-white/20 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className={`${accent.badge} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
            DAY {day.dayNum} · {day.date}
          </span>
          <span className="text-white font-semibold">
            {day.title} {day.emoji}
          </span>
        </div>
        
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          {details.description}
        </p>

        {details.reservations && details.reservations.length > 0 && (
          <div className="space-y-3 mb-4">
            <h4 className="text-white/60 text-xs uppercase tracking-wider">Reservations</h4>
            {details.reservations.map((res, idx) => (
              <a
                key={idx}
                href={`https://www.google.com/maps/search/${encodeURIComponent(res.address || (res.name + ' ' + city))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-amber-500/20 hover:bg-amber-500/30 rounded-lg p-3 transition-colors border border-amber-500/30"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-amber-400 font-bold text-sm">{res.time}</span>
                  <span className="text-white font-medium text-sm">{res.name}</span>
                  <span className="text-white/40 text-xs ml-auto">↗</span>
                </div>
                <p className="text-white/60 text-xs pl-12">{res.description}</p>
              </a>
            ))}
          </div>
        )}
        
        {details.recommendations && details.recommendations.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-white/60 text-xs uppercase tracking-wider">Recommendations</h4>
            {details.recommendations.map((rec, idx) => (
              <a
                key={idx}
                href={`https://www.google.com/maps/search/${encodeURIComponent(rec.alias || (rec.name + ' ' + city))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span>{rec.timeIcon}</span>
                  <span className="text-white font-medium text-sm">{rec.name}</span>
                  <span className="ml-auto flex items-center gap-2">
                    <span>{rec.foodIcon}</span>
                    <span className="text-white/40 text-xs">↗</span>
                  </span>
                </div>
                <p className="text-white/60 text-xs pl-6">{rec.description}</p>
              </a>
            ))}
          </div>
        )}
        
        <button 
          onClick={closeModal}
          className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white text-sm py-2.5 rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );

  const hasDetails = details && (details.description || (details.recommendations && details.recommendations.length > 0));

  return (
    <>
      <div 
        className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex-1 flex flex-col justify-center ${hasDetails ? 'cursor-pointer hover:bg-white/15 transition-colors' : ''}`}
        onClick={() => hasDetails && setShowDetails(true)}
      >
        <div className={`flex items-center gap-2 ${day.activities.length > 0 ? 'mb-2' : ''}`}>
          <span className={`${accent.badge} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
            DAY {day.dayNum} · {day.date}
          </span>
          <span className="text-white font-semibold text-sm">
            {day.title} {day.emoji}
          </span>
          {hasDetails && <span className="text-white/40 text-xs ml-auto">ⓘ</span>}
        </div>
        <div className="space-y-1 text-xs">
          {day.activities.map((activity, idx) => (
            <div key={idx} className="flex gap-2">
              <span className={accent.text}>{activity.timeIcon}</span>
              <div className="text-white/90">
                {activity.alternatives ? (
                  <div className="space-y-1">
                    <p>{activity.text}</p>
                    {activity.alternatives.map((alt, altIdx) => (
                      <p key={altIdx}>or {alt}</p>
                    ))}
                  </div>
                ) : activity.or ? (
                  <p>{activity.text} <span className="text-white/50">OR</span> {activity.or}</p>
                ) : (
                  <>
                    <p>{activity.text}</p>
                    {activity.subtext && (
                      <span className="text-white/50 text-[10px]">{activity.subtext}</span>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal}
    </>
  );
}
