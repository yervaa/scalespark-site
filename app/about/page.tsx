export const metadata = {
  title: "About | ScaleSpark",
  description: "Learn what drives ScaleSpark and how we approach growth.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">About</p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">Why ScaleSpark exists</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          ScaleSpark is a modern marketing partner built to keep brands moving forward. We combine clarity in strategy,
          quality in execution, and a relentless focus on growth so every initiative pushes the business further.
        </p>
      </header>

      <section className="grid auto-rows-fr gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-lg font-semibold">Clarity first</h2>
          <p className="text-sm text-zinc-300">
            We simplify your story and sharpen your offer so every channel tells the same compelling narrative.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-lg font-semibold">Quality always</h2>
          <p className="text-sm text-zinc-300">
            Premium craft in design, copy, and development—because brand trust is built on the details.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-lg font-semibold">Innovation with purpose</h2>
          <p className="text-sm text-zinc-300">
            We test, learn, and iterate quickly, focusing on what measurably improves growth, not trends for their own sake.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-lg font-semibold">Built to scale</h2>
          <p className="text-sm text-zinc-300">
            Systems, templates, and playbooks that your team can run with—so momentum doesn’t depend on any one person.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:items-center sm:justify-between">
        <a
          href="/contact"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.6)]"
        >
          Contact Us
        </a>
        <a
          href="mailto:scalesparkoutreach@gmail.com"
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
        >
          Email scalesparkoutreach@gmail.com
        </a>
      </div>
    </div>
  );
}
