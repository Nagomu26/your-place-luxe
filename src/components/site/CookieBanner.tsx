import { useState } from "react";
import type { LegalDocId } from "@/lib/legal";

const STORAGE_KEY = "your-place-luxe-cookies-v1";

interface CookieBannerProps {
  onOpenLegal: (docId: LegalDocId) => void;
}

export function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [aceptado, setAceptado] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  if (aceptado) return null;

  const aceptar = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Sin almacenamiento disponible: solo ocultamos el aviso durante la sesión.
    }
    setAceptado(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-lg border border-line bg-panel/95 p-5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.95)] backdrop-blur"
    >
      <p className="text-sm leading-relaxed text-fog">
        Este sitio usa únicamente cookies técnicas para funcionar. No empleamos cookies de
        seguimiento ni publicidad. Consulta nuestra{" "}
        <button
          type="button"
          onClick={() => onOpenLegal("cookies")}
          className="font-medium text-gold underline underline-offset-2 transition-colors hover:text-goldlight"
        >
          Política de cookies
        </button>
        .
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={aceptar}
          className="btn-sheen border border-gold/60 bg-gold/10 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-goldlight transition-colors hover:bg-gold hover:text-noir"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => onOpenLegal("cookies")}
          className="text-sm font-medium text-fog underline underline-offset-2 transition-colors hover:text-ivory"
        >
          Más información
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;