import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONFIG } from "@/lib/config";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#reserva", label: "Reserva" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent backdrop-blur transition-all duration-500",
        scrolled
          ? "border-line bg-noir/95 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.9)]"
          : "bg-noir/60",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-baseline gap-1" aria-label={CONFIG.nombre}>
          <span className="font-display text-3xl italic leading-none text-ivory transition-colors group-hover:text-goldlight">
            {CONFIG.logoNombre}
          </span>
          <span className="text-goldmetal font-display text-lg font-medium tracking-widest2">
            {CONFIG.logoAcento.toUpperCase()}
          </span>
        </a>

        <div className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.25em] text-fog md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-ivory"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#reserva"
            className="btn-sheen hidden items-center border border-gold/60 bg-gold/10 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-goldlight transition-all duration-300 hover:bg-gold hover:text-noir sm:inline-flex"
          >
            Reservar
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-ivory transition-colors hover:text-goldlight md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-noir/98 md:hidden">
          <div className="flex flex-col gap-5 px-5 py-5 text-sm font-medium uppercase tracking-[0.2em] text-fog">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserva"
              onClick={() => setMenuOpen(false)}
              className="btn-sheen mt-1 inline-flex items-center justify-center border border-gold/60 bg-gold/10 px-6 py-3 font-semibold uppercase tracking-[0.2em] text-goldlight transition-colors hover:bg-gold hover:text-noir"
            >
              Reservar cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}