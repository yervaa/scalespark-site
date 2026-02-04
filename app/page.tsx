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
    <div className="flex flex-col gap-16 pb-20 pt-16">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">ScaleSpark</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Innovative solutions that help businesses grow faster.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            ScaleSpark’s goal is to help businesses grow faster by delivering innovative solutions that spark progress.
            Our number one goal is to turn clients’ ideas into real success—with clean execution across content, video,
            and web.
          </p>

        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            About
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
        <div className="grid gap-4 sm:grid-cols-3">
          {servicePreview.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-zinc-300">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
