"use client";
import { useFruit } from '@/context/FruitContext';
import FruitCanvasSequencer from './FruitCanvasSequencer';

export default function FruitSequencer() {
  const { activeFruit, setActiveFruit } = useFruit();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-gradient-to-b from-brand-50 via-[#fafafa] to-white theme-transition">
        
        {/* The new Canvas Scroll Sequencer injected in background layer (z-0) */}
        <FruitCanvasSequencer />

        {/* Smooth vector glows mapping to selected theme */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full blur-3xl pulse-element -z-10 pointer-events-none" style={{ background: 'var(--fruit-glow)' }}></div>
        <div className="absolute left-[-5%] bottom-[-5%] w-[400px] h-[400px] rounded-full blur-3xl pulse-element -z-10 pointer-events-none" style={{ background: 'var(--fruit-glow)', animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 relative w-full pointer-events-none">
            
            {/* Hero Sourcing Text Console - Added pointer-events-auto to restore interaction */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 relative z-10 pointer-events-auto">
                <div className="inline-flex items-center gap-2 bg-white border border-neutral-200/80 rounded-full px-4 py-1.5 w-fit shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping theme-transition"></span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-700">Digital Cold Chain Interface</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-950 leading-none relative">
                    Delivering freshness,<br />
                    <span className="font-serif italic font-normal text-brand-500 theme-transition">engineered</span> with integrity.
                </h1>
                
                <p className="text-base text-neutral-600 max-w-xl leading-relaxed">
                    By implementing dynamic, sensor-integrated thermal tracking loops, PJJ Fruits has connected over 5,000 metric tons of cold storage directly to India's tier-1 supermarkets.
                </p>

                {/* Core Mantra Quote */}
                <div className="border-l-4 border-brand-500 pl-4 py-1 italic text-sm text-neutral-500 theme-transition">
                    "Good thoughts bear good fruits." — Corporate Philosophy
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a href="#pipeline" className="bg-brand-500 hover:bg-brand-600 text-white text-[11px] uppercase tracking-wider font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg theme-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
                        Track Sourcing Pipeline
                    </a>
                    
                    {/* B2B Fruit Selector Console */}
                    <div className="flex gap-2 bg-white border border-neutral-200 p-1.5 rounded-xl shadow-sm">
                        <button onClick={() => setActiveFruit('apple')} className={`px-4 py-2 min-h-[44px] text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${activeFruit === 'apple' ? 'bg-brand-50 text-brand-900' : 'hover:bg-neutral-50'}`}>🍎 Apple</button>
                        <button onClick={() => setActiveFruit('mango')} className={`px-4 py-2 min-h-[44px] text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${activeFruit === 'mango' ? 'bg-brand-50 text-brand-900' : 'hover:bg-neutral-50'}`}>🥭 Mango</button>
                        <button onClick={() => setActiveFruit('pineapple')} className={`px-4 py-2 min-h-[44px] text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${activeFruit === 'pineapple' ? 'bg-brand-50 text-brand-900' : 'hover:bg-neutral-50'}`}>🍍 Pineapple</button>
                        <button onClick={() => setActiveFruit('orange')} className={`px-4 py-2 min-h-[44px] text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${activeFruit === 'orange' ? 'bg-brand-50 text-brand-900' : 'hover:bg-neutral-50'}`}>🍊 Orange</button>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]">
                {/* High-contrast ambient blur backing circle remains for typography contrast */}
                <div className="absolute w-[400px] h-[400px] bg-white/70 backdrop-blur-md rounded-full shadow-inner border border-neutral-100 z-0 flex items-center justify-center">
                    <div className="text-center font-serif text-[180px] select-none text-neutral-200/40 italic leading-none">{activeFruit.charAt(0).toUpperCase()}</div>
                </div>
                {/* The previous inline SVGs have been removed; the Canvas Sequence sits entirely in the background */}
            </div>
        </div>
    </section>
  );
}
