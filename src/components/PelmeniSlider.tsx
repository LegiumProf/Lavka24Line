import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import productsData from '../data/products.json';

export default function PelmeniSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'composition'>('description');

  const activeProduct = productsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? productsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === productsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex justify-between items-start gap-8 flex-wrap lg:flex-nowrap">
      {/* Left Area (Images & Title) */}
      <div className="flex-1 flex flex-col items-start max-w-[840px] w-full gap-8">
        {/* Main Product Info & Image */}
        <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-8 md:gap-[40px] lg:gap-[64px]">
          <div className="w-full max-w-[320px] lg:max-w-[400px] shrink-0 flex justify-start">
            <img 
              src={activeProduct.mainImage} 
              alt="Pelmeni" 
              className="w-full h-auto object-contain object-left"
              style={{ filter: 'drop-shadow(113px 113px 64px rgba(0, 0, 0, 0.03)) drop-shadow(64px 64px 54px rgba(0, 0, 0, 0.1)) drop-shadow(28px 28px 40px rgba(0, 0, 0, 0.17)) drop-shadow(7px 7px 22px rgba(0, 0, 0, 0.2))' }}
            />
          </div>
          <div className="flex flex-col items-start flex-1 min-w-[280px]">
            <h3 
              className="font-amatic text-[60px] md:text-[80px] lg:text-[100px] leading-[0.8] m-0" 
              style={{ color: activeProduct.themeColor }}
            >
              {activeProduct.nameFront}
              <br />
              <span className="text-[48px] md:text-[60px] lg:text-[80px]">{activeProduct.nameBack}</span>
            </h3>
            <p className="font-manrope text-[16px] md:text-[18px] text-[#2A2A2A] mt-6 whitespace-pre-line">
              {activeProduct.shortDesc}
            </p>
          </div>
        </div>

        {/* Carousel / Thumbnails Area */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] px-3 md:px-6 py-4 md:py-6 flex items-center justify-center w-full shadow-sm gap-2 md:gap-4 overflow-hidden">
          <button 
            onClick={handlePrev} 
            className="hidden md:flex w-12 h-12 shrink-0 bg-gray-100 rounded-full items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <div className="flex-1 w-full flex items-center justify-center gap-2 sm:gap-4 pb-2 pt-2">
            {productsData.map((item, idx) => (
              <div 
                key={item.id} 
                onClick={() => setCurrentIndex(idx)}
                className={`flex-1 max-w-[200px] aspect-[4/3] rounded-[16px] md:rounded-2xl cursor-pointer transition-all border-2 relative overflow-hidden flex flex-col items-center justify-center box-border
                  ${idx === currentIndex ? 'shadow-md bg-white' : 'border-transparent opacity-70 hover:opacity-100'}`}
                style={{ borderColor: idx === currentIndex ? item.themeColor : 'transparent' }}
              >
                <div className="w-full h-full p-2 md:p-4 flex items-center justify-center">
                  <img 
                    src={item.thumbImage} 
                    alt={item.nameBack} 
                    className="max-w-full max-h-full object-contain pointer-events-none drop-shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="hidden md:flex w-12 h-12 shrink-0 bg-gray-100 rounded-full items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Right Area (Details Card) */}
      <div className="w-full lg:w-[360px] shrink-0 bg-white rounded-[24px] p-6 lg:p-8 shadow-sm font-manrope text-[16px] text-[#2A2A2A] self-stretch flex flex-col">
        {/* Toggle Buttons */}
        <div className="flex w-full bg-gray-100 rounded-xl p-1 mb-6">
          <button 
            className={`flex-1 py-1.5 text-center text-[15px] rounded-lg font-medium transition-colors ${activeTab === 'description' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
            onClick={() => setActiveTab('description')}
          >
            Описание
          </button>
          <button 
            className={`flex-1 py-1.5 text-center text-[15px] rounded-lg font-medium transition-colors ${activeTab === 'composition' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
            onClick={() => setActiveTab('composition')}
          >
            Состав
          </button>
        </div>

        {/* Content Area */}
        <div className="mb-6 flex-1">
          {activeTab === 'description' ? (
            <p className="m-0 leading-[1.5]">{activeProduct.description}</p>
          ) : (
            <p className="m-0 leading-[1.5]">{activeProduct.composition}</p>
          )}
        </div>

        {/* Info Blocks */}
        <div className="flex flex-col gap-6">
          {/* Nutrition */}
          <div>
            <h4 className="font-semibold text-black m-0 mb-3">Пищевая ценность на 100 г</h4>
            <div className="flex justify-between items-start text-[15px]">
              <div>
                <span className="font-semibold text-black block text-[16px]">{activeProduct.nutrition.kcal}</span>
                <span className="text-sm text-gray-500">ккал</span>
              </div>
              <div>
                <span className="font-semibold text-black block text-[16px]">{activeProduct.nutrition.proteins} г</span>
                <span className="text-sm text-gray-500">белки</span>
              </div>
              <div>
                <span className="font-semibold text-black block text-[16px]">{activeProduct.nutrition.fats} г</span>
                <span className="text-sm text-gray-500">жиры</span>
              </div>
              <div>
                <span className="font-semibold text-black block text-[16px]">{activeProduct.nutrition.carbs} г</span>
                <span className="text-sm text-gray-500">углеводы</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-black m-0 mb-1">Производитель</h4>
            <p className="m-0 text-[14px] leading-[1.4] text-gray-600">{activeProduct.manufacturer}</p>
          </div>

          <div>
            <h4 className="font-semibold text-black m-0 mb-1">Срок годности</h4>
            <p className="m-0 text-[14px] text-gray-600">{activeProduct.shelfLife}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
