"use client";

export default function SourcingHubs() {
  return (
    <section id="hubs" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500 theme-transition">Operational Scale</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-2">Regional Sourcing & Distribution Network Divisions</h2>
                <p className="text-sm text-neutral-500 mt-4">We control regional cold storage operations across strategic nodes to preserve product shelf life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kerala Hubs */}
                <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
                    <h3 className="text-md font-bold text-neutral-950 uppercase tracking-wider border-b border-neutral-100 pb-4 mb-4">Kerala Core Network</h3>
                    <ul className="space-y-3 text-xs text-neutral-600">
                        <li className="flex justify-between"><strong>Head Office / Storage</strong> <span className="text-neutral-950 font-medium">Pala Depot</span></li>
                        <li className="flex justify-between"><strong>Distribution Depot</strong> <span className="text-neutral-950 font-medium">Nettoor Market, Kochi</span></li>
                        <li className="flex justify-between"><strong>Southern Sourcing</strong> <span className="text-neutral-950 font-medium">Killippalam, TVM</span></li>
                        <li className="flex justify-between"><strong>Inland Collection</strong> <span className="text-neutral-950 font-medium">Erumeli Node</span></li>
                        <li className="flex justify-between"><strong>Northern Gateway</strong> <span className="text-neutral-950 font-medium">Kozhikode Center</span></li>
                    </ul>
                </div>

                {/* Tamil Nadu Hubs */}
                <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
                    <h3 className="text-md font-bold text-neutral-950 uppercase tracking-wider border-b border-neutral-100 pb-4 mb-4">Tamil Nadu Divisions</h3>
                    <ul className="space-y-3 text-xs text-neutral-600">
                        <li className="flex justify-between"><strong>Primary Gateway</strong> <span className="text-neutral-950 font-medium">Koyambedu, Chennai</span></li>
                        <li className="flex justify-between"><strong>Southern Depot</strong> <span className="text-neutral-950 font-medium">SIDCO, Madurai</span></li>
                        <li className="flex justify-between"><strong>Industrial Logistics</strong> <span className="text-neutral-950 font-medium">Coimbatore Center</span></li>
                        <li className="flex justify-between"><strong>Central Sourcing Hub</strong> <span className="text-neutral-950 font-medium">Central Trichy</span></li>
                    </ul>
                </div>

                {/* National & International */}
                <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
                    <h3 className="text-md font-bold text-neutral-950 uppercase tracking-wider border-b border-neutral-100 pb-4 mb-4">Global Gateways</h3>
                    <ul className="space-y-3 text-xs text-neutral-600">
                        <li className="flex justify-between"><strong>Karnataka Sourcing</strong> <span className="text-neutral-950 font-medium">APMC, Bengaluru</span></li>
                        <li className="flex justify-between"><strong>Western Hub Terminal</strong> <span className="text-neutral-950 font-medium">NMMC, Navi Mumbai</span></li>
                        <li className="flex justify-between"><strong>Middle East Sourcing</strong> <span className="text-neutral-950 font-medium">Al Thanyah, Dubai</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
