"use client";
import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';
import LiveDispatchTicker from './LiveDispatchTicker';

export default function LogisticsTracker() {
  const { activeFruit, fruitInfo } = useFruit();

  const tempRanges = {
    apple: { min: 0, max: 4, start: 2.0 },
    mango: { min: 10, max: 12, start: 11.0 },
    pineapple: { min: 7, max: 10, start: 8.5 },
    orange: { min: 3, max: 8, start: 5.5 }
  };

  const currentRange = tempRanges[activeFruit] || { min: 0, max: 4, start: 2.0 };

  const [telemetry, setTelemetry] = useState({
    temp: currentRange.start,
    humidity: 85,
    status: 'optimal'
  });

  const [graphHeights, setGraphHeights] = useState([]);

  // Generate stable mock heights on mount
  useEffect(() => {
    setGraphHeights(Array.from({ length: 30 }, () => Math.floor(30 + Math.random() * 70)));
  }, []);

  // Re-initialize telemetry on active fruit change
  useEffect(() => {
    setTelemetry({
      temp: currentRange.start,
      humidity: 85,
      status: 'optimal'
    });
  }, [activeFruit]);

  // Simulate live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => {
        // Fluctuates around the current temperature range
        const drift = (Math.random() - 0.5) * 0.4;
        const newTemp = prev.temp + drift;
        const status = (newTemp < currentRange.min || newTemp > currentRange.max) ? 'warning' : 'optimal';
        return { ...prev, temp: Number(newTemp.toFixed(1)), status };
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activeFruit, currentRange.min, currentRange.max]);

  return (
    <section id="logistics" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
           style={{ background: `radial-gradient(ellipse at right, ${fruitInfo.accent}, transparent 70%)` }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Live Diagnostics Simulator</h2>
           <p className="text-gray-400">Monitoring real-time transit telemetry for optimal freshness.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
           
           {/* Telemetry Panel */}
           <div className="lg:col-span-2 glass-dark rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                 <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5" style={{ color: fruitInfo.accent }} />
                    <h3 className="font-semibold tracking-widest uppercase text-sm">Active Route Logs</h3>
                 </div>
                 <div className="flex items-center gap-2 text-sm">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Live
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 <div className="bg-black/40 rounded-2xl p-6 border border-white/5">
                    <p className="text-gray-400 text-sm mb-2">Core Temperature</p>
                    <div className="text-4xl font-light">
                       {telemetry.temp}°C
                    </div>
                 </div>
                 <div className="bg-black/40 rounded-2xl p-6 border border-white/5">
                    <p className="text-gray-400 text-sm mb-2">Humidity Index</p>
                    <div className="text-4xl font-light">
                       {telemetry.humidity}%
                    </div>
                 </div>
              </div>

              {/* Mock Graph Area */}
              <div className="h-32 flex items-end gap-1 opacity-50 mt-auto">
                 {graphHeights.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" 
                         style={{ 
                             height: `${h}%`, 
                             backgroundColor: fruitInfo.accent 
                          }}>
                    </div>
                 ))}
              </div>
           </div>

           {/* Live Dispatch Ticker */}
           <div className="h-[400px] lg:h-auto">
              <LiveDispatchTicker />
           </div>

        </div>
      </div>
    </section>
  );
}
