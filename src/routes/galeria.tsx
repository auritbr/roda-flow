import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { GALLERY } from "@/lib/site-data";
import { useMemo, useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Ponto de Cultura Capoeira" },
      { name: "description", content: "Registros fotográficos de rodas, oficinas, apresentações e encontros do Ponto de Cultura." },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  const years = useMemo(() => Array.from(new Set(GALLERY.map((g) => g.year))).sort((a, b) => b.localeCompare(a)), []);
  const [year, setYear] = useState(years[0]);
  const items = GALLERY.filter((g) => g.year === year);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  return (
    <>
      <InternalHero
        eyebrow="Registros"
        title="Galeria"
        description="Imagens de rodas, oficinas, apresentações, encontros e atividades comunitárias, organizadas por ano."
        image="https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Roda de Capoeira coletiva"
        variant="verde"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Year tabs */}
          <div role="tablist" aria-label="Ano da galeria" className="flex flex-wrap gap-2 border-b border-border">
            {years.map((y) => (
              <button
                key={y}
                role="tab"
                aria-selected={year === y}
                onClick={() => setYear(y)}
                className={`relative px-4 py-2.5 text-sm font-semibold transition ${year === y ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {y}
                {year === y && <span className="absolute inset-x-2 -bottom-px h-0.5 bg-ouro rounded-full" />}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g, i) => (
              <figure key={g.title + i} className="group">
                <div className="eyebrow text-vermelho">{g.category}</div>
                <h3 className="mt-1 font-display font-bold leading-snug">{g.title}</h3>
                <button
                  onClick={() => setLightbox(i)}
                  className="mt-3 block w-full aspect-[4/3] overflow-hidden rounded-xl border border-border focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Ampliar imagem: ${g.title}`}
                >
                  <img src={g.image} alt={g.alt} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                </button>
                <figcaption className="mt-2 text-sm text-muted-foreground">{g.caption}</figcaption>
                <div className="mt-1 text-xs text-muted-foreground/80">{g.date} · {g.credit}</div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div role="dialog" aria-modal="true" aria-label="Visualização da imagem" className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4">
          <button aria-label="Fechar" onClick={close} className="absolute top-4 right-4 text-white rounded-full p-2 hover:bg-white/10">
            <X className="h-6 w-6" />
          </button>
          <button aria-label="Anterior" onClick={prev} className="absolute left-4 md:left-8 text-white rounded-full p-2 hover:bg-white/10">
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button aria-label="Próxima" onClick={next} className="absolute right-4 md:right-8 text-white rounded-full p-2 hover:bg-white/10">
            <ChevronRight className="h-7 w-7" />
          </button>
          <figure className="max-w-5xl w-full">
            <img src={items[lightbox].image} alt={items[lightbox].alt} className="max-h-[75vh] w-full object-contain" />
            <figcaption className="mt-4 text-center text-white">
              <div className="font-display font-bold">{items[lightbox].title}</div>
              <div className="text-sm text-white/80">{items[lightbox].caption}</div>
              <div className="text-xs text-white/60 mt-1">{items[lightbox].date} · {items[lightbox].credit}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
