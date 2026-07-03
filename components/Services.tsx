import { Reveal } from "./Reveal";

const services = [
  {
    title: "Influencer Marketing",
    description: "Strategy-led campaigns that connect brands with credible regional voices and measurable outcomes.",
  },
  {
    title: "Digital PR",
    description: "High-impact media outreach that earns trust, attention, and sustained conversation.",
  },
  {
    title: "Brand Launches",
    description: "Launch experiences designed to create momentum from first reveal to sustained visibility.",
  },
  {
    title: "Corporate Communications",
    description: "Crisp narratives and executive visibility for brands navigating high-stakes moments.",
  },
  {
    title: "Event Amplification",
    description: "Integrated on-ground and digital amplification that makes every activation travel farther.",
  },
  {
    title: "Regional Campaigns",
    description: "Deeply localized storytelling built for specific markets, languages, and audience behaviors.",
  },
  {
    title: "Crisis Management",
    description: "Protective communications and response planning with speed, discretion, and control.",
  },
  {
    title: "Social Media Strategy",
    description: "Content systems that move from insight to community growth without losing brand elegance.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Services</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Premium communications for brands that want to be remembered.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              We combine regional reach, earned media expertise, and creator fluency into one elegant growth system.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/10">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
