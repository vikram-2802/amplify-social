import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/20 bg-slate-950/15 p-10 shadow-2xl shadow-black/20 sm:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Ready to grow?</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Let’s make your next launch impossible to ignore.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Whether you’re entering a new market or scaling your current presence, we craft campaigns that connect with the right audiences at the right moment.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-full bg-white px-7 py-3.5 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Schedule a discovery call
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
            >
              View our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
