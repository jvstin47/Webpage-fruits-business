"use client";
import { Tractor, ThermometerSnowflake, ActivitySquare, ShieldCheck, Truck, Store } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';

const stages = [
  { id: 1, title: 'Orchard Sourcing', metric: 'Yield', icon: Tractor, description: 'Harvesting premium yields directly from vetted, tier-1 global orchards at peak ripeness.' },
  { id: 2, title: 'Thermal Pre-cooling', metric: 'Core Temp', icon: ThermometerSnowflake, description: 'Instantly dropping core fruit temperatures within 4 hours of harvest to halt ripening.' },
  { id: 3, title: 'Quality Assurance', metric: 'Brix Level', icon: ActivitySquare, description: 'Rigorous sensory and optical testing to ensure size, sweetness, and color uniformity.' },
  { id: 4, title: 'Cold-Chain Audit', metric: 'Humidity', icon: ShieldCheck, description: 'Attaching live telemetry sensors to pallets for 24/7 temperature and humidity tracking.' },
  { id: 5, title: 'Logistics Fleet', metric: 'Transit', icon: Truck, description: 'Dispatching via our proprietary fleet of 100+ climate-controlled vehicles.' },
  { id: 6, title: 'Retail Partners', metric: 'Delivery', icon: Store, description: 'Direct-to-store delivery, ensuring zero breaks in the cold chain from farm to shelf.' }
];

export default function ScrollTimeline() {
  const { fruitInfo } = useFruit();

  return (
    <section id="pipeline" className="w-full bg-neutral-950 py-32 relative overflow-hidden">
      
      {/* Background ambient glow based on fruit theme */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: fruitInfo.accent }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-24">
          <div className="inline-flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 rounded-full px-5 py-2 w-fit mb-8 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ backgroundColor: fruitInfo.accent, color: fruitInfo.accent }}></span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-300">Live Logistics Matrix</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-light text-white tracking-tight mb-4">
            Vertical Data Flow.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Tracking the lifecycle of <strong className="text-white font-normal theme-transition">{fruitInfo.name}</strong> from our global sourcing hubs through to final retail placement.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Track Line */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-0.5 bg-neutral-800/50 z-0"></div>
          
          <div className="space-y-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={stage.id} className="relative z-10 flex gap-8 group">
                  
                  {/* Glowing Node */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative z-10 group-hover:border-neutral-600 transition-colors duration-300 shadow-xl overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: fruitInfo.accent }}></div>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* Active pulse dot on the line */}
                    <div 
                      className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_currentColor]"
                      style={{ backgroundColor: fruitInfo.accent, color: fruitInfo.accent }}
                    ></div>
                  </div>

                  {/* Content Panel */}
                  <div className="flex-1 bg-neutral-900/40 border border-neutral-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm group-hover:bg-neutral-900/60 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold">Node // 0{stage.id}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full border border-neutral-700 text-neutral-400 theme-transition group-hover:text-neutral-200" style={{ borderColor: fruitInfo.accent }}>
                            {stage.metric}: {index === 0 ? fruitInfo.specs.origin : index === 1 ? fruitInfo.specs.temp : 'Active'}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{stage.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base max-w-2xl">
                      {stage.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
