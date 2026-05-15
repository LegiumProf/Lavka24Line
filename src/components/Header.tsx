import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = isScrolled || !isHomePage;

  const headerClasses = `fixed top-0 left-0 w-full z-50 font-manrope transition-all duration-300 ${
    isLight ? 'bg-white shadow-md py-4 text-[#2A2A2A]' : 'bg-transparent py-6 text-white'
  }`;

  const linkClass = isLight ? 'text-[#2A2A2A] hover:text-[#1F4B8B]' : 'text-white/90 hover:text-white';
  const dividerClass = isLight ? 'bg-[#2A2A2A]/20' : 'bg-white/20';

  return (
    <header className={headerClasses}>
      <div className="max-w-[1240px] mx-auto w-full px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-[24px] font-bold tracking-wide">
          Lavka24Line
        </Link>

        {/* Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-[16px] font-medium">
            <Link to="/catalog" className={`${linkClass} transition-colors`}>Каталог</Link>
            <a href={isHomePage ? "#about" : "/#about"} className={`${linkClass} transition-colors`}>О нас</a>
            <a href={isHomePage ? "#contacts" : "/#contacts"} className={`${linkClass} transition-colors`}>Контакты</a>
          </nav>

          <div className={`w-[1px] h-6 ${dividerClass} transition-colors`}></div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a href="#" className="w-10 h-10 rounded-full bg-[#0077FF] flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778784980/vk_icon_uuhyr0.svg" alt="VK" className="w-[24px] h-[24px]" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0088CC] flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778784980/telegram_icon_nasb3f.svg" alt="Telegram" className="w-[24px] h-[24px]" />
            </a>
          </div>

          {/* Action Button */}
          <button className="h-[48px] px-6 bg-[#1F4B8B] text-white font-medium text-[16px] rounded-full hover:bg-[#153461] transition-colors cursor-pointer border border-[#1F4B8B]">
            Позвонить и заказать
          </button>
        </div>
      </div>
    </header>
  );
}
