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
    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6 md:grid-rows-2">{previewPhotos.map((photo, i) => <div key={photo.src} className={`overflow-hidden rounded-xl ${i === 0 ? "md:col-span-3 md:row-span-2" : i === 5 ? "md:col-span-2" : ""} ${i >= 4 ? "hidden md:block" : ""}`}><img src={photo.src} alt={photo.alt} loading="lazy" className={`h-full w-full object-cover ${i === 0 ? "aspect-[4/3] md:aspect-auto" : i === 5 ? "aspect-[4/3] md:aspect-[8/3]" : "aspect-[4/3]"}`} /></div>)}</div>
    <div className="mt-6 text-center"><Button asChild variant="outline" className="rounded-full"><Link to="/galeria">Ver galeria <ArrowRight /></Link></Button></div>
  </div></section>;
}
export function HomePartnerships() {
  return <section className="relative overflow-hidden bg-muted/50 py-12 md:py-16"><CulturalBackdrop variant="connections" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionTitle eyebrow="Compromisso institucional" title="Parcerias e transparência" description="A continuidade das ações da Motirô também é construída por meio da articulação com parceiros, mecanismos de apoio e uma gestão comprometida com a organização e o acesso às informações institucionais." center />

    <div className="mt-8 text-center"><Button asChild className="h-auto whitespace-normal rounded-full px-5 py-3"><Link to="/quem-somos/parcerias-e-transparencia">Ver Parcerias e Transparência <ArrowRight className="shrink-0" /></Link></Button></div>
  </div></section>;
}
export function HomeTrajectory() {
  const milestones = [
    { title: "Mais de duas décadas", text: "Trajetória construída em José de Freitas.", accent: "text-primary" },
    { title: "Desde 2017", text: "Pontão de Cultura reconhecido pelo Ministério da Cultura.", accent: "text-vermelho" },
    { title: "Diversas linguagens", text: "Cultura, esporte, educação e inclusão em uma atuação integrada.", accent: "text-verde" },
  ];
  return <section className="relative overflow-hidden bg-muted/40 py-12 md:py-16"><CulturalBackdrop variant="connections" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionTitle eyebrow="Uma trajetória em movimento" title="Mais de duas décadas criando oportunidades" center />
    <div className="mx-auto mt-5 max-w-3xl space-y-3 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
      <p>Desde o início de sua trajetória, por volta do ano 2000, a Motirô ampliou progressivamente sua atuação e construiu um trabalho que conecta cultura, esporte, educação, inclusão e participação comunitária.</p>
      <p>Ao longo desse caminho, crianças, adolescentes, jovens, famílias, educadores, artistas, atletas e diferentes integrantes da comunidade passaram a fazer parte dessa história.</p>
    </div>
    <div className="mt-8 grid gap-6 text-center md:grid-cols-3">{milestones.map(item => <div key={item.title} className="px-4"><h3 className={`font-display text-2xl font-extrabold ${item.accent}`}>{item.title}</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div>
  </div></section>;
}
export function HomeImpact() {
  return <section className="py-12 md:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionTitle eyebrow="Impacto social" title="Oportunidades que se transformam em caminhos" description="O trabalho da Motirô contribui para ampliar o acesso à cultura, ao esporte e à educação, fortalecer vínculos comunitários, estimular a participação e criar oportunidades de desenvolvimento." center />
    <ul className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-4 text-center sm:grid-cols-4">{["Formação", "Pertencimento", "Participação", "Inclusão"].map((item, index) => <li key={item} className={`font-display text-sm font-bold ${["text-primary", "text-vermelho", "text-verde", "text-laranja"][index]}`}>{item}</li>)}</ul>
    <div className="mt-6 text-center"><Button asChild className="rounded-full"><Link to="/impacto-social">Conheça nosso impacto <ArrowRight /></Link></Button></div>
  </div></section>;
}
