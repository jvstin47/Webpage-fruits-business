"use client";
import { useRef } from 'react';
import { useFruit } from '@/context/FruitContext';
import FruitCanvasSequencer from './FruitCanvasSequencer';

export default function FruitSequencer() {
  const { activeFruit, setActiveFruit, fruitInfo } = useFruit();
  const sectionRef = useRef(null);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-gradient-to-b from-brand-50 via-[#fafafa] to-white theme-transition">
        
        {/* Smooth vector glows mapping to selected theme */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full blur-3xl pulse-element -z-10 pointer-events-none" style={{ background: 'var(--fruit-glow)' }}></div>
        <div className="absolute left-[-5%] bottom-[-5%] w-[400px] h-[400px] rounded-full blur-3xl pulse-element -z-10 pointer-events-none" style={{ background: 'var(--fruit-glow)', animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 relative w-full pointer-events-none">
            
            {/* Hero Sourcing Text Console */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 relative z-10 pointer-events-auto pr-8">
                <div className="inline-flex items-center gap-2 bg-white border border-neutral-200/80 rounded-full px-4 py-1.5 w-fit shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping theme-transition"></span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-700">Digital Cold Chain Interface</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-950 leading-none relative">
                    Delivering freshness,<br />
                    <span className="font-sans italic font-normal text-brand-500 theme-transition">engineered</span> with integrity.
                </h1>
                
                <p className="text-base text-neutral-600 max-w-xl leading-relaxed">
                    {fruitInfo.description}
                </p>

                {/* Core Mantra Quote */}
                <div className="border-l-4 border-brand-500 pl-4 py-1 italic text-sm text-neutral-500 theme-transition">
                    {fruitInfo.heroQuote}
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

            <div className="lg:col-span-5 relative flex justify-center items-center h-[500px] w-full p-4 pointer-events-auto">
                <FruitCanvasSequencer triggerRef={sectionRef} />
            </div>
        </div>
    </section>
  );
}
