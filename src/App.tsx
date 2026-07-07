import { Competencias } from "@/components/competencias";
import { Contacto } from "@/components/contacto";
import { Footer } from "@/components/footer";
import { Galeria } from "@/components/galeria";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Servicos } from "@/components/servicos";
import { Sobre } from "@/components/sobre";
import { Stats } from "@/components/stats";

export function App() {
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