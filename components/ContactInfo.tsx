import Link from "next/link";

export function ContactInfo() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <img
              src="/amplify-social-logo.svg"
              alt="Amplify Social logo"
              className="h-20 w-auto"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Let’s build your next regional campaign.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Reach us for partnership enquiries, creative briefs, and media strategy across India.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Email</p>
              <Link
                href="mailto:info@amplifysocial.in"
                className="mt-4 inline-block text-lg font-semibold text-violet-700"
              >
                info@amplifysocial.in
              </Link>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Office</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Amplify Social
                <br />
                808B, DLF Prime Tower
                <br />
                Pocket F, Okhla Phase I
                <br />
                Okhla Industrial Estate
                <br />
                New Delhi – 110020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
