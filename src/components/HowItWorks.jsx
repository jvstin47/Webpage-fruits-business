"use client";
import { useFruit } from '@/context/FruitContext';

export default function HowItWorks() {
  const { fruitInfo } = useFruit();
  
  const steps = [
    { emoji: '🌳', title: 'Hand-Picked', desc: 'Sourced from the best farms at the absolute peak of ripeness.' },
    { emoji: '📦', title: 'Packed Fresh', desc: 'Securely boxed in eco-friendly, temperature-controlled packaging.' },
    { emoji: '🚀', title: 'Delivered Fast', desc: 'Farm to your doorstep in 24 hours. Because nobody likes old fruit.' }
  ];

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-20">How It <span style={{ color: fruitInfo.accent }} className="theme-transition">Works</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-2 border-t-4 border-dashed border-neutral-200 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-2xl border-4 border-brand-100 flex items-center justify-center text-5xl mb-8 group hover:-translate-y-2 transition-transform duration-300 theme-transition" style={{ borderColor: fruitInfo.accent }}>
                <span className="group-hover:scale-125 transition-transform duration-300 drop-shadow-md">{step.emoji}</span>
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-lg font-medium text-neutral-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
