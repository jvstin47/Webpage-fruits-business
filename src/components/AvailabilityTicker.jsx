"use client";

export default function AvailabilityTicker() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-neutral-950 text-white border-b border-neutral-900 overflow-hidden text-[11px] font-sans tracking-wider h-8 flex items-center no-select">
      <div className="animate-ticker">
        <span className="px-6 flex items-center gap-2">🍎 <strong className="text-white">Washington Gala Apples:</strong> Year-Round CA Storage <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active</span>
        <span className="px-6 flex items-center gap-2">🥭 <strong className="text-white">Konkan Alphonso Mangoes:</strong> Sourcing Active March-July <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active</span>
        <span className="px-6 flex items-center gap-2">🍍 <strong className="text-white">Vazhakulam Pineapples:</strong> Daily Farm Direct Harvest <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active</span>
        <span className="px-6 flex items-center gap-2">🍇 <strong className="text-white">Chilean Red Globe Grapes:</strong> Imports Active Jan-May <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span> Low Stock</span>
        {/* Duplicated for flawless loop */}
        <span className="px-6 flex items-center gap-2">🍎 <strong className="text-white">Washington Gala Apples:</strong> Year-Round CA Storage <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active</span>
        <span className="px-6 flex items-center gap-2">🥭 <strong className="text-white">Konkan Alphonso Mangoes:</strong> Sourcing Active March-July <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active</span>
        <span className="px-6 flex items-center gap-2">🍍 <strong className="text-white">Vazhakulam Pineapples:</strong> Daily Farm Direct Harvest <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active</span>
        <span className="px-6 flex items-center gap-2">🍇 <strong className="text-white">Chilean Red Globe Grapes:</strong> Imports Active Jan-May <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span> Low Stock</span>
      </div>
    </div>
  );
}
