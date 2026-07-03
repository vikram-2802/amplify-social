const points = [
  {
    title: "Deep audience intelligence",
    text: "We map conversations, creators, and communities to find the right entry points for your brand.",
  },
  {
    title: "Performance-led storytelling",
    text: "Every campaign is designed to connect culturally and convert commercially.",
  },
  {
    title: "Flexible execution",
    text: "From quick-turn launches to high-scale programs, we adapt without sacrificing quality.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Why choose us</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A partner built for premium brand growth.
            </h2>
          </div>
          <div className="space-y-4">
            {points.map((point) => (
              <div key={point.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
