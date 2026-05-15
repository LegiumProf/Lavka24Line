import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-manrope">
      <div className="bg-[#1F4B8B] rounded-[32px] p-8 md:p-12 pb-8 flex flex-col justify-between overflow-hidden relative text-white">
        
        {/* Top half: branding and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10 lg:gap-24 relative z-10">
          
          <div className="flex flex-col flex-1">
            <div className="text-[16px] font-medium text-white/80 mb-8">Lavka24Line</div>
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white leading-[1.1] mb-2">
              Спасибо, что выбираете качество
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/90">
              Свежесть, вкус и честное производство — в каждом заказе, каждый день.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-[380px] shrink-0 mt-2 md:mt-12">
            <div className="text-[16px] font-medium text-white mb-3">Подписаться на рассылку</div>
            <form className="relative bg-white rounded-full flex items-center p-1 pl-6">
              <input 
                type="email" 
                placeholder="email" 
                className="bg-transparent border-none outline-none text-black text-[15px] flex-1 py-3 w-full placeholder:text-gray-400"
                required
              />
              <button 
                type="submit" 
                className="w-12 h-12 bg-[#1F4B8B] rounded-full flex items-center justify-center shrink-0 hover:bg-[#153664] transition-colors"
              >
                <ArrowRight size={20} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-6 relative z-10"></div>

        {/* Bottom half: social and links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex gap-3">
             <a href="#" className="w-10 h-10 rounded-full bg-[#0077FF] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778784980/vk_icon_uuhyr0.svg" alt="VK" className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0088CC] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778784980/telegram_icon_nasb3f.svg" alt="Telegram" className="w-[24px] h-[24px]" />
              </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[13px] text-white/90">
            <a href="#" className="hover:underline underline-offset-4">Публичная оферта</a>
            <a href="#" className="hover:underline underline-offset-4">Политика конфиденциальности</a>
            <a href="#" className="hover:underline underline-offset-4">Разработка сайта</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
