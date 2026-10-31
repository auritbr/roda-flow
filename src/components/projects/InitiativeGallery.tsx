import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/InternalHero";
import { authorizedPhotos, galleryIndex, initiativeGalleries, type InitiativePhoto } from "./initiative-gallery";

export function InitiativeGallery({ slug, photos = initiativeGalleries[slug] ?? [] }: { slug: string; photos?: readonly InitiativePhoto[] }) {
  const records = authorizedPhotos(photos);
  const [index, setIndex] = useState<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const photo = index === null ? undefined : records[index];
  const navigate = (offset: number) => setIndex(current => current === null ? null : galleryIndex(current, offset, records.length));

  return <section className="py-16" aria-label="Galeria da iniciativa">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle center eyebrow="Registros" title="Galeria da iniciativa" />
      {records.length > 0 && <div className="mt-10 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {records.map((record, position) => <Button key={record.src + position} variant="ghost" onClick={() => setIndex(position)} aria-label={`Ampliar registro ${position + 1}`} className="group block aspect-[4/3] h-auto w-full overflow-hidden rounded-xl border border-border p-0">
          <img src={record.src} alt={record.alt} loading="lazy" className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]" />
        </Button>)}
      </div>}
    </div>
    <Dialog.Root open={photo !== undefined} onOpenChange={open => { if (!open) setIndex(null); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-grafite/95" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-[81] flex items-center justify-center p-4 text-primary-foreground outline-none" onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); navigate(event.key === "ArrowLeft" ? -1 : 1); }
        }} onTouchStart={event => {
          const touch = event.touches[0];
          touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
        }} onTouchEnd={event => {
          const touch = event.changedTouches[0];
          const start = touchStart.current;
          touchStart.current = null;
          if (!touch || !start) return;
          const dx = touch.clientX - start.x;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(touch.clientY - start.y)) navigate(dx < 0 ? 1 : -1);
        }}>
          <Dialog.Title className="sr-only">Galeria da iniciativa</Dialog.Title>
          <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Fechar" className="absolute right-4 top-4 rounded-full text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><X /></Button></Dialog.Close>
          {photo && <figure className="w-full max-w-5xl">
            <img src={photo.src} alt={photo.alt} className="max-h-[70vh] w-full object-contain" />
            {photo.caption && <figcaption className="mt-4 text-center text-sm">{photo.caption}</figcaption>}
            <div className="mt-4 flex items-center justify-center gap-4">
              <Button variant="ghost" size="icon" aria-label="Anterior" disabled={records.length < 2} onClick={() => navigate(-1)} className="rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronLeft /></Button>
              <span className="text-sm" aria-live="polite">{(index ?? 0) + 1} / {records.length}</span>
              <Button variant="ghost" size="icon" aria-label="Próxima" disabled={records.length < 2} onClick={() => navigate(1)} className="rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronRight /></Button>
            </div>
          </figure>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </section>;
}