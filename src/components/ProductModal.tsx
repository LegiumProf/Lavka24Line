import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice: number | null;
    isDiscount: boolean;
    weight: string;
    image: string;
    category: string;
    description?: string;
  } | null;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl flex flex-col md:flex-row transform transition-all font-manrope">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-gray-200 rounded-full text-black transition-colors z-20 cursor-pointer shadow-sm md:bg-gray-100"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-auto aspect-square md:aspect-auto md:h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-5 md:p-6 flex flex-col overflow-y-auto">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[14px] text-gray-600 font-medium mb-3">
              {product.category}
            </span>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-black m-0 mb-2 leading-tight pr-8 md:pr-0">
              {product.name}
            </h2>
            <p className="text-[16px] text-gray-500 mb-6">
              Вес: {product.weight}
            </p>
            
            <div className="mb-6">
              <h3 className="text-[18px] font-medium text-black mb-2 m-0">Описание</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed m-0">
                {product.description || 'Описание будет добавлено позже.'}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              {product.isDiscount ? (
                <>
                  <span className="text-[#D93627] text-[28px] font-semibold leading-none">{product.price}₽</span>
                  <span className="text-gray-500 text-[18px] line-through leading-none">{product.oldPrice}₽</span>
                </>
              ) : (
                <span className="text-black text-[28px] font-semibold leading-none">{product.price}₽</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
