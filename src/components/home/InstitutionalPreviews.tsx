import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/InternalHero";
import { CulturalBackdrop } from "@/components/site/CulturalBackdrop";
import { placeholderGalleries } from "@/components/projects/gallery-placeholders";
import { officialEvents, upcomingEvents, type AgendaEvent } from "@/components/agenda/content";
import { EventCard, EventDetails } from "@/components/agenda/EventViews";

export function HomeAgenda() {
  const [today, setToday] = useState("2026-10-31");
  const [selected, setSelected] = useState<AgendaEvent | null>(null);
  useEffect(() => setToday(format(new Date(), "yyyy-MM-dd")), []);
  const next = upcomingEvents(officialEvents, today);
  return <section className="relative overflow-hidden bg-muted/40 py-12 md:py-16"><CulturalBackdrop /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionTitle eyebrow="Agenda" title="Próximas atividades da Motirô" description="Acompanhe eventos, apresentações, oficinas, graduações, sessões de cinema, campeonatos e outras atividades." center />
    {next.length > 0 ? <div className="mt-6 grid gap-4 lg:grid-cols-3">{next.map(event => <EventCard key={event.id} event={event} onSelect={setSelected} />)}</div> : <p className="mt-6 text-center text-muted-foreground">A programação será atualizada em breve.</p>}
    <div className="mt-6 text-center"><Button asChild className="rounded-full"><Link to="/agenda">{next.length ? "Ver agenda completa" : "Ver agenda"}<ArrowRight /></Link></Button></div>
  </div><EventDetails event={selected} onClose={() => setSelected(null)} /></section>;
}
// Authorized fictional photos remain separate from institutional gallery records.
const previewPhotos = (placeholderGalleries["alem-da-ginga"] ?? []).slice(0, 6);
export function HomeGallery() {
  return <section className="py-12 md:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionTitle eyebrow="Registros" title="Momentos que fazem parte da nossa história" description="Rodas, oficinas, apresentações, encontros e atividades comunitárias registrados ao longo da trajetória da Motirô." center />
    <p className="mt-3 text-center text-xs text-muted-foreground">Imagens ilustrativas provisórias.</p>
    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6 md:grid-rows-2">{previewPhotos.map((photo, i) => <div key={photo.src} className={`overflow-hidden rounded-xl ${i === 0 ? "md:col-span-3 md:row-span-2" : i === 5 ? "md:col-span-2" : ""} ${i >= 4 ? "hidden md:block" : ""}`}><img src={photo.src} alt={photo.alt} loading="lazy" className={`h-full w-full object-cover ${i === 0 ? "aspect-[4/3] md:aspect-auto" : i === 5 ? "aspect-[4/3] md:aspect-[8/3]" : "aspect-[4/3]"}`} /></div>)}</div>
    <div className="mt-6 text-center"><Button asChild variant="outline" className="rounded-full"><Link to="/galeria">Ver galeria <ArrowRight /></Link></Button></div>
  </div></section>;
}
export function HomePartnerships() {
  return <section className="relative overflow-hidden bg-muted/50 py-12 md:py-16"><CulturalBackdrop variant="connections" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionTitle eyebrow="Compromisso institucional" title="Parcerias e transparência" description="A continuidade das ações da Motirô também é construída por meio da articulação com parceiros, mecanismos de apoio e uma gestão comprometida com a organização e o acesso às informações institucionais." center />
    <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12"><div><h3 className="font-display text-2xl font-bold text-primary">Parcerias</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Conheça mecanismos de apoio, articulações e instituições relacionadas à trajetória da Motirô.</p><p className="mt-4 text-sm font-semibold leading-7 text-primary">SIEC · FIA · Equatorial · Prefeitura de José de Freitas · Instituições parceiras</p></div><div><h3 className="font-display text-2xl font-bold text-vermelho">Transparência</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Acesse documentos, relatórios, informações sobre projetos apoiados, instrumentos de fomento e registros institucionais.</p><p className="mt-4 text-sm font-semibold leading-7 text-vermelho">Documentos · Relatórios · Projetos apoiados · Instrumentos de fomento</p></div></div>
    <div className="mt-8 text-center"><Button asChild className="h-auto whitespace-normal rounded-full px-5 py-3"><Link to="/quem-somos/parcerias-e-transparencia">Ver Parcerias e Transparência <ArrowRight className="shrink-0" /></Link></Button></div>
  </div></section>;
}