import { MapPin, Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import type { LegalDocId } from "@/lib/legal";

const LINKS_LEGALES: Array<{ id: LegalDocId; etiqueta: string }> = [
  { id: "aviso", etiqueta: "Aviso legal" },
  { id: "privacidad", etiqueta: "Política de privacidad" },
  { id: "terminos", etiqueta: "Términos y condiciones" },
  { id: "cookies", etiqueta: "Política de cookies" },
];

export function Footer({ onOpenLegal }: { onOpenLegal: (docId: LegalDocId) => void }) {
  return (
    <footer id="contacto" className="relative overflow-hidden border-t border-line bg-noir">
      <div className="gold-rule absolute inset-x-0 top-0 h-px" aria-hidden="true"></div>
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-3xl italic text-ivory">
              {CONFIG.logoNombre}{" "}
              <span className="text-goldmetal font-display text-base font-medium tracking-widest2">
                {CONFIG.logoAcento.toUpperCase()}
              </span>
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-fog">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" aria-hidden="true" />
              <span>
                {CONFIG.direccion}
                <br />
                {CONFIG.localidad}
              </span>
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Contacto
            </p>
            <p className="text-sm text-fog">
              Teléfono / WhatsApp:
              <br />
              <a
                href={`tel:${CONFIG.telefonoEnlace}`}
                className="mt-1 inline-flex items-center gap-2 font-medium text-ivory transition-colors hover:text-goldlight"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                {CONFIG.telefono}
              </a>
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Horario
            </p>
            <p className="space-y-2 text-sm leading-relaxed text-fog">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1 w-4 bg-gold/70"></span>
                Lunes a sábado: 10h–14h y 16h–21h
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-1 w-4 bg-gold/70"></span>
                Domingos y festivos: 9h–14h
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-7 sm:justify-start">
          {LINKS_LEGALES.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onOpenLegal(link.id)}
              className="text-xs text-fog/90 underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              {link.etiqueta}
            </button>
          ))}
        </div>

        <div className="mt-7 flex flex-col justify-between gap-2 border-t border-line pt-7 text-xs text-fog/80 sm:flex-row">
          <p>© {new Date().getFullYear()} {CONFIG.nombre}. Todos los derechos reservados.</p>
          <p>
            {CONFIG.nombre} · {CONFIG.direccion} · {CONFIG.ciudad}
          </p>
        </div>
      </div>
    </footer>
  );
}