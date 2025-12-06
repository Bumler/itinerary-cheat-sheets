import { accentClasses } from './accentClasses';
import FoodItem from './FoodItem';
import foodDescriptions from './data/foodDescriptions.json';

export default function ItineraryCard({ data, route, isActive }) {
  const { city, country, flag, hotel, arrive, depart, days, markets, foods, gradient, footerEmojis, accentColor } = data;
  
  const accent = accentClasses[accentColor] || accentClasses.amber;
  const cityKey = city.toLowerCase();
  const cityFoodDescriptions = foodDescriptions[cityKey] || {};

  return (
    <div className={`w-screen min-h-screen md:w-[393px] md:min-h-[852px] bg-gradient-to-b ${gradient} p-3 md:p-4 font-sans relative overflow-hidden flex flex-col ${isActive ? '' : 'hidden md:flex'}`}>
      {/* Decorative background elements */}
      <div className={`absolute top-0 right-0 w-64 h-64 ${accent.blob1} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
      <div className={`absolute bottom-40 left-0 w-48 h-48 ${accent.blob2} opacity-10 rounded-full blur-3xl -translate-x-1/2`}></div>
      
      {/* Header */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-0.5 md:mb-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{flag}</span>
            <h1 className="text-3xl font-bold text-white tracking-tight">{city}</h1>
          </div>
          <div className="bg-white/5 rounded-lg px-2 py-1 flex items-center gap-1.5">
            <span className="text-xs">{hotel.type === 'airbnb' ? '🏠' : '🏨'}</span>
            <p className="text-white/80 text-[10px]">{hotel.name}</p>
          </div>
        </div>
        
        {/* Route */}
        <p className={`${accent.textMuted} text-xs tracking-wide mb-1.5 md:mb-3`}>
          {route.map((r, i) => (
            <span key={r}>
              <span className={r === city ? `${accent.text} font-semibold` : ""}>{r}</span>
              {i < route.length - 1 && <span className="mx-1">→</span>}
            </span>
          ))}
        </p>
        
        {/* Travel Info Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 md:p-2 mb-2 md:mb-3 border border-white/20">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className={`${accent.text} text-[10px] uppercase tracking-wider`}>Arrive</p>
              <p className="text-white font-bold text-sm">{arrive.date}</p>
              <p className="text-white/70 text-[10px]">{arrive.time} {arrive.type === 'plane' ? '✈️' : '🚂'}</p>
              <p className="text-white/50 text-[8px]">{arrive.location}</p>
            </div>
            <div className="flex-1 flex items-center justify-center px-2">
              <div className={`h-px bg-gradient-to-r from-transparent ${accent.divider} to-transparent w-full`}></div>
              <span className="text-base mx-1.5">🎄</span>
              <div className={`h-px bg-gradient-to-r from-transparent ${accent.divider} to-transparent w-full`}></div>
            </div>
            <div className="text-center">
              <p className={`${accent.text} text-[10px] uppercase tracking-wider`}>Depart</p>
              <p className="text-white font-bold text-sm">{depart.date}</p>
              <p className="text-white/70 text-[10px]">{depart.time} {depart.type === 'plane' ? '✈️' : '🚂'}</p>
              <p className="text-white/50 text-[8px]">{depart.location}</p>
            </div>
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex gap-2 md:gap-3 items-stretch flex-1">
          {/* Left Column - Itinerary */}
          <div className="flex-1 flex flex-col justify-between gap-[2px]">
            {days.map((day) => (
              <div key={day.dayNum} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex-1 flex flex-col justify-center">
                <div className={`flex items-center gap-2 ${day.activities.length > 0 ? 'mb-2' : ''}`}>
                  <span className={`${accent.badge} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                    DAY {day.dayNum} · {day.date}
                  </span>
                  <span className="text-white font-semibold text-sm">
                    {day.title} {day.emoji}
                  </span>
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
            ))}
          </div>

          {/* Right Column - Info Panels */}
          <div className="w-[145px] space-y-1.5 md:space-y-2">
            {/* Christmas Markets */}
            <div className="bg-gradient-to-br from-emerald-800/50 to-emerald-900/70 backdrop-blur-sm rounded-xl p-3 border border-emerald-500/30 h-fit">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-lg">🎄</span>
                <h3 className="text-emerald-300 font-bold text-xs uppercase tracking-wider">Markets</h3>
              </div>
              <div className="space-y-1.5">
                {markets.map((market, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 text-xs mt-0.5">★</span>
                    <p className="text-white text-[11px] font-medium leading-tight">{market}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Must-Have Foods */}
            <div className="bg-gradient-to-br from-orange-800/50 to-red-900/70 backdrop-blur-sm rounded-xl p-3 border border-orange-500/30">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-lg">🍴</span>
                <h3 className="text-orange-300 font-bold text-xs uppercase tracking-wider">Must Eats</h3>
              </div>
              <div className="space-y-1">
                {foods.map((food, idx) => (
                  <FoodItem 
                    key={idx}
                    emoji={food.emoji}
                    name={food.name}
                    description={cityFoodDescriptions[food.name] || `A delicious ${food.name} — a local favorite!`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 md:mt-4 text-center">
          <p className="text-white/40 text-[10px] tracking-widest">Nicole and Henry 2025</p>
          <div className="flex justify-center gap-1 mt-1">
            {footerEmojis.map((emoji, idx) => (
              <span key={idx} className="text-sm">{emoji}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
