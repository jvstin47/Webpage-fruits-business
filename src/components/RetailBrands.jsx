"use client";

export default function RetailBrands() {
  return (
    <section className="py-24 bg-white border-y border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500 theme-transition">Vertically Integrated Ecosystem</span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-2">Our Corporate Brand Footprint</h2>
                <p className="text-sm text-neutral-500 mt-4">Maintaining complete cold chain oversight across multiple distinct end-to-end consumer gateways.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* PJJ Fruits */}
                <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/60 hover:scale-[1.02] transition-transform duration-300">
                    <span className="material-icons text-brand-500 text-4xl theme-transition">domain</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2">PJJ Fruits</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">Global wholesale supply chain and refrigerated transport fleet. Sourcing active imports and regional farm assets daily.</p>
                    <span className="text-xs font-semibold text-brand-500 theme-transition uppercase tracking-wider">Enterprise Distribution</span>
                </div>

                {/* Fruitstaurant */}
                <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/60 hover:scale-[1.02] transition-transform duration-300">
                    <span className="material-icons text-brand-500 text-4xl theme-transition">restaurant</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2">Fruitstaurant</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">Experiential, premium fruit-focused dining environments highlighting exotic and import varieties under raw culinary art forms.</p>
                    <span className="text-xs font-semibold text-brand-500 theme-transition uppercase tracking-wider">Premium Dining Spaces</span>
                </div>

                {/* Fruit Spot */}
                <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/60 hover:scale-[1.02] transition-transform duration-300">
                    <span className="material-icons text-brand-500 text-4xl theme-transition">local_mall</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2">Fruit Spot</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">Express retail kiosks situated inside tier-1 corporate hubs and high-density commuter platforms providing direct access.</p>
                    <span className="text-xs font-semibold text-brand-500 theme-transition uppercase tracking-wider">Neighborhood Outlets</span>
                </div>
            </div>
        </div>
    </section>
  );
}
