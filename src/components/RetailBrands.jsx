"use client";

import { useFruit } from '@/context/FruitContext';

export default function RetailBrands() {
  const { fruitInfo } = useFruit();

  return (
    <section className="py-24 bg-white border-y border-neutral-200/50 relative overflow-hidden bg-noise">
        {/* Immersive Background Orbs */}
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none pulse-element theme-transition"
             style={{ backgroundColor: fruitInfo.accent }}></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.07] pointer-events-none pulse-element theme-transition"
             style={{ backgroundColor: fruitInfo.accent, animationDelay: '2s' }}></div>
             
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500 theme-transition">Vertically Integrated Ecosystem</span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-2">Our Corporate Brand Footprint</h2>
                <p className="text-sm text-neutral-500 mt-4">Maintaining complete cold chain oversight across multiple distinct end-to-end consumer gateways.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Global Fruits */}
                <div className="p-8 rounded-2xl bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 hover:-translate-y-2 transition-all duration-300 group"
                     style={{ '--hover-glow': fruitInfo.accent }}>
                    <span className="material-icons text-brand-500 text-4xl theme-transition group-hover:scale-110 transition-transform duration-300">domain</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2 group-hover:text-[var(--hover-glow)] theme-transition">Global Fruits</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">Global wholesale supply chain and refrigerated transport fleet. Sourcing active imports and regional farm assets daily.</p>
                    <span className="text-xs font-semibold text-brand-500 theme-transition uppercase tracking-wider">Enterprise Distribution</span>
                </div>

                {/* Fruitstaurant */}
                <div className="p-8 rounded-2xl bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 hover:-translate-y-2 transition-all duration-300 group"
                     style={{ '--hover-glow': fruitInfo.accent }}>
                    <span className="material-icons text-brand-500 text-4xl theme-transition group-hover:scale-110 transition-transform duration-300">restaurant</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2 group-hover:text-[var(--hover-glow)] theme-transition">Fruitstaurant</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">Experiential, premium fruit-focused dining environments highlighting exotic and import varieties under raw culinary art forms.</p>
                    <span className="text-xs font-semibold text-brand-500 theme-transition uppercase tracking-wider">Premium Dining Spaces</span>
                </div>

                {/* B2C Platform */}
                <div className="p-8 rounded-2xl bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 hover:-translate-y-2 transition-all duration-300 group"
                     style={{ '--hover-glow': fruitInfo.accent }}>
                    <span className="material-icons text-brand-500 text-4xl theme-transition group-hover:scale-110 transition-transform duration-300">shopping_bag</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2 group-hover:text-[var(--hover-glow)] theme-transition">Direct To Consumer</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">E-commerce front-end providing direct public access to our core staple inventories with same-day refrigerated courier delivery.</p>
                    <span className="text-xs font-semibold text-brand-500 theme-transition uppercase tracking-wider">E-Commerce Node</span>
                </div>
            </div>
        </div>
    </section>
  );
}
