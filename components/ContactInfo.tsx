import Link from "next/link";

export function ContactInfo() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
          <p className="mt-3 text-sm text-slate-700">For enquiries, email us at</p>
          <Link href="mailto:info@amplifysocial.in" className="mt-4 inline-block text-lg font-semibold text-violet-700">
            info@amplifysocial.in
          </Link>
          <p className="mt-4 text-sm text-slate-600">Or use the navigation to reach other sections of the site.</p>
        </div>
      </div>
    </section>
  );
}
