"use client";
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';

const catalog = [
  { id: 1, name: 'Premium Apples', category: 'Staples', folder: 'apple', origin: 'USA', packaging: 'Carton', temp: '0°C to 4°C' },
  { id: 2, name: 'Alphonso Mangoes', category: 'Exotics', folder: 'mango', origin: 'India', packaging: 'Tray', temp: '10°C to 12°C' },
  { id: 3, name: 'Golden Pineapples', category: 'Imports', folder: 'pineapple', origin: 'Costa Rica', packaging: 'Crown', temp: '7°C to 10°C' },
  { id: 4, name: 'Valencia Oranges', category: 'Staples', folder: 'orange', origin: 'Spain', packaging: 'Net', temp: '3°C to 8°C' },
];

function CatalogCard({ item, onClick, accent }) {
  const [frame, setFrame] = useState(30); // Start at middle frame (facing front)
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      // Loop frames forward slowly on hover to rotate the fruit
      intervalRef.current = setInterval(() => {
        setFrame(prev => (prev + 1) % 60);
      }, 55); // 18 frames per second
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      // Smoothly slide back to frame 30
      intervalRef.current = setInterval(() => {
        setFrame(prev => {
          if (prev === 30) {
            clearInterval(intervalRef.current);
            return 30;
          }
          return prev > 30 ? prev - 1 : prev + 1;
        });
      }, 15);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <button 
      className="text-left w-full border border-gray-100 rounded-3xl p-5 hover:shadow-xl transition-all cursor-pointer bg-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 flex flex-col h-full" 
      style={{ '--tw-ring-color': accent }}
      onClick={() => onClick(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       {/* Brightened Viewport */}
       <div className="w-full h-44 bg-neutral-50/50 rounded-2xl mb-4 overflow-hidden relative border border-gray-100/80 flex items-center justify-center transition-colors group-hover:border-neutral-200 shadow-[inset_0_2px_8px_rgba(0,0,0,0.015)]">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/40"></div>
          {/* Accent radial glow to brighten up the background */}
          <div className="absolute w-28 h-28 rounded-full blur-2xl opacity-10 transition-opacity duration-300 group-hover:opacity-20" style={{ backgroundColor: accent }}></div>
          
          <img 
            src={`/images/sequence/${item.folder}/frame_${String(frame).padStart(3, '0')}.webp`}
            alt={item.name}
            className="w-32 h-32 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105 filter brightness-[1.08] contrast-[1.03] drop-shadow-md select-none"
          />
       </div>

       <div className="flex justify-between items-start mb-2 mt-1 w-full">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{item.category}</span>
          <span className="text-xs font-semibold text-gray-400 border border-gray-100 rounded px-1.5 py-0.5 group-hover:text-neutral-700 transition-colors">{item.temp}</span>
       </div>
       <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">{item.name}</h3>
       
       <div className="mt-auto flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3 w-full">
          <p>Origin: <span className="font-semibold text-gray-700">{item.origin}</span></p>
          <span className="font-semibold transition-colors group-hover:text-black" style={{ color: isHovered ? accent : undefined }}>Details →</span>
       </div>
    </button>
  );
}

export default function SourcingMatrix() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const { fruitInfo } = useFruit();

  const categories = ['All', 'Staples', 'Imports', 'Exotics'];

  const filteredCatalog = catalog.filter(item => {
    const matchesCategory = filter === 'All' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="sourcing" className="bg-white relative overflow-hidden bg-noise">
      
      {/* Immersive Background Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.05] pointer-events-none pulse-element theme-transition"
           style={{ backgroundColor: fruitInfo.accent }}></div>
           
      <div className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Global Sourcing Matrix</h2>
              <p className="text-gray-500">Real-time catalog of our premium harvest.</p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                 <input 
                   type="text"
                   placeholder="Search inventory..."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   className="pl-12 pr-4 py-3 min-h-[44px] border border-gray-200 rounded-full text-sm w-full focus-accent focus:outline-none focus:ring-2 transition-shadow"
                   style={{ '--fruit-accent': fruitInfo.accent }}
                 />
              </div>
              <div className="flex bg-gray-100 rounded-full p-1 overflow-x-auto hide-scrollbar">
                 {categories.map(cat => (
                   <button
                     key={cat}
                     onClick={() => setFilter(cat)}
                     className={`px-4 py-2 min-h-[44px] min-w-[80px] text-xs font-semibold rounded-full transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-2 ${filter === cat ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black focus-visible:ring-gray-300'}`}
                   >
                     {cat}
                   </button>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredCatalog.map(item => (
            <CatalogCard 
              key={item.id}
              item={item}
              onClick={setSelectedItem}
              accent={fruitInfo.accent}
            />
          ))}
        </div>
      </div>

      {/* Specifications Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
           <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2"
              >
                 <X className="w-6 h-6" />
              </button>
              
              {/* Modal Viewport */}
              <div className="w-full h-48 bg-neutral-50/50 rounded-2xl mb-6 overflow-hidden relative border border-gray-100 flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.015)]">
                 <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/40"></div>
                 <div className="absolute w-32 h-32 rounded-full blur-2xl opacity-15" style={{ backgroundColor: fruitInfo.accent }}></div>
                 <img 
                   src={`/images/sequence/${selectedItem.folder}/frame_030.webp`}
                   alt={selectedItem.name}
                   className="w-36 h-36 object-contain relative z-10 filter brightness-[1.08] contrast-[1.03] drop-shadow-md select-none"
                 />
              </div>
              
              <h3 className="font-serif text-3xl font-bold mb-2 pr-8">{selectedItem.name}</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-8">{selectedItem.category}</p>
              
              <div className="space-y-4">
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Target Shipping Temp</span>
                    <span className="font-semibold" style={{ color: fruitInfo.accent }}>{selectedItem.temp}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Origin</span>
                    <span className="font-semibold">{selectedItem.origin}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Packaging Index</span>
                    <span className="font-semibold">{selectedItem.packaging}</span>
                 </div>
              </div>

              <button 
                className="w-full mt-8 py-4 min-h-[44px] rounded-full text-white font-semibold transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: fruitInfo.accent, '--tw-ring-color': fruitInfo.accent }}
              >
                Request Quote
              </button>
           </div>
        </div>
      )}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
