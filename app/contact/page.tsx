export const metadata = {
  title: "Contact | ScaleSpark",
  description: "Get in touch with ScaleSpark for modern marketing support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Contact</p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">Let’s build what’s next</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          Tell us about your goals, timelines, and team. We’ll reply within one business day.
        </p>
      </header>

      <section className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
        <h2 className="text-lg font-semibold">Email</h2>
        <p className="text-sm text-zinc-300">Primary channel for project inquiries and briefs.</p>
        <a
          href="mailto:scalesparkoutreach@gmail.com"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.6)]"
        >
          scalesparkoutreach@gmail.com
        </a>
      </section>
    </div>
  );
}
