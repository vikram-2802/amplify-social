import { Reveal } from "./Reveal";

const clients = [
  { name: "Honda", file: "honda.png" },
  { name: "Airtel", file: "airtel.png" },
  { name: "Hindustan Unilever", file: "hindustan-unilever.png" },
  { name: "Re’equil", file: "reequil.png" },
  { name: "Mokobara", file: "mokobara.png" },
  { name: "Aqualogica", file: "aqualogica.png" },
  { name: "The Whole Truth", file: "the-whole-truth.png" },
  { name: "Airalo", file: "airalo.png" },
  { name: "Nestasia", file: "nestasia.png" },
  { name: "NEWME", file: "newme.png" },
  { name: "Highlander Clothing", file: "highlander-clothing.png" },
];

export function Clients() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Clients</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Trusted by brands that value cultural relevance and strategic precision.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.03}>
              <div className="group flex h-full min-h-[150px] flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-20 w-full items-center justify-center rounded-3xl bg-slate-950/5 p-4 transition duration-300 group-hover:bg-white">
                  <img
                    src={`/logos/${client.file}`}
                    alt={`${client.name} logo`}
                    className="max-h-14 max-w-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-700">{client.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
