"use client";
import { useState } from 'react';
import { useFruit } from '@/context/FruitContext';
import { CheckCircle } from 'lucide-react';

export default function RFPForm() {
  const { fruitInfo } = useFruit();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
           <h2 className="text-4xl font-sans font-bold text-gray-900 mb-4">Procurement Intake</h2>
           <p className="text-gray-500">Initiate your B2B order request and our logistics team will respond within 2 hours.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
           {isSubmitted ? (
              <div className="py-16 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                 <CheckCircle className="w-16 h-16 mb-6" style={{ color: fruitInfo.accent }} />
                 <h3 className="text-2xl font-bold mb-2">Request Routed Successfully</h3>
                 <p className="text-gray-500">Your RFP for {fruitInfo.name} has been received.</p>
              </div>
           ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Company Name</label>
                       <input required type="text" className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-gray-50 border border-gray-200 focus-accent focus:outline-none focus-visible:ring-2 transition-shadow" style={{ '--fruit-accent': fruitInfo.accent, '--tw-ring-color': fruitInfo.accent }} />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Work Email</label>
                       <input required type="email" className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-gray-50 border border-gray-200 focus-accent focus:outline-none focus-visible:ring-2 transition-shadow" style={{ '--fruit-accent': fruitInfo.accent, '--tw-ring-color': fruitInfo.accent }} />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Target Fruit</label>
                    <select className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-gray-50 border border-gray-200 focus-accent focus:outline-none focus-visible:ring-2 transition-shadow" style={{ '--fruit-accent': fruitInfo.accent, '--tw-ring-color': fruitInfo.accent }}>
                       <option>{fruitInfo.name}</option>
                       <option>Other Premium Selection</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Volume Requirements (Monthly)</label>
                    <select className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-gray-50 border border-gray-200 focus-accent focus:outline-none focus-visible:ring-2 transition-shadow" style={{ '--fruit-accent': fruitInfo.accent, '--tw-ring-color': fruitInfo.accent }}>
                       <option>1-5 Containers</option>
                       <option>6-15 Containers</option>
                       <option>15+ Containers</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Additional Specs</label>
                    <textarea rows="4" className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-gray-50 border border-gray-200 focus-accent focus:outline-none focus-visible:ring-2 resize-none transition-shadow" style={{ '--fruit-accent': fruitInfo.accent, '--tw-ring-color': fruitInfo.accent }}></textarea>
                 </div>

                 <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 min-h-[44px] rounded-xl text-white font-bold text-lg transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ backgroundColor: fruitInfo.accent, '--tw-ring-color': fruitInfo.accent }}
                 >
                    {isSubmitting ? (
                       <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                       'Submit RFP'
                    )}
                 </button>
              </form>
           )}
        </div>
      </div>
    </section>
  );
}
