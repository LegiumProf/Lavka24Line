import React, { useEffect, useRef, useState } from 'react';

export default function DeliverySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pathD, setPathD] = useState('');

  const steps = [
    {
      num: '01',
      title: 'Выберите продукты',
      desc: 'Изучите ассортимент на сайте или в наших соцсетях — от свежего мяса до полуфабрикатов собственного производства.'
    },
    {
      num: '02',
      title: 'Оформите заказ',
      desc: 'Напишите нам в Telegram, VK или оформите доставку через сервисы-партнёры.'
    },
    {
      num: '03',
      title: 'Мы собираем заказ',
      desc: 'Подготавливаем и аккуратно упаковываем продукты непосредственно перед отправкой.'
    },
    {
      num: '04',
      title: 'Передаём в доставку',
      desc: 'Курьер забирает заказ и отправляется по вашему адресу.'
    },
    {
      num: '05',
      title: 'Получите свежие продукты',
      desc: 'Доставляем мясо охлаждённым и готовым к приготовлению. Остаётся только выбрать рецепт.'
    }
  ];

  const setDotRef = (index: number) => (el: HTMLDivElement | null) => {
    dotRefs.current[index] = el;
  };

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current) return;
      const container = containerRef.current.getBoundingClientRect();
      
      const points = dotRefs.current.map(dot => {
        if (!dot) return { x: 0, y: 0 };
        const rect = dot.getBoundingClientRect();
        return {
          x: rect.left - container.left + rect.width / 2,
          y: rect.top - container.top + rect.height / 2
        };
      });

      if (points.length === 5 && points.every(p => p.x !== 0 || p.y !== 0)) {
        const [p1, p2, p3, p4, p5] = points;
        const isMobile = Math.abs(p1.x - p5.x) < 200;
        
        // --- НАСТРОЙКИ КРИВИЗНЫ ЛИНИИ ---
        // Эти значения определяют, насколько сильно изгибается линия между точками.
        // Каждая пара (cp1x, cp1y) - это "магнит", тянущий линию от начальной точки.
        // Каждая пара (cp2x, cp2y) - это "магнит", тянущий линию перед конечной точкой.
        // Меняйте эти значения (например, 220 на 300, или 120 на -50), чтобы настроить петли!
        
        if (isMobile) {
          const m = [
            { cp1x: 80, cp1y: 80, cp2x: 80, cp2y: -50 },     // 1 -> 2
            { cp1x: -80, cp1y: 50, cp2x: -80, cp2y: 50 },   // 2 -> 3
            { cp1x: 80, cp1y: 50, cp2x: 80, cp2y: -50 },     // 3 -> 4
            { cp1x: -80, cp1y: 50, cp2x: -80, cp2y: -50 },   // 4 -> 5
          ];
          setPathD(`M ${p1.x} ${p1.y} 
            C ${p1.x + m[0].cp1x} ${p1.y + m[0].cp1y}, ${p2.x + m[0].cp2x} ${p2.y + m[0].cp2y}, ${p2.x} ${p2.y}
            C ${p2.x + m[1].cp1x} ${p2.y + m[1].cp1y}, ${p3.x + m[1].cp2x} ${p3.y + m[1].cp2y}, ${p3.x} ${p3.y}
            C ${p3.x + m[2].cp1x} ${p3.y + m[2].cp1y}, ${p4.x + m[2].cp2x} ${p4.y + m[2].cp2y}, ${p4.x} ${p4.y}
            C ${p4.x + m[3].cp1x} ${p4.y + m[3].cp1y}, ${p5.x + m[3].cp2x} ${p5.y + m[3].cp2y}, ${p5.x} ${p5.y}
          `);
        } else {
          const d = [
            { cp1x: 200, cp1y: 360, cp2x: 100, cp2y: -360 }, // Точка 1 -> Точка 2 (сделали петлю шире и плавнее)
            { cp1x: -80, cp1y: 400, cp2x: -160, cp2y: 400 }, // Точка 2 -> Точка 3
            { cp1x: 400, cp1y: -500, cp2x: -700, cp2y: 0 }, // Точка 3 -> Точка 4
            { cp1x: 200, cp1y: 0, cp2x: 120, cp2y: -160 }, // Точка 4 -> Точка 5
          ];
          setPathD(`M ${p1.x} ${p1.y} 
            C ${p1.x + d[0].cp1x} ${p1.y + d[0].cp1y}, ${p2.x + d[0].cp2x} ${p2.y + d[0].cp2y}, ${p2.x} ${p2.y}
            C ${p2.x + d[1].cp1x} ${p2.y + d[1].cp1y}, ${p3.x + d[1].cp2x} ${p3.y + d[1].cp2y}, ${p3.x} ${p3.y}
            C ${p3.x + d[2].cp1x} ${p3.y + d[2].cp1y}, ${p4.x + d[2].cp2x} ${p4.y + d[2].cp2y}, ${p4.x} ${p4.y}
            C ${p4.x + d[3].cp1x} ${p4.y + d[3].cp1y}, ${p5.x + d[3].cp2x} ${p5.y + d[3].cp2y}, ${p5.x} ${p5.y}
          `);
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    setTimeout(updatePath, 50); // initial render sync

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[1000px] mx-auto mt-[24px]">
      {/* Dynamic SVG Line */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
         <svg className="w-full h-full overflow-visible">
            <path 
              d={pathD} 
              stroke="#1F4B8B" 
              strokeWidth="0.8"
              fill="none" 
              className="transition-all duration-300 ease-out"
            />
         </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-4 relative z-10">
        {/* Col 1 */}
        <div className="flex flex-col gap-12 lg:gap-[160px] lg:mt-[-40px]">
          <div className="text-center flex flex-col items-center">
            <div className="bg-[#FDF6E8] relative z-20 flex flex-col items-center px-4 py-2 rounded-lg">
              <div className="text-[32px] md:text-[40px] font-semibold text-[#1F4B8B] leading-none mb-2">{steps[0].num}</div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-2">{steps[0].title}</h3>
              <p className="text-[14px] md:text-[15px] text-[#2A2A2A] leading-[1.4] max-w-[280px] m-0">{steps[0].desc}</p>
            </div>
            <div ref={setDotRef(0)} className="w-2.5 h-2.5 rounded-full bg-[#1F4B8B] mt-[8px] relative z-10 transition-transform hover:scale-150"></div>
          </div>
          <div className="text-center flex flex-col items-center pt-[20px]">
            <div ref={setDotRef(1)} className="w-2.5 h-2.5 rounded-full bg-[#1F4B8B] mb-[8px] relative z-10 transition-transform hover:scale-150"></div>
            <div className="bg-[#FDF6E8] relative z-20 flex flex-col items-center px-4 py-2 rounded-lg">
              <div className="text-[32px] md:text-[40px] font-semibold text-[#1F4B8B] leading-none mb-2">{steps[1].num}</div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-2">{steps[1].title}</h3>
              <p className="text-[14px] md:text-[15px] text-[#2A2A2A] leading-[1.4] max-w-[280px] m-0">{steps[1].desc}</p>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col justify-center items-center">
          <div className="text-center flex flex-col items-center lg:mt-[100px]">
            <div ref={setDotRef(2)} className="w-2.5 h-2.5 rounded-full bg-[#1F4B8B] mb-[8px] relative z-10 transition-transform hover:scale-150"></div>
            <div className="bg-[#FDF6E8] relative z-20 flex flex-col items-center px-4 py-2 rounded-lg">
              <div className="text-[32px] md:text-[40px] font-semibold text-[#1F4B8B] leading-none mb-2">{steps[2].num}</div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-2">{steps[2].title}</h3>
              <p className="text-[14px] md:text-[15px] text-[#2A2A2A] leading-[1.4] max-w-[280px] m-0">{steps[2].desc}</p>
            </div>
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-12 lg:gap-[160px] lg:mt-[-80px]">
          <div className="text-center flex flex-col items-center">
            <div ref={setDotRef(3)} className="w-2.5 h-2.5 rounded-full bg-[#1F4B8B] mb-[8px] relative z-10 transition-transform hover:scale-150"></div>
            <div className="bg-[#FDF6E8] relative z-20 flex flex-col items-center px-4 py-2 rounded-lg">
              <div className="text-[32px] md:text-[40px] font-semibold text-[#1F4B8B] leading-none mb-2">{steps[3].num}</div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-2">{steps[3].title}</h3>
              <p className="text-[14px] md:text-[15px] text-[#2A2A2A] leading-[1.4] max-w-[280px] m-0">{steps[3].desc}</p>
            </div>
          </div>
          <div className="text-center flex flex-col items-center pt-[20px]">
            <div ref={setDotRef(4)} className="w-2.5 h-2.5 rounded-full bg-[#1F4B8B] mb-[8px] relative z-10 transition-transform hover:scale-150"></div>
            <div className="bg-[#FDF6E8] relative z-20 flex flex-col items-center px-4 py-2 rounded-lg">
              <div className="text-[32px] md:text-[40px] font-semibold text-[#1F4B8B] leading-none mb-2">{steps[4].num}</div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-2">{steps[4].title}</h3>
              <p className="text-[14px] md:text-[15px] text-[#2A2A2A] leading-[1.4] max-w-[280px] m-0">{steps[4].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
