import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const HORARIOS = [
  { dias: "Lunes – Sábado", horas: "10h–14h y 16h–21h" },
  { dias: "Domingos y festivos", horas: "9h–14h" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Resplandor y grano de cine sobre todo el hero */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="glow-gold absolute -left-32 top-0 rounded-full blur-3xl"
          style={{ width: "560px", height: "560px" }}
        ></div>
        <div
          className="glow-gold absolute right-0 bottom-0 rounded-full opacity-70 blur-3xl"
          style={{ width: "460px", height: "460px" }}
        ></div>
        <div className="absolute inset-y-0 left-8 hidden w-px bg-line lg:block"></div>
        <div className="absolute inset-y-0 right-8 hidden w-px bg-line lg:block"></div>
      </div>
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-7 inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-fog">
                <span className="inline-block h-px w-12 bg-gold/70"></span>
                Tu negocio · {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-5xl leading-[1.04] text-ivory sm:text-7xl lg:text-8xl">
                Tu local,
                <br />
                <em className="text-goldmetal italic">sin esperas.</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">
                Tu negocio, siempre a mano. Lo que ofreces, dónde estás y
                cómo contactar con un solo toque.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center bg-gold px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-noir shadow-goldglow transition-colors duration-300 hover:bg-goldlight"
                >
                  Pedir cita
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center border border-line bg-transparent px-8 py-4 text-sm font-medium text-ivory transition-all duration-300 hover:border-gold/60 hover:bg-panel"
                >
                  <Phone className="mr-2 h-4 w-4 text-gold" aria-hidden="true" />
                  Llamar ahora · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-14 grid max-w-xl grid-cols-1 gap-8 border-t border-line/70 pt-9 sm:grid-cols-2">
                {HORARIOS.map((slot) => (
                  <div key={slot.dias}>
                    <p className="font-display text-2xl italic text-ivory">{slot.dias}</p>
                    <p className="mt-1.5 text-sm text-fog">{slot.horas}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-gold/80">
                {CONFIG.ciudad} · {CONFIG.direccion}
              </p>
            </Reveal>
          </div>

          {/* Fotografía editorial con marco doble dorado */}
          <Reveal delay={160} className="hidden lg:col-span-5 lg:block">
            <div className="relative">
              <div className="gold-rule absolute -left-4 -top-4 h-px w-2/3" aria-hidden="true"></div>
              <div className="gold-rule absolute -right-4 -top-4 h-px w-1/3" aria-hidden="true"></div>
              <div className="absolute inset-0 -translate-x-4 translate-y-4 border border-gold/30" aria-hidden="true"></div>
              <div className="relative overflow-hidden border border-line bg-panel">
                <img
                  src="img/hero-cut.jpg"
                  alt="Tu negocio en el día a día"
                  className="h-[520px] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  loading="eager"
                />
              </div>
              <p className="mt-4 font-display text-sm italic text-fog">
                Tu negocio, trabajando también cuando estás cerrado.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Cinta de servicios */}
      <div className="relative overflow-hidden border-y border-line/70 bg-coal/60 py-4" aria-hidden="true">
        <div className="marquee-track items-center gap-10 text-[11px] font-medium uppercase tracking-[0.35em] text-fog">
          {Array.from({ length: 2 }).map((_, copia) => (
            <span key={copia} className="flex items-center gap-10">
              <span>Tu negocio</span>
              <span className="text-gold">✦</span>
              <span>Tus servicios</span>
              <span className="text-gold">✦</span>
              <span>Tu ubicación</span>
              <span className="text-gold">✦</span>
              <span>Tu WhatsApp</span>
              <span className="text-gold">✦</span>
              <span>Más clientes</span>
              <span className="text-gold">✦</span>
              <span>Sin cuotas</span>
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}