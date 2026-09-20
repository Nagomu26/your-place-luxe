import { ArrowRight } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { SERVICIOS } from "@/data/services";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden border-y border-line bg-coal">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="glow-gold absolute right-0 top-0 rounded-full opacity-60 blur-3xl"
          style={{ width: "340px", height: "340px" }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Qué ofrecemos
          </p>
          <h2 className="font-display text-5xl text-ivory sm:text-6xl">Servicios</h2>
          <p className="mt-5 text-lg leading-relaxed text-fog">
            Cuatro formas de empezar con buen pie. Reserva la que
            necesites, sin compromiso.
          </p>
        </Reveal>

        <div className="border-t border-line">
          {SERVICIOS.map((servicio, i) => (
            <Reveal key={servicio.id} delay={i * 60}>
              <div className="group grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors duration-300 hover:bg-panel/50 sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-6">
                <span
                  className="font-display text-3xl italic text-gold/70 sm:col-span-1"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="sm:col-span-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-3xl text-ivory transition-colors duration-300 group-hover:text-goldlight">
                      {servicio.nombre}
                    </h3>
                    {servicio.destacado && (
                      <span className="inline-flex items-center gap-1.5 border border-gold/50 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-goldlight">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold"></span>
                        Más pedido
                      </span>
                    )}
                  </div>
                  <p className="mt-2 hidden max-w-md text-sm leading-relaxed text-fog sm:block">
                    {servicio.descripcion}
                  </p>
                </div>

                <p className="font-display text-4xl italic text-goldmetal sm:col-span-3 sm:text-right">
                  {servicio.precio} €
                </p>

                <div className="sm:col-span-2 sm:text-right">
                  <a
                    href="#reserva"
                    aria-label={`Reservar ${servicio.nombre}`}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-fog transition-colors duration-300 hover:text-gold"
                  >
                    Reservar
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-fog">
            ¿No tienes claro qué necesitas? Escríbenos por WhatsApp al{" "}
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="font-medium text-gold transition-colors hover:text-goldlight"
            >
              {CONFIG.telefono}
            </a>{" "}
            y te aconsejamos sin compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}