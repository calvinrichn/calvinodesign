import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#competencias", label: "Competências" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-line" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-[clamp(24px,5vw,80px)] py-5">
        <a href="#hero" onClick={handleClick("#hero")} className="font-display text-xl font-extrabold tracking-tight text-ink">
          CALVINO<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleClick(l.href)}
              className="font-body text-[0.85rem] tracking-wide text-ink/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleClick("#contacto")}
            className="rounded-[4px] bg-accent px-5 py-2.5 font-display text-[0.85rem] font-bold text-bg transition-opacity hover:opacity-85"
          >
            Falar comigo
          </a>
        </nav>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[68px] z-40 flex flex-col items-center justify-center gap-8 bg-bg md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleClick(l.href)}
              className="font-display text-3xl font-bold text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleClick("#contacto")}
            className="rounded-[4px] bg-accent px-6 py-3 font-display text-lg font-bold text-bg"
          >
            Falar comigo
          </a>
        </div>
      )}
    </header>
  );
}