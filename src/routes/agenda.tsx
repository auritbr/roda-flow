import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { AgendaCalendar } from "@/components/agenda/AgendaCalendar";
export const Route = createFileRoute("/agenda")({
  head: () => ({ meta: [
    { title: "Agenda — Motirô" },
    { name: "description", content: "Acompanhe a programação cultural, esportiva e comunitária da Motirô em José de Freitas, Piauí." },
    { property: "og:title", content: "Agenda — Motirô" },
    { property: "og:description", content: "Eventos, oficinas e atividades da Motirô em um calendário mensal." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AgendaPage,
});
function AgendaPage() {
  return <><InternalHero eyebrow="Agenda" title="Cultura, esporte e comunidade em movimento" description="Acompanhe eventos, apresentações, graduações, oficinas, sessões de cinema, campeonatos e outras atividades da Motirô." image="/images/projetos/capoeira-motiro.jpg" imageAlt="Roda de capoeira" pattern="encontro" compact />
    <section className="px-4 py-10 sm:px-6"><SectionTitle eyebrow="Próximas atividades" title="Veja o que está acontecendo na Motirô" description="Consulte o calendário, navegue entre os meses e selecione uma atividade para visualizar suas informações." center /></section><AgendaCalendar /></>;
}