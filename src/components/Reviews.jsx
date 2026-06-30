"use client";
import { useFruit } from '@/context/FruitContext';

export default function Reviews() {
  const { fruitInfo } = useFruit();
  
  const reviews = [
    { text: "Literally the juiciest mango I've ever had. My kitchen is a mess and I don't care.", name: "@fruitlover99" },
    { text: "Next day delivery of fresh pineapples? What timeline is this?! 😍", name: "@tropicalvibes" },
    { text: "These apples crunch so loud my neighbors complained.", name: "@crunchmaster" },
    { text: "I've stopped buying from the store entirely. This is elite.", name: "@freshfinds" },
    { text: "The oranges make the best morning juice. Highly recommend!", name: "@morningroutine" }
  ];

  return (
    <section id="reviews" className="py-32 bg-neutral-900 text-white relative overflow-hidden">
      
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6">Don't Just Take <span style={{ color: fruitInfo.accent }} className="theme-transition">Our Word</span></h2>
      </div>
      
      <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x hide-scrollbar">
        {reviews.map((review, idx) => (
          <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-neutral-800 rounded-3xl p-8 shadow-xl snap-center hover:-translate-y-2 transition-transform duration-300 border border-neutral-700 hover:border-[var(--brand-500)] theme-transition group">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(star => (
                <span key={star} className="text-2xl" style={{ color: fruitInfo.accent }}>★</span>
              ))}
            </div>
            <p className="text-xl font-medium leading-relaxed mb-6">"{review.text}"</p>
            <p className="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors">{review.name}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
