import { Reveal } from "./Reveal";

const stats = [
  { value: "5,000+", label: "Creators" },
  { value: "Pan India", label: "Coverage" },
  { value: "Multiple", label: "Indian Languages" },
  { value: "Influencers & Journalists", label: "Ecosystem" },
];

export function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="flex h-full min-h-[190px] flex-col items-center justify-center rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-3xl font-black text-violet-700 sm:text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
