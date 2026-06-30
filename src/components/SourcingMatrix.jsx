"use client";
import { useState } from 'react';
import { Search, Info, X } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';

const catalog = [
  { id: 1, name: 'Premium Apples', category: 'Staples', origin: 'USA', packaging: 'Carton', temp: '0°C' },
  { id: 2, name: 'Alphonso Mangoes', category: 'Exotics', origin: 'India', packaging: 'Tray', temp: '10°C' },
  { id: 3, name: 'Golden Pineapples', category: 'Imports', origin: 'Costa Rica', packaging: 'Crown', temp: '7°C' },
  { id: 4, name: 'Valencia Oranges', category: 'Staples', origin: 'Spain', packaging: 'Net', temp: '4°C' },
  { id: 5, name: 'Hass Avocados', category: 'Imports', origin: 'Mexico', packaging: 'Tray', temp: '5°C' },
  { id: 6, name: 'Dragon Fruit', category: 'Exotics', origin: 'Vietnam', packaging: 'Box', temp: '8°C' },
];

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
    <section id="sourcing" className="bg-white relative">
      <div className="py-24 max-w-7xl mx-auto px-6">
        
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
            <button 
              key={item.id} 
              className="text-left w-full border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer bg-gray-50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" 
              style={{ '--tw-ring-color': fruitInfo.accent }}
              onClick={() => setSelectedItem(item)}
            >
               <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.category}</span>
                  <Info className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transition-colors" />
               </div>
               <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
               <div className="flex gap-4 text-sm text-gray-500">
                  <p>Origin: <span className="font-semibold text-gray-700">{item.origin}</span></p>
               </div>
            </button>
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
