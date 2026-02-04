import Link from "next/link";

const servicePreview = [
  {
    title: "Social Media Posts",
    copy: "Consistent, on-brand content that keeps your audience engaged and growing.",
  },
  {
    title: "Professional Video Creations",
    copy: "Crisp storytelling and editing designed to convert across every channel.",
  },
  {
    title: "Website Creation / Optimization",
    copy: "High-performing sites with clear messaging and smooth user flows.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <div className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">ScaleSpark</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            We build modern marketing systems so brands scale faster.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            ScaleSpark turns bold ideas into measurable growth through clear positioning, disciplined creative, and
            precise execution across social, video, and web. Every touchpoint is built to spark progress.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.6)]"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            View Services
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            About ScaleSpark
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Services preview</h2>
          <Link href="/services" className="text-sm font-medium text-zinc-300 underline underline-offset-4">
            View all
          </Link>
        </div>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-3">
          {servicePreview.map((service) => (
            <div
              key={service.title}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/25"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <span className="h-2 w-2 rounded-full bg-white/60 group-hover:bg-white" />
              </div>
              <p className="text-sm text-zinc-300">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
