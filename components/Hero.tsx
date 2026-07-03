"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const highlights = [
  "5,000+ creators",
  "Pan India coverage",
  "Multiple Indian languages",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.35),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.26),_transparent_26%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-32">
        <Reveal className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Real Voices. Real Influence. Real Impact.
          </div>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            India’s Regional Influencer Marketing &amp; Digital PR Powerhouse
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Where Brands Meet India’s Most Trusted Voices. From metro cities to Tier-2 and Tier-3 markets, Amplify Social helps brands build meaningful conversations through one of India’s strongest regional creator networks.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#services"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Why leading brands partner with us
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Regional depth",
                  text: "We understand the nuances that make campaigns resonate from Delhi to Chennai and every city in between.",
                },
                {
                  title: "Trusted creator network",
                  text: "We connect brands with influencers, journalists, and publishers who move culture and conversation.",
                },
                {
                  title: "Integrated execution",
                  text: "Influencer marketing, PR, and content strategy are orchestrated as one premium growth engine.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h2 className="font-semibold text-white">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
