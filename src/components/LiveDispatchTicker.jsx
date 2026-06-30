"use client";
import { useState, useEffect } from 'react';
import { Activity, MapPin } from 'lucide-react';
import { useFruit } from '@/context/FruitContext';

const initialLogs = [
  { id: 1, text: "🚢 Container #PJJ-882 (Washington Apples) docked at Kochi Port. Temp: 1.2°C", time: "09:30 AM" },
  { id: 2, text: "🚛 Dispatch PJJ-F91 (Pineapples) cleared Pala Cold Depot for Lulu Terminal.", time: "10:15 AM" },
  { id: 3, text: "✈️ Air Cargo #PJJ-943 (Thai Pitaya) dispatched from Bangkok (BKK) to Kochi (COK).", time: "11:00 AM" }
];

const realisticLogs = [
  "🚢 Container #PJJ-882 (Washington Apples) docked at Kochi Port. Temp: 1.2°C",
  "🚛 Dispatch PJJ-F91 (Pineapples) cleared Pala Cold Depot for Lulu Terminal.",
  "✈️ Air Cargo #PJJ-943 (Thai Pitaya) dispatched from BKK to COK.",
  "📦 Quality Check passed for Alphonso Mango batch M-404 at APMC Hub.",
  "❄️ Storage bay C4 stabilized at 4.0°C. Origin: Valencia Oranges.",
  "🚚 Fleet #92 reached Chennai Koyambedu Market safely.",
  "🌡️ Alert resolved: Micro-fluctuation stabilized in Transit Van V-12.",
  "🚢 Vessel 'Marine Star' (Chilean Grapes) ETA updated to 18:00 HRS."
];

export default function LiveDispatchTicker() {
  const [logs, setLogs] = useState(initialLogs);
  const { fruitInfo } = useFruit();

  useEffect(() => {
    let count = 4;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const randomLog = realisticLogs[Math.floor(Math.random() * realisticLogs.length)];
      
      const newLog = {
        id: count++,
        text: randomLog,
        time: timeStr
      };

      setLogs(prev => {
        const nextLogs = [newLog, ...prev];
        if (nextLogs.length > 5) return nextLogs.slice(0, 5);
        return nextLogs;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-dark rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col h-full overflow-hidden">
      <div className="flex justify-between items-center mb-6">
         <h3 className="font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
            <Activity className="w-4 h-4" style={{ color: fruitInfo.accent }} /> 
            Live Dispatch Logs
         </h3>
         <div className="flex items-center gap-2 text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Active Sync
         </div>
      </div>
      
      <div className="space-y-4 flex-1 relative">
         {logs.map((log, index) => (
            <div 
              key={log.id} 
              className="flex gap-3 items-start animate-slide-in relative z-10"
              style={{ opacity: 1 - (index * 0.15) }}
            >
               <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: fruitInfo.accent }} />
               <div>
                  <p className="text-sm font-medium leading-snug">{log.text}</p>
                  <p className="text-xs text-gray-500 mt-1 font-mono">[{log.time}]</p>
               </div>
            </div>
         ))}
         
         <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
