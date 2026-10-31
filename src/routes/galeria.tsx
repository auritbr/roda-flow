import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { eventGalleries, galleryYears, galleriesForYear } from "@/components/site/gallery-data";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=2000&q=80";
export const Route = createFileRoute("/galeria")({
  head: () => ({ meta: [
    { title: "Galeria Motirô — Registros e encontros" },
    { name: "description", content: "Registros fotográficos de rodas, oficinas, apresentações e encontros da Motirô, organizados por ano e galeria." },
    { property: "og:title", content: "Galeria Motirô — Registros e encontros" },
    { property: "og:description", content: "Registros fotográficos de rodas, oficinas, apresentações e encontros da Motirô, organizados por ano e galeria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: heroImage },
    { name: "twitter:image", content: heroImage },
  ] }),
  component: Galeria,
});

function Galeria() {
  const [year, setYear] = useState(galleryYears[0] ?? "");
  const [lightbox, setLightbox] = useState<{ gallery: (typeof eventGalleries)[number]; index: number } | null>(null);
  const items = galleriesForYear(year);
  const photo = lightbox?.gallery.images[lightbox.index];
  const navigate = (offset: number) => setLightbox((current) => current ? { ...current, index: (current.index + offset + current.gallery.images.length) % current.gallery.images.length } : null);
  return <>
    <InternalHero eyebrow="Registros" title="Galeria" description="Imagens de rodas, oficinas, apresentações, encontros e atividades comunitárias, organizadas por ano." image={heroImage} imageAlt="Roda de Capoeira coletiva" variant="verde" />
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div aria-label="Ano da galeria" className="flex flex-wrap gap-2 border-b border-border">
          {galleryYears.map((y) => <Button key={y} variant="ghost" aria-pressed={year === y} onClick={() => { setYear(y); setLightbox(null); }} className={`relative h-auto rounded-none px-4 py-2.5 font-semibold ${year === y ? "text-primary" : "text-muted-foreground"}`}>{y}{year === y && <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-ouro" />}</Button>)}
        </div>
        <div className="mt-10 space-y-12" aria-live="polite">
          {items.map((gallery) => <section key={gallery.title} aria-label={gallery.title}>
            <h3 className="font-display text-xl font-bold leading-snug md:text-2xl">{gallery.title}</h3>
            <svg className="mt-2 h-4 w-16 text-vermelho" viewBox="0 0 64 16" aria-hidden="true"><path d="M2 12 Q24 0 62 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <div className="mt-5 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {gallery.images.map((image, index) => <Button key={image.src + index} variant="ghost" onClick={() => setLightbox({ gallery, index })} className="group block aspect-[4/3] h-auto w-full overflow-hidden rounded-xl border border-border p-0" aria-label={`Ampliar foto ${index + 1} de ${gallery.title}`}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]" loading="lazy" />
              </Button>)}
            </div>
          </section>)}
        </div>
      </div>
    </section>
    <Dialog.Root open={lightbox !== null} onOpenChange={(open) => { if (!open) setLightbox(null); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-grafite/95" />
        <Dialog.Content className="fixed inset-0 z-[81] flex items-center justify-center p-4 text-primary-foreground outline-none" aria-describedby={undefined} onKeyDown={(e) => { if (e.key === "ArrowLeft") { e.preventDefault(); navigate(-1); } if (e.key === "ArrowRight") { e.preventDefault(); navigate(1); } }}>
          <Dialog.Close asChild><Button variant="ghost" size="icon" className="absolute right-4 top-4 rounded-full text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" aria-label="Fechar"><X /></Button></Dialog.Close>
          {lightbox && photo && <figure className="w-full max-w-5xl">
            <img src={photo.src} alt={photo.alt} className="max-h-[70vh] w-full object-contain" />
            <figcaption className="mt-4 text-center">
              <Dialog.Title className="font-display text-lg font-bold">{lightbox.gallery.title}</Dialog.Title>
              {photo.caption && <p className="mt-2 text-sm text-primary-foreground/80">{photo.caption}</p>}
              <div className="mt-3 flex items-center justify-center gap-4">
                <Button variant="ghost" size="icon" aria-label="Anterior" onClick={() => navigate(-1)} className="rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronLeft /></Button>
                <span className="text-sm">{lightbox.index + 1} / {lightbox.gallery.images.length}</span>
                <Button variant="ghost" size="icon" aria-label="Próxima" onClick={() => navigate(1)} className="rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronRight /></Button>
              </div>
            </figcaption>
          </figure>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </>;
}
