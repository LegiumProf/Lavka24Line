import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import reviewsData from '../data/reviews.json';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9.16853 4.39343L14 5.09545L10.5 8.50853L11.3262 13.3196L7 11.0458L2.67376 13.3196L3.5 8.50853L0 5.09545L4.83147 4.39343L7 0Z" fill="#1A1A1A"/>
  </svg>
);

export default function ReviewsSlider() {
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
      const totalSteps = Math.max(1, reviewsData.length - 3); // Approx 3 items visible
      const newIndex = Math.min(
        totalSteps,
        Math.max(0, Math.round(progress * totalSteps))
      );
      setActiveIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  // Generate dots based on length
  const dotsCount = Math.max(1, reviewsData.length - 2);

  return (
    <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col font-manrope pt-[20px]">
      <div className="flex justify-between items-center mb-[40px]">
        <h2 className="text-[36px] font-semibold text-black m-0 leading-tight">Отзывы</h2>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-[20px] overflow-x-auto hide-scrollbar snap-x snap-mandatory"
        style={{
          marginRight: 'calc(-50vw + 50%)',
          paddingRight: 'calc(50vw - 50%)'
        }}
      >
        {reviewsData.map((review) => (
          <div 
            key={review.id} 
            className="w-[320px] md:w-[400px] shrink-0 snap-start bg-white rounded-[32px] p-8 flex flex-col"
          >
            {/* Header: Avatar, Name, Rating */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-[16px] text-black m-0 leading-tight">{review.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-[14px] text-gray-500 font-medium">{review.date}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 mt-2">
              <div className="font-serif text-[48px] leading-[0] h-[24px] text-black">“</div>
              <p className="text-[15px] leading-[1.5] text-black px-1 mt-6 mb-2 flex-1 whitespace-pre-wrap">
                {review.text}
              </p>
              <div className="font-serif text-[48px] leading-[0] h-[24px] text-black text-right mt-4">”</div>
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
