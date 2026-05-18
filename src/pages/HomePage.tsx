import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../components/ProductModal';
import PelmeniSlider from '../components/PelmeniSlider';
import assortmentData from '../data/assortment.json';
import { ChevronRight, ExternalLink } from 'lucide-react';

import Header from '../components/Header';
import PromotionsSlider from '../components/PromotionsSlider';
import DeliverySection from '../components/DeliverySection';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactsSection from '../components/ContactsSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full min-h-screen font-manrope">
      <ProductModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
      <section className="w-full h-[800px] md:h-[1025px] flex flex-col items-center pt-[96px] relative overflow-hidden">
        
        <Header />

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dasip9jjs/video/upload/v1778402136/0509_1_el3nt4.mp4" type="video/mp4" />
        </video>

        {/* Decorative Meat Image */}
        <img 
          src="https://res.cloudinary.com/dr1mz1jfc/image/upload/v1778495330/%D0%9A%D1%83%D1%81%D0%BE%D0%BA_%D0%BC%D1%8F%D1%81%D0%B0_%D0%A2%D0%95%D0%9D%D1%8C_2_v08csf.png"
          alt=""
          className="absolute z-[5] pointer-events-none w-[480px] md:w-[690px] h-[480px] md:h-[690px] object-contain max-w-[120%] bottom-[-80px] md:bottom-[-40px] left-1/2 -translate-x-1/2"
          style={{
            filter: 'drop-shadow(187px 187px 74px rgba(0, 0, 0, 0.01)) drop-shadow(119px 119px 68px rgba(0, 0, 0, 0.07)) drop-shadow(67px 67px 57px rgba(0, 0, 0, 0.25)) drop-shadow(30px 30px 42px rgba(0, 0, 0, 0.43)) drop-shadow(7px 7px 23px rgba(0, 0, 0, 0.49))'
          }}
        />

        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex flex-col items-center w-full mt-[50px] md:mt-[100px]">
          <h1 className="font-amatic text-[52px] md:text-[100px] font-bold text-white text-center m-0 leading-[0.9] px-4 max-w-5xl">
            Место, где мясо <br className="hidden md:inline" /> становится вкусом
          </h1>
          <p className="font-manrope text-[15px] md:text-[20px] text-white text-center m-0 mt-4 md:mt-0 px-4 max-w-3xl">
            Отборное мясо, полуфабрикаты собственного <br className="hidden md:inline" /> производства и всё для вкусного ужина — в одном месте.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-[32px] md:mt-[8px] w-full md:w-auto px-6 pb-[20px] items-center">
            <button className="h-[48px] px-[16px] w-full max-w-[320px] md:w-auto md:max-w-none bg-[#1F4B8B] text-white font-manrope text-[16px] rounded-full hover:bg-[#153461] transition-colors cursor-pointer">
              Позвонить и заказать
            </button>
            <Link to="/catalog" className="h-[48px] px-[16px] w-full max-w-[320px] md:w-auto md:max-w-none bg-transparent border border-white text-white font-manrope text-[16px] rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center justify-center">
              Посмотреть каталог
            </Link>
          </div>
        </div>
      </section>

      {/* О нас section */}
      <section id="about" className="w-full bg-[#FDF6E8] py-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="w-full lg:w-[480px]">
            <h2 className="text-[36px] font-semibold text-black m-0 leading-tight">О нас</h2>
            <div className="mt-[64px] flex flex-col gap-6 text-[20px] font-normal text-[#1B1B1B] leading-[1.4]">
              <p className="m-0">
                <span className="font-semibold">Лавка24Линия</span> – мясная лавка с качественным мясом, полуфабрикатами и продуктами для дома. Свежесть, честный ассортимент и удобство — основа нашего подхода.
              </p>
              <p className="m-0">
                Мы предлагаем домашний вкус, надежное качество и сервис, которому доверяют каждый день.
              </p>
            </div>
          </div>
          
          {/* Right Column (Cards) */}
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            
            {/* Cards Col 1 */}
            <div className="flex flex-col gap-6 pt-0 sm:pt-[100px] w-full sm:w-[320px]">
              {/* Card 1 */}
              <div className="relative bg-[#FCECCF] rounded-3xl pl-[25px] pr-0 pb-6 pt-[16px] overflow-hidden flex flex-col min-h-[200px]">
                <div className="flex-1 w-full min-h-0 flex justify-end items-start">
                  <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778402061/section2_1_vbrr80.png" alt="" className="h-full w-auto object-contain pointer-events-none" />
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-[24px] font-semibold text-black m-0 mb-1 leading-tight">Для любого стола</h3>
                  <p className="text-[20px] text-[#2A2A2A] m-0 leading-[1.2]">От быстрого ужина<br/>до семейного застолья</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="relative bg-[#FBD1D1] rounded-3xl pl-[18px] pr-[16px] pb-[16px] pt-[16px] overflow-hidden flex flex-col min-h-[220px]">
                <div className="w-[100px] h-[90px] ml-auto min-h-0 flex justify-end items-start" style={{ width: '100px', height: '90px' }}>
                  <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778402061/section2_3_fbsxeo.png" alt="" className="h-full w-auto object-contain pointer-events-none" />
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-[24px] font-semibold text-black m-0 mb-1 leading-tight">500+ клиентов</h3>
                  <p className="text-[20px] text-[#2A2A2A] m-0 leading-[1.2]">Выбирают нас для дома,<br/>гриля и семейных ужинов</p>
                </div>
              </div>
            </div>

            {/* Cards Col 2 */}
            <div className="flex flex-col gap-6 w-full sm:w-[320px]">
              {/* Card 2 */}
              <div className="relative bg-[#EBD8FF] rounded-3xl pl-[25px] pr-[24px] pb-6 pt-[16px] overflow-hidden flex flex-col min-h-[340px]">
                <div className="flex-1 w-full min-h-0 flex justify-end items-start">
                  <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778402061/section2_4_sihhdy.png" alt="" className="h-[105px] w-auto object-contain pointer-events-none" />
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-[24px] font-semibold text-black m-0 mb-1 leading-tight">Тепло домашней кухни</h3>
                  <p className="text-[20px] text-[#2A2A2A] m-0 leading-[1.2]">Продукты, которые<br/>собирают близких за<br/>одним столом</p>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="relative bg-[#FBD1D1] rounded-3xl pl-[18px] pr-[16px] pb-[16px] pt-[16px] overflow-hidden flex flex-col min-h-[220px]">
                <div className="flex-1 w-full min-h-0 flex justify-end items-start">
                  <img src="https://res.cloudinary.com/dasip9jjs/image/upload/v1778402061/section2_2_xkdgnn.png" alt="" className="h-[120px] w-auto object-contain pointer-events-none" />
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-[24px] font-semibold text-black m-0 mb-1 leading-tight">100% мясо</h3>
                  <p className="text-[20px] text-[#2A2A2A] m-0 leading-[1.2]">Без сои, усилителей<br/>и лишних добавок</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Наши пельмени section */}
      <section className="w-full bg-[#FDF6E8] py-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col">
          <h2 className="text-[36px] font-semibold text-black m-0 leading-tight mb-[64px]">Наши пельмени</h2>
          <PelmeniSlider />
        </div>
      </section>

      {/* Ассортимент section */}
      <section className="w-full bg-[#FDF6E8] pb-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col">
          <div className="flex justify-between items-center mb-[40px]">
            <h2 className="text-[36px] font-semibold text-black m-0 leading-tight">Ассортимент</h2>
            <Link to="/catalog" className="flex items-center gap-1 text-[#2A2A2A] text-[16px] hover:text-black transition-colors">
              Всё <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
            {assortmentData.slice(0, 8).map((item) => (
              <div key={item.id} className="flex flex-col cursor-pointer group/card" onClick={() => setSelectedProduct(item)}>
                <div className="relative rounded-3xl overflow-hidden aspect-square mb-4 group block">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedProduct(item); }}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={20} className="text-black" />
                  </button>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    {item.isDiscount ? (
                      <>
                        <span className="text-[#D93627] text-[24px] font-semibold leading-none">{item.price}₽</span>
                        <span className="text-gray-500 text-[16px] font-normal line-through leading-none">{item.oldPrice}₽</span>
                      </>
                    ) : (
                      <span className="text-black text-[24px] font-semibold leading-none">{item.price}₽</span>
                    )}
                  </div>
                  <h3 className="text-[20px] font-medium text-black mt-2 m-0 leading-tight">{item.name}</h3>
                  <p className="text-[16px] font-normal text-gray-500 mt-1 m-0 leading-tight">{item.weight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Акции section */}
      <section className="w-full bg-[#FDF6E8] pb-[100px] font-manrope overflow-hidden">
        <PromotionsSlider />
      </section>

      {/* Доставка section */}
      <section className="w-full bg-[#FDF6E8] pb-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col">
          <h2 className="text-[36px] font-semibold text-black m-0 leading-tight mb-[64px]">Доставка</h2>
          <DeliverySection />
        </div>
      </section>

      {/* Отзывы section */}
      <section className="w-full bg-[#FDF6E8] pb-[100px] font-manrope overflow-hidden">
        <ReviewsSlider />
      </section>

      {/* Контакты section text */}
      <section id="contacts" className="w-full bg-[#FDF6E8] pb-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col">
          <div className="flex justify-between items-center mb-[40px]">
            <h2 className="text-[36px] font-semibold text-black m-0 leading-tight">Контакты</h2>
          </div>
          <ContactsSection />
        </div>
      </section>

      {/* FAQ section */}
      <section className="w-full bg-[#FDF6E8] pb-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col">
          <FaqSection />
        </div>
      </section>

      {/* Footer section */}
      <section className="w-full bg-[#FDF6E8] pb-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col">
          <Footer />
        </div>
      </section>
    </div>
  );
}
