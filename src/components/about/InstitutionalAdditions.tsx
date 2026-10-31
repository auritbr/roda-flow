import portrait from "@/assets/team-portrait-man-wide.jpg";
import { SectionTitle } from "@/components/site/InternalHero";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Landmark } from "lucide-react";
import { MovementMark, Paragraphs } from "./Elements";
import { leadership, leadershipFacts, spaces, headquartersAddress, directionsUrl, headquartersPhotos } from "./additions-content";

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
export function LeadershipSection() {
  return <section className="relative overflow-hidden py-20"><div className={`${container} grid items-center gap-10 md:grid-cols-[2fr_3fr] lg:gap-16`}>
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-2xl bg-muted" data-image-status="fictional-placeholder"><img src={portrait} alt="Retrato fictício provisório para futura substituição pela fotografia de Aerton, Mestre Tingaúna" width={1200} height={650} loading="lazy" className="aspect-[4/5] w-full object-cover" /></div>
      <MovementMark className="absolute -bottom-5 right-4 text-ouro" />
    </div>
    <div><SectionTitle eyebrow="Liderança e representação" title="Uma trajetória conectada à cultura e ao esporte" /><Paragraphs items={leadership} className="mt-6" />
      <dl className="mt-8 grid gap-6 sm:grid-cols-2"><div><dt className="font-display text-xl font-bold text-primary">{leadershipFacts.fecapiTerms} mandatos</dt><dd className="mt-2 text-sm text-muted-foreground">Presidência da FECAPI</dd></div><div><dt className="font-display text-lg font-bold text-vermelho">Representação nacional</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{leadershipFacts.nationalRepresentation}</dd></div></dl>
    </div>
  </div></section>;
}
export function SpacesSection() {
  return <section className="py-20"><div className={container}>
    <SectionTitle center eyebrow="Presença no território" title="Sede e espaços de atuação" />
    <Paragraphs items={spaces} className="mx-auto mt-6 max-w-3xl" />
    <div className="mt-10 grid items-center gap-8 md:grid-cols-[3fr_2fr]">
      <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/40" data-image-status="awaiting-official-photos">
        {headquartersPhotos.length ? <div className="grid w-full gap-3 sm:grid-cols-2">{headquartersPhotos.map(photo => <img key={photo.src} {...photo} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />)}</div> : <><MovementMark className="absolute -left-4 bottom-4 h-32 w-64 text-ouro/40" /><Landmark className="size-14 text-primary/60" strokeWidth={1.2} aria-hidden="true" /><svg viewBox="0 0 200 200" className="absolute -right-8 -top-8 size-48 text-vermelho/20" aria-hidden="true"><circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 12" /></svg></>}
      </div>
      <div><MapPin className="mb-4 size-6 text-vermelho" aria-hidden="true" /><h3 className="font-display text-xl font-bold">Sede da Motirô</h3><address className="mt-4 not-italic leading-relaxed text-muted-foreground">{headquartersAddress.street}<br />{headquartersAddress.neighborhood}<br />{headquartersAddress.city}<br />CEP {headquartersAddress.postcode}</address><Button asChild className="mt-6 rounded-full"><a href={directionsUrl} target="_blank" rel="noopener noreferrer">Como chegar<Navigation aria-hidden="true" /></a></Button></div>
    </div>
  </div></section>;
}