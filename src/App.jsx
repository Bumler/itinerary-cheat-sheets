import { useState } from 'react';
import ItineraryCard from './ItineraryCard';
import config from './data/config.json';
import brussels from './data/brussels.json';
import paris from './data/paris.json';
import strasbourg from './data/strasbourg.json';
import zurich from './data/zurich.json';
import salzburg from './data/salzburg.json';
import vienna from './data/vienna.json';

const cities = [brussels, paris, strasbourg, zurich, salzburg, vienna];
const { route } = config;

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cities.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === cities.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center gap-4 md:p-4">
      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows - Desktop Only */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full items-center justify-center transition-colors z-10"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full items-center justify-center transition-colors z-10"
        >
          →
        </button>

        {/* Cards */}
        {cities.map((cityData, index) => (
          <div
            key={cityData.city}
            className={index === currentIndex ? '' : 'hidden'}
          >
            <ItineraryCard
              data={cityData}
              route={route}
              isActive={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Mobile Swipe Navigation */}
      <div className="md:hidden flex justify-center gap-4 mt-4 pb-4">
        <button
          onClick={goToPrevious}
          className="bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl"
        >
          →
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-2">
        {cities.map((cityData, index) => (
          <button
            key={cityData.city}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex 
                ? cityData.accentColor === 'red' ? 'bg-red-500' 
                : cityData.accentColor === 'blue' ? 'bg-blue-500'
                : cityData.accentColor === 'emerald' ? 'bg-emerald-500'
                : cityData.accentColor === 'sky' ? 'bg-sky-500'
                : cityData.accentColor === 'cyan' ? 'bg-cyan-500'
                : cityData.accentColor === 'violet' ? 'bg-violet-500'
                : 'bg-amber-500'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
