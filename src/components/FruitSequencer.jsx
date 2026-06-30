"use client";
import { useRef } from 'react';
import { useFruit } from '@/context/FruitContext';
import FruitCanvasSequencer from './FruitCanvasSequencer';

export default function FruitSequencer() {
  const { activeFruit, setActiveFruit, fruitInfo } = useFruit();
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-gradient-to-b from-brand-50 via-[#fafafa] to-white theme-transition">
        
        {/* Smooth vector glows mapping to selected theme */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full blur-3xl pulse-element -z-10 pointer-events-none" style={{ background: 'var(--fruit-glow)' }}></div>
        <div className="absolute left-[-5%] bottom-[-5%] w-[400px] h-[400px] rounded-full blur-3xl pulse-element -z-10 pointer-events-none" style={{ background: 'var(--fruit-glow)', animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 relative w-full pointer-events-none">
            
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 relative z-20 pointer-events-auto pr-8">
            
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 mb-8 theme-transition shadow-sm">
                    <span className="material-icons text-sm">local_shipping</span>
                    <span className="text-[12px] font-bold tracking-widest uppercase">Farm to Doorstep in 24 Hours</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-neutral-950 leading-none relative mb-6">
                    Bite into <br/><span className="text-brand-500 theme-transition inline-block hover:scale-110 transition-transform duration-300">Summer</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-neutral-600 font-medium mb-10 leading-relaxed max-w-xl">
                    {fruitInfo.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a href="#shop" className="bg-brand-500 hover:bg-brand-600 text-white text-lg font-bold px-10 py-5 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_var(--fruit-glow)] theme-transition focus:outline-none shadow-[0_4px_20px_var(--fruit-glow)]">
                        Get Your Box
                    </a>
                </div>
            </div>

            {/* Selection Dock */}
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both z-30">
                <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl p-2 flex flex-wrap gap-2 w-fit">
                    <button onClick={() => setActiveFruit('apple')} className={`px-6 py-3 min-h-[44px] text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${activeFruit === 'apple' ? 'bg-brand-500 text-white shadow-lg scale-105' : 'hover:bg-neutral-100 text-neutral-600'}`}>🍎 <span>Apple</span></button>
                    <button onClick={() => setActiveFruit('mango')} className={`px-6 py-3 min-h-[44px] text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${activeFruit === 'mango' ? 'bg-brand-500 text-white shadow-lg scale-105' : 'hover:bg-neutral-100 text-neutral-600'}`}>🥭 <span>Mango</span></button>
                    <button onClick={() => setActiveFruit('pineapple')} className={`px-6 py-3 min-h-[44px] text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${activeFruit === 'pineapple' ? 'bg-brand-500 text-white shadow-lg scale-105' : 'hover:bg-neutral-100 text-neutral-600'}`}>🍍 <span>Pineapple</span></button>
                    <button onClick={() => setActiveFruit('orange')} className={`px-6 py-3 min-h-[44px] text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${activeFruit === 'orange' ? 'bg-brand-500 text-white shadow-lg scale-105' : 'hover:bg-neutral-100 text-neutral-600'}`}>🍊 <span>Orange</span></button>
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
