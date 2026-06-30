"use client";
import { useFruit } from "@/context/FruitContext";

export default function Footer() {
  const { fruitInfo } = useFruit();
  
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 border-t-[8px] theme-transition" style={{ borderColor: fruitInfo.accent }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-black tracking-tight theme-transition" style={{ color: fruitInfo.accent }}>GLOBAL<span className="text-white">FRUITS</span></span>
              <span className="text-[10px] uppercase tracking-widest font-semibold bg-white/10 text-white px-2 py-0.5 rounded">Est. 1988</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Global Fruits is a vertically integrated B2B supply chain connecting premium global orchards directly to regional distribution networks.
            </p>
            <div className="border-l-2 pl-3 italic text-xs text-neutral-500 theme-transition" style={{ borderColor: fruitInfo.accent }}>
              "Good thoughts bear good fruits."
            </div>
          </div>

          {/* Links: Sourcing */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-neutral-300">Sourcing Hubs</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Munnar, Kerala</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Ooty, Tamil Nadu</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">International Imports</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Agritha Farms</a></li>
            </ul>
          </div>

          {/* Links: Logistics */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-neutral-300">Logistics</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Cold Storage Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Refrigerated Fleet</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Live Tracker Portal</a></li>
            </ul>
          </div>

          {/* Links: Corporate */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-neutral-300">Corporate</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Wholesale Inquiries</a></li>
              <li><a href="#" className="hover:text-white transition-colors theme-transition hover-underline">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Global Fruits Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Supplier Guidelines</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover-underline:hover {
          color: var(--fruit-accent, white);
        }
      `}</style>
    </footer>
  );
}
