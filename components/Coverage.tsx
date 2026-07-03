const regions = [
  { title: "Tier-1 metros", text: "High-velocity campaigns for fast-moving urban audiences." },
  { title: "Tier-2 growth markets", text: "Localized narratives that build trust and relevance." },
  { title: "Tier-3 communities", text: "Community-led strategies that inspire advocacy." },
];

export function Coverage() {
  return (
    <section id="coverage" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Coverage</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              National scale, local precision.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our network spans India’s most influential communities, enabling campaigns that feel native to each market and powerful at scale.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {regions.map((region) => (
              <div key={region.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{region.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{region.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
