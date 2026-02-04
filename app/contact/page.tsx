export const metadata = {
  title: "Contact | ScaleSpark",
  description: "Get in touch with ScaleSpark for modern marketing support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10 pb-20 pt-16">
      <header className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">Contact</p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">Let’s build what’s next</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          Tell us about your goals, timelines, and team. We’ll reply within one business day.
        </p>
      </header>

      <section className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Email</h2>
          <a
            href="mailto:scalesparkoutreach@gmail.com"
            className="text-sm font-medium underline decoration-white/50 underline-offset-4 hover:decoration-white"
          >
            scalesparkoutreach@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Instagram</h2>
          <a
            href="https://instagram.com/scalespark"
            className="text-sm font-medium underline decoration-white/50 underline-offset-4 hover:decoration-white"
          >
            instagram.com/scalespark
          </a>
          <p className="text-xs text-zinc-400">Placeholder link — update when ready.</p>
        </div>
      </section>
    </div>
  );
}
