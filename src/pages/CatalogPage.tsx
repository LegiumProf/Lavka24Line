import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import assortmentData from '../data/assortment.json';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductModal from '../components/ProductModal';

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Все');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Extract unique categories from data
  const categories = useMemo(() => {
    const cats = new Set(assortmentData.map(item => item.category));
    return ['Все', ...Array.from(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Все') {
      return assortmentData;
    }
    return assortmentData.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full min-h-screen font-manrope bg-[#FDF6E8] flex flex-col pt-24 relative">
      <ProductModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
      
      {/* Absolute dark header wrapper to make header readable on light bg */}
      <div className="absolute top-0 left-0 w-full bg-[#1F4B8B] h-[96px] z-40"></div>
      <Header />

      {/* Back link */}
      <header className="w-full max-w-[1240px] mx-auto px-4 py-6 flex items-center mt-4">
        <Link to="/" className="flex items-center gap-2 text-[#2A2A2A] hover:text-black transition-colors font-medium">
          <ArrowLeft size={20} />
          На главную
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 pb-[100px]">
        <h1 className="text-[44px] md:text-[56px] font-bold text-black m-0 mb-[40px] leading-tight">Каталог</h1>
        
        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-3 mb-[40px]">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-[16px] font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1F4B8B] text-white'
                  : 'bg-white text-[#2A2A2A] hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          {filteredItems.map((item) => (
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
      </main>

      {/* Footer */}
      <section className="w-full bg-[#FDF6E8] pb-[100px] font-manrope">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col">
          <Footer />
        </div>
      </section>

    </div>
  );
}
