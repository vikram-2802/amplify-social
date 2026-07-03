"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error || "Unable to send enquiry.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      setError(
        error instanceof Error
          ? "Sorry, your message could not be sent right now. Please email info@amplifysocial.com directly."
          : "Sorry, your message could not be sent right now. Please try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Contact</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Let’s build something culturally relevant and commercially powerful.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Share your goals, audience, and timeline and we’ll map out a tailored approach.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Visit</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
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
              <a href="mailto:info@amplifysocial.com" className="mt-4 inline-flex text-sm font-semibold text-violet-700">
                info@amplifysocial.com
              </a>
            </div>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-violet-500"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Work email"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-violet-500"
                required
              />
            </div>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Brand or company"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-violet-500"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your campaign goals"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-violet-500"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {submitting ? "Sending..." : "Send inquiry"}
            </button>
            {submitted ? (
              <p className="text-sm text-emerald-600">Thanks! We&apos;ll be in touch shortly.</p>
            ) : null}
            {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
