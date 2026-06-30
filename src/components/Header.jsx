"use client";
import { useFruit } from '@/context/FruitContext';

export default function Header() {
  const { activeFruit } = useFruit();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50 transition-all duration-300 bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_var(--fruit-glow)] rounded-full">
      <div className="mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tight text-brand-500 theme-transition">JUICY<span className="text-neutral-900">BOX</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-neutral-800">
          <a href="#shop" className="hover:text-brand-500 transition-colors duration-300 theme-transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-brand-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">Shop Fruit</a>
          <a href="#how-it-works" className="hover:text-brand-500 transition-colors duration-300 theme-transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-brand-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">How it Works</a>
          <a href="#reviews" className="hover:text-brand-500 transition-colors duration-300 theme-transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-brand-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">Reviews</a>
        </nav>
        
        <button className="bg-brand-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_4px_15px_var(--fruit-glow)] hover:-translate-y-1 hover:shadow-[0_8px_25px_var(--fruit-glow)] transition-all theme-transition active:scale-95">
          Order Now
        </button>
      </div>
    </header>
  );
}
