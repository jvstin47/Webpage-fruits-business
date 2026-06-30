"use client";
import { Quote } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';

export default function Philosophy() {
  const { fruitInfo } = useFruit();

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none rounded-bl-full"
           style={{ backgroundColor: fruitInfo.accent }}></div>
           
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <Quote className="w-12 h-12 mx-auto mb-8 opacity-20" style={{ color: fruitInfo.accent }} />
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
          "Good thoughts bear good fruits."
        </h2>
        
        <div className="w-24 h-1 mx-auto mb-12 rounded-full" style={{ backgroundColor: fruitInfo.accent }}></div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-left">
           <p className="text-gray-600 text-lg leading-relaxed mb-8">
             Established in 1988 by the late Mr. P.J. Johnson, PJJ Fruits began as a regional wholesale fruit market in Pala, Kerala. Rooted in an unwavering commitment to quality and ethical sourcing, the vision was simple yet profound: to deliver nature's best harvest to every home.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                 <p className="text-3xl font-bold font-serif text-gray-900 mb-1">500+</p>
                 <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Employees</p>
              </div>
              <div>
                 <p className="text-3xl font-bold font-serif text-gray-900 mb-1">100+</p>
                 <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Logistics Vehicles</p>
              </div>
              <div>
                 <p className="text-3xl font-bold font-serif text-gray-900 mb-1">5,000+ MT</p>
                 <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Cold Storage Capacity</p>
              </div>
           </div>
           
           <p className="text-sm text-gray-400 mt-8 font-medium">
              Today, PJJ Fruits stands as a global cold-chain empire, a living tribute to Mr. Johnson's enduring legacy.
           </p>
        </div>
        
      </div>
    </section>
  );
}
