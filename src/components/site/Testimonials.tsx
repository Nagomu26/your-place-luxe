import { Reveal } from "./Reveal";

const TESTIMONIOS = [
  {
    texto: "El mejor trato de toda la zona. Mi negocio de confianza desde el primer día.",
    autor: "Carlos M.",
  },
  {
    texto: "Puntual, cercano y un trato impecable. No cambio este negocio por nada.",
    autor: "Antonio R.",
  },
  {
    texto: "Cada vez que salgo de aquí me siento mejor de lo que entré. Servicio y calidad top.",
    autor: "Manuel P.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-coal">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Lo que dicen de nosotros
          </p>
          <h2 className="font-display text-5xl text-ivory sm:text-6xl">Opiniones</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <Reveal key={t.autor} delay={i * 80}>
              <figure className="relative h-full border border-line bg-panel p-8 transition-all duration-300 hover:border-gold/40">
                <div className="text-goldmetal mb-4 text-4xl leading-none" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="font-display text-2xl italic leading-relaxed text-ivory">
                  {t.texto}
                </blockquote>
                <figcaption className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                  {t.autor}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}