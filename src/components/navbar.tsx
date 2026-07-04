import { useEffect, useState } from "react";
import { Asterisk } from "lucide-react";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 120;
      let curr = "#hero";
      for (const l of links) {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.offsetTop <= y) curr = l.href;
      }
      setActive(curr);
    };
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
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-[clamp(20px,4vw,56px)] py-5">
        <a href="#hero" onClick={handleClick("#hero")} className="font-display text-2xl tracking-tight text-cream">
          CC<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleClick(l.href)}
              className={`relative font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                active === l.href ? "text-cream" : "text-cream/60 hover:text-cream"
              }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-accent" />
              )}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          onClick={handleClick("#contacto")}
          className="hidden lg:inline-flex items-center gap-2 rounded-full border border-cream/25 bg-transparent px-5 py-2.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream transition-all hover:border-accent hover:bg-accent/10"
        >
          Vamos conversar <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
        </a>
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-6 bg-cream transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-cream transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[68px] z-40 flex flex-col items-center justify-center gap-6 bg-bg lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleClick(l.href)}
              className="font-display text-3xl uppercase text-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleClick("#contacto")}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 font-body uppercase text-sm tracking-[0.2em] text-cream"
          >
            Vamos conversar <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
          </a>
        </div>
      )}
    </header>
  );
}