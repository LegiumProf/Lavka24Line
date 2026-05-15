import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import promotionsData from '../data/promotions.json';

export default function PromotionsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      if (scrollWidth <= clientWidth) {
        setActiveIndex(0);
        return;
      }
      
      const progress = scrollLeft / (scrollWidth - clientWidth);
      const totalSteps = Math.max(1, promotionsData.length - 3); // Approx 3 items visible
      const newIndex = Math.min(
        totalSteps,
        Math.max(0, Math.round(progress * totalSteps))
      );
      setActiveIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Generate dots based on length
  const dotsCount = Math.max(1, promotionsData.length - 2);

  return (
    <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col font-manrope">
      <div className="flex justify-between items-center mb-[40px]">
        <h2 className="text-[36px] font-semibold text-black m-0 leading-tight">Интерьер</h2>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-[20px] overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-[10px]"
        style={{
          marginRight: 'calc(-50vw + 50%)',
          paddingRight: 'calc(50vw - 50%)'
        }}
      >
        {promotionsData.map((promo) => (
          <div key={promo.id} className="w-[300px] md:w-[400px] shrink-0 snap-start">
            <div className="relative w-full rounded-[24px] overflow-hidden bg-gray-200 aspect-[4/5] shadow-sm">
              <img src={promo.image} alt="Promotion" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 relative h-[48px]">
        {/* Next/Prev buttons - aligned right */}
        <div className="absolute right-0 flex items-center gap-3">
          <button 
            onClick={scrollLeft} 
            className="w-12 h-12 rounded-full bg-[#EAE8E3] flex items-center justify-center hover:bg-[#dcdad5] transition-colors"
          >
            <ChevronLeft size={24} className="text-[#2A2A2A]" />
          </button>
          <button 
            onClick={scrollRight} 
            className="w-12 h-12 rounded-full bg-[#EAE8E3] flex items-center justify-center hover:bg-[#dcdad5] transition-colors"
          >
            <ChevronRight size={24} className="text-[#2A2A2A]" />
          </button>
        </div>
        
        {/* Dots - centered */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {Array.from({ length: dotsCount }).map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-gray-400' : 'w-2 bg-gray-300'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
