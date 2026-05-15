import React from 'react';

export default function ContactsSection() {
  return (
    <div className="w-full flex flex-col font-manrope">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Column 1: Адрес */}
        <div className="flex flex-col">
          <h3 className="text-[20px] font-semibold text-black mb-4">Адрес</h3>
          <p className="text-[14px] text-black leading-[1.4] mb-4">
            Г. Санкт-Петербург, 24 линия<br />
            Васильевского острова, д 29.
          </p>
          <a href="#" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors rounded-full px-6 h-[48px] w-max">
            <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778785254/Yandex_Maps_icon_1_f3etxp.svg" alt="Yandex Maps" className="w-[24px] h-[24px]" />
            <span className="text-[14px] text-black font-medium text-center">Построить маршрут</span>
          </a>
        </div>

        {/* Column 2: Связь */}
        <div className="flex flex-col">
          <h3 className="text-[20px] font-semibold text-black mb-4">Связь</h3>
          <div className="mb-4">
            <div className="text-[13px] text-gray-500 mb-1">Телефон</div>
            <div className="text-[18px] font-medium text-black">+7 812 982 28 38</div>
          </div>
          <div>
            <div className="text-[13px] text-gray-500 mb-2">Соцсети</div>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#0077FF] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778784980/vk_icon_uuhyr0.svg" alt="VK" className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0088CC] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778784980/telegram_icon_nasb3f.svg" alt="Telegram" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Время работы */}
        <div className="flex flex-col">
          <h3 className="text-[20px] font-semibold text-black mb-4">Время работы</h3>
          <div className="mb-4">
            <div className="text-[13px] text-gray-500 mb-1">Пн-Вс</div>
            <div className="text-[18px] font-medium text-black">10:00–21:00</div>
          </div>
        </div>
      </div>

      {/* Map block */}
      <div className="w-full relative rounded-[32px] overflow-hidden bg-gray-200 aspect-[4/3] md:aspect-[21/9]">
        <iframe 
          title="Yandex Map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac5af1da2086e2601ec46a276d0c8a0f3322abd9982b4d993448a7f438d7898c4&amp;source=constructor" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
