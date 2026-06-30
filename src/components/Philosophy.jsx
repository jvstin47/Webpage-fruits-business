"use client";
import { Quote } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';

export default function Philosophy() {
  const { fruitInfo } = useFruit();

  return (
    <section className="py-32 relative overflow-hidden">
      
      {/* Immersive Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none float-element theme-transition"
           style={{ backgroundColor: fruitInfo.accent }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none float-element theme-transition"
           style={{ backgroundColor: fruitInfo.accent, animationDelay: '-10s' }}></div>
           
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <Quote className="w-12 h-12 mx-auto mb-8 opacity-20 theme-transition" style={{ color: fruitInfo.accent }} />
        
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-8 leading-tight">
          "Good thoughts bear good fruits."
        </h2>
        
        <div className="w-24 h-1 mx-auto mb-12 rounded-full theme-transition" style={{ backgroundColor: fruitInfo.accent }}></div>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 text-left transition-all duration-300 hover:shadow-2xl"
             style={{ boxShadow: `0 20px 40px -10px var(--fruit-glow)` }}>
           <p className="text-gray-600 text-lg leading-relaxed mb-8">
             Established in 1988 by the founders, Global Fruits began as a regional wholesale fruit market. Rooted in an unwavering commitment to quality and ethical sourcing, the vision was simple yet profound: to deliver nature's best harvest to every home.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100/50">
              <div>
                 <p className="text-3xl font-bold font-sans text-gray-900 mb-1 theme-transition" style={{ color: fruitInfo.accent }}>{fruitInfo.metrics.harvest}</p>
                 <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Harvest Season</p>
              </div>
              <div>
                 <p className="text-3xl font-bold font-sans text-gray-900 mb-1 theme-transition" style={{ color: fruitInfo.accent }}>{fruitInfo.metrics.priority}</p>
                 <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Transit Protocol</p>
              </div>
              <div>
                 <p className="text-3xl font-bold font-sans text-gray-900 mb-1 theme-transition" style={{ color: fruitInfo.accent }}>{fruitInfo.metrics.brix}</p>
                 <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Target Brix Level</p>
              </div>
           </div>
           
           <p className="text-sm text-gray-400 mt-8 font-medium">
              Today, Global Fruits stands as a global cold-chain empire, a living tribute to the founders' enduring legacy.
           </p>
        </div>
        
      </div>
    </section>
  );
}
