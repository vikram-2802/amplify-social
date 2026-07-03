import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-14 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Amplify Social</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Real Voices. Real Influence. Real Impact.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            We help brands build meaningful conversations through one of India’s strongest regional creator networks.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Navigate</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
            <a href="mailto:info@amplifysocial.in" className="mt-4 inline-flex text-sm font-medium text-slate-200 transition hover:text-white">
              info@amplifysocial.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
