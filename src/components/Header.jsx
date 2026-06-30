"use client";
import { useFruit } from '@/context/FruitContext';

export default function Header() {
  const { activeFruit } = useFruit();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50 transition-all duration-300 bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_var(--fruit-glow)] rounded-full">
      <div className="mx-auto px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#hero" className="text-xl font-black tracking-tight text-brand-500 theme-transition">GLOBAL<span className="text-neutral-900">FRUITS</span></a>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-neutral-800">
          <a href="#pipeline" className="hover:text-brand-500 transition-colors duration-300 theme-transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">Logistics</a>
          <a href="#hubs" className="hover:text-brand-500 transition-colors duration-300 theme-transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">Sourcing</a>
          <a href="#contact" className="hover:text-brand-500 transition-colors duration-300 theme-transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </nav>
      </div>
    </header>
  );
}
