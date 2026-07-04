"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/amplify-social-logo.svg"
            alt="Amplify Social logo"
            className="h-12 w-auto sm:h-14"
          />
          <div className="hidden sm:flex flex-col">
            <p className="text-lg font-semibold uppercase tracking-[0.35em] text-white">
              Amplify Social
            </p>
            <p className="text-xs text-slate-400">
              Real Voices. Real Influence. Real Impact.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-base font-medium text-slate-300 md:flex justify-self-end">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900"
              onClick={() => setOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
