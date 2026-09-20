import { Reveal } from "./Reveal";

const IMAGENES = [
  { src: "img/hero-cut.jpg", alt: "Tu negocio en plena faena" },
  { src: "img/chairs.jpg", alt: "Tu espacio, a la vista de todos" },
  { src: "img/beard.jpg", alt: "Arreglo de barba con detalle" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-noir">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Nuestro trabajo
          </p>
          <h2 className="font-display text-5xl text-ivory sm:text-6xl">Galería</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {IMAGENES.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <div className="group relative overflow-hidden border border-line bg-panel transition-all duration-500 hover:border-gold/40">
                <div className="gold-rule absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true"></div>
                <div className="gold-rule absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true"></div>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-72 w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <p className="mt-4 px-4 pb-4 font-display text-sm italic text-fog transition-colors duration-300 group-hover:text-goldlight">
                  {img.alt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}