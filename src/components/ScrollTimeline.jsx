"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tractor, ThermometerSnowflake, Truck, Store } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

const stages = [
  { id: 1, title: 'Agritha Farms', subtitle: 'Sourcing & Harvesting', icon: Tractor },
  { id: 2, title: 'Cold Storage', subtitle: 'Processing & QC', icon: ThermometerSnowflake },
  { id: 3, title: 'Fleet Transit', subtitle: 'Logistics', icon: Truck },
  { id: 4, title: 'Partners', subtitle: 'Retail Placement', icon: Store }
];

export default function ScrollTimeline() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const { fruitInfo } = useFruit();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const sections = gsap.utils.toArray('.timeline-node');
        const lines = gsap.utils.toArray('.timeline-line');
        
        gsap.set(lines, { scaleX: 0 });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 0.5,
            end: () => "+=" + trackRef.current.offsetWidth
          }
        });
        
        tl.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none"
        }, 0);

        lines.forEach((line, i) => {
          const start = i * (1 / (sections.length - 1));
          const duration = 1 / (sections.length - 1);
          tl.to(line, {
            scaleX: 1,
            ease: "none",
            duration: duration
          }, start);
        });
      });
      
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, [fruitInfo.accent]);

  return (
    <section id="pipeline" ref={containerRef} className="h-screen w-full bg-gray-50 flex flex-col justify-center overflow-hidden py-24 relative scroll-mt-10">
      <div className="absolute top-12 md:top-20 left-6 md:left-24 z-20">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Orchard-to-Table Timeline</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">Transparent B2B procurement process.</p>
      </div>

      <div 
        ref={trackRef} 
        className="flex w-full md:w-[400vw] h-full items-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar md:pl-24"
      >
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div key={stage.id} className="timeline-node w-[100vw] sm:w-[80vw] md:w-[100vw] flex-shrink-0 relative snap-center snap-always flex justify-center md:block">
               {/* Hidden on mobile, visible on desktop */}
               <div className="hidden md:block absolute top-1/2 left-12 w-full h-1 -translate-y-1/2 bg-gray-200 z-0"></div>
               {i !== stages.length - 1 && (
                  <div className="hidden md:block timeline-line absolute top-1/2 left-12 w-full h-1 -translate-y-1/2 z-0 origin-left" 
                       style={{ backgroundColor: fruitInfo.accent }}></div>
               )}
               
               <div className="relative z-10 group inline-block text-center md:text-left mt-16 md:mt-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 rounded-full bg-white border-4 flex items-center justify-center shadow-xl transition-all duration-300 md:group-hover:scale-110"
                       style={{ borderColor: fruitInfo.accent }}>
                     <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700" />
                  </div>
                  
                  <div className="mt-8 w-64 md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:pointer-events-none mx-auto md:mx-0">
                     <div className="glass px-6 py-4 rounded-xl text-center">
                        <h3 className="font-bold text-lg text-gray-900">{stage.title}</h3>
                        <p className="text-sm text-gray-600">{stage.subtitle}</p>
                     </div>
                  </div>
               </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
