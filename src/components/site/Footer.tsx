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
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
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

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Síguenos
            </p>
            <ul className="space-y-3 text-sm text-fog">
              {CONFIG.instagram && (
                <li>
                  <a
                    href={CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-goldlight"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                </li>
              )}
              {CONFIG.facebook && (
                <li>
                  <a
                    href={CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-goldlight"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                </li>
              )}
              {CONFIG.tiktok && (
                <li>
                  <a
                    href={CONFIG.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-goldlight"
                  >
                    <span className="font-bold text-gold">TT</span>
                    TikTok
                  </a>
                </li>
              )}
              {CONFIG.youtube && (
                <li>
                  <a
                    href={CONFIG.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-goldlight"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
                    </svg>
                    YouTube
                  </a>
                </li>
              )}
            </ul>
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