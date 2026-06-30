"use client";
import { useFruit } from '@/context/FruitContext';

export default function Header() {
  const { activeFruit, setActiveFruit } = useFruit();

  return (
    <header className="fixed top-8 left-0 w-full z-40 transition-all duration-300 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tight text-brand-500 theme-transition">PJJ<span className="text-neutral-900">FRUITS</span></span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest font-semibold bg-brand-100 text-brand-600 px-2 py-0.5 rounded theme-transition">Est. 1988</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-neutral-600">
          <a href="#pipeline" className="hover:text-brand-500 transition-colors theme-transition">Logistics Infrastructure</a>
          <a href="#hubs" className="hover:text-brand-500 transition-colors theme-transition">Sourcing Hubs</a>
          <a href="#sourcing" className="hover:text-brand-500 transition-colors theme-transition">Global Matrix</a>
          <a href="#logistics" className="hover:text-brand-500 transition-colors theme-transition">Real-time Portal</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#inquire" className="bg-neutral-950 hover:bg-neutral-900 text-white text-[11px] uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
            Wholesale Inquiry
          </a>
        </div>
      </div>
    </header>
  );
}
