"use client";
import { useFruit } from '@/context/FruitContext';
import { ShoppingCart } from 'lucide-react';

export default function FruitStand() {
  const { fruitInfo, activeFruit } = useFruit();
  
  const products = [
    { id: 'apple', title: 'Fuji Apple Box', qty: '12-Pack', price: '$24', tag: 'Bestseller' },
    { id: 'mango', title: 'Alphonso Mango Box', qty: '6-Pack', price: '$35', tag: 'Limited' },
    { id: 'pineapple', title: 'Golden Pineapple', qty: '2-Pack', price: '$18', tag: 'Fresh' },
    { id: 'orange', title: 'Valencia Orange Box', qty: '24-Pack', price: '$28', tag: 'Juice Ready' }
  ];

  return (
    <section id="shop" className="py-32 relative overflow-hidden bg-white/50">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-multiply pointer-events-none"></div>
      
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 pointer-events-none float-element theme-transition -translate-y-1/2"
           style={{ backgroundColor: fruitInfo.accent }}></div>
           
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6">The <span style={{ color: fruitInfo.accent }} className="theme-transition">Fruit Stand</span></h2>
          <p className="text-xl text-neutral-600 font-medium max-w-2xl mx-auto">Skip the grocery store. Get farm-fresh, wildly juicy fruit delivered straight to your door.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className={`group relative bg-white rounded-3xl p-6 shadow-xl border-4 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl ${activeFruit === p.id ? 'border-[var(--brand-500)]' : 'border-transparent hover:border-[var(--brand-100)]'}`}>
              
              <div className="absolute -top-4 -right-4 bg-brand-500 text-white text-xs font-bold px-4 py-2 rounded-full rotate-12 shadow-lg theme-transition">
                {p.tag}
              </div>
              
              <div className="aspect-square bg-neutral-50 rounded-2xl mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                 <div className="text-8xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 drop-shadow-2xl">
                   {p.id === 'apple' && '🍎'}
                   {p.id === 'mango' && '🥭'}
                   {p.id === 'pineapple' && '🍍'}
                   {p.id === 'orange' && '🍊'}
                 </div>
              </div>
              
              <h3 className="text-2xl font-black text-neutral-900 mb-1">{p.title}</h3>
              <p className="text-sm text-neutral-500 font-bold mb-6">{p.qty}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-brand-500 theme-transition">{p.price}</span>
                <button className="bg-neutral-900 hover:bg-brand-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg active:scale-95 theme-transition focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/50">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
