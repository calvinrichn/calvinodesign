import { useEffect } from "react";

import { Competencias } from "@/components/competencias";
import { Contacto } from "@/components/contacto";
import { Footer } from "@/components/footer";
import { Galeria } from "@/components/galeria";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Servicos } from "@/components/servicos";
import { Sobre } from "@/components/sobre";
import { Stats } from "@/components/stats";

const pathSections: Record<string, string> = {
  "/inicio": "#hero",
  "/sobre": "#sobre",
  "/servicos": "#servicos",
  "/galeria": "#galeria",
  "/skills": "#skills",
  "/contacto": "#contacto",
  "/contato": "#contacto",
};

export function App() {
  useEffect(() => {
    const section = pathSections[window.location.pathname.toLowerCase()];
    if (!section) return;

    window.history.replaceState(null, "", section);
    requestAnimationFrame(() => {
      document.querySelector(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="min-h-screen bg-bg font-body text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Stats />
        <Competencias />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}