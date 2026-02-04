const services = [
  {
    title: "Social Media Posts",
    description: "On-brand social that keeps you present, consistent, and worth following.",
    bullets: [
      "Content calendar aligned to campaigns and launches",
      "Design templates for speed and brand consistency",
      "Captions and hooks tailored to your tone of voice",
    ],
  },
  {
    title: "Professional Video Creations",
    description: "Sharp storytelling and edits built to capture attention and drive action.",
    bullets: [
      "Short- and mid-form edits for ads and organic",
      "Storyboards, scripts, and motion guidelines",
      "Platform-specific ratios, hooks, and CTAs",
    ],
  },
  {
    title: "Website Creation / Optimization",
    description: "High-performing sites that clarify your offer and streamline conversion.",
    bullets: [
      "Site architecture, copy, and conversion flows",
      "Performance-focused builds with modern tooling",
      "A/B ideas and analytics setup for ongoing gains",
    ],
  },
];

export const metadata = {
  title: "Services | ScaleSpark",
  description: "ScaleSpark services for social, video, and website performance.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Services</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Focused services that move the metrics that matter.
          </h1>
          <span className="text-sm text-zinc-400">Built for clarity, speed, and measurable impact.</span>
        </div>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          We keep things tight: only what drives clarity, velocity, and sustainable growth for modern brands.
        </p>
      </header>

      <section className="grid auto-rows-fr gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/25"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-sm text-zinc-300">{service.description}</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-zinc-200">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
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
