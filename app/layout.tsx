import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaleSpark | Modern Marketing Agency",
  description:
    "ScaleSpark builds clear, modern marketing systems that help brands grow faster.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <div className="min-h-screen">
          <header className="border-b border-white/10 bg-black/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="ScaleSpark"
                  className="h-10 w-10 rounded-full border border-white/20 bg-white/5 object-contain"
                />
                <span className="text-lg font-semibold tracking-tight">ScaleSpark</span>
              </Link>
              <nav className="flex items-center gap-3 text-sm font-medium text-zinc-200">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-2 transition hover:bg-white hover:text-black"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-16">
            {children}
          </main>

          <footer className="border-t border-white/10 bg-black py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <p className="text-sm text-zinc-500">© {new Date().getFullYear()} ScaleSpark. All rights reserved.</p>
              <a
                href="mailto:scalesparkoutreach@gmail.com"
                className="text-sm font-medium underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                scalesparkoutreach@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
