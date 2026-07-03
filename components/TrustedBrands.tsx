const brands = ["Amazon", "Nykaa", "PhonePe", "Myntra", "Spotify", "ShareChat"];

export function TrustedBrands() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/80 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Trusted by ambitious brands
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
