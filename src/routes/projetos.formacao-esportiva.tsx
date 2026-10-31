import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { Button } from "@/components/ui/button";
import { Paragraphs, CompactCard, AboutPhoto, MovementMark } from "@/components/about/Elements";
import { InitiativeGallery } from "@/components/projects/InitiativeGallery";
import { sportContent as content, competitionScopes, formationValues, officialSportResults } from "@/components/projects/sport-content";
import { ArrowRight, ShieldCheck, Users, HeartHandshake, Target, Flag, Trophy } from "lucide-react";
import sportHero from "@/assets/gallery-capoeira-4.jpg";

export const Route = createFileRoute("/projetos/formacao-esportiva")({
  head: () => ({ meta: [
    { title: "Formação Esportiva e Conquistas — Motirô" },
    { name: "description", content: content.hero },
    { property: "og:title", content: "Formação Esportiva e Conquistas — Motirô" },
    { property: "og:description", content: content.hero },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SportsFormation,
});
const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
function SportsFormation() {
  return <>
    <InternalHero eyebrow="Formação esportiva" title="Da iniciação às competições" description={content.hero} image={sportHero} imageAlt="Imagem fictícia provisória de treinamento de capoeira" variant="azul" />
    <section className="py-16"><div className={container}><SectionTitle center eyebrow="Formação e desenvolvimento" title="Esporte como caminho de aprendizagem e oportunidade" /><Paragraphs items={content.introduction} className="mx-auto mt-6 max-w-3xl text-center" /></div></section>
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground"><MovementMark className="absolute -right-4 bottom-4 opacity-30" /><div className={container}><div className="mx-auto max-w-3xl text-center"><div className="eyebrow text-ouro">Trajetória</div><h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">Representando José de Freitas e o Piauí</h2><p className="mt-6 leading-relaxed text-primary-foreground/90">{content.trajectory}</p></div><div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">{competitionScopes.map(scope => <div key={scope} className="text-center"><Flag className="mx-auto mb-3 size-6 text-ouro" aria-hidden="true" /><h3 className="font-display text-xl font-bold">{scope}</h3></div>)}</div></div></section>
    <section className="py-16"><div className={container}><SectionTitle center eyebrow="Da base ao desenvolvimento esportivo" title="Uma formação que vai além da competição" /><Paragraphs items={content.formation} className="mx-auto mt-6 max-w-3xl text-center" /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{formationValues.map((title, i) => <CompactCard key={title} title={title} index={i} icon={[ShieldCheck, HeartHandshake, Users, Target, Users, Trophy][i] ?? Target} />)}</div></div></section>
    <section className="bg-muted/40 py-16"><div className={`${container} grid items-center gap-10 md:grid-cols-[3fr_2fr]`}><div><SectionTitle eyebrow="Capoeira e esporte" title="Da iniciação ao treinamento competitivo" /><Paragraphs items={content.capoeira} className="mt-6" /><Button asChild className="mt-6 h-auto whitespace-normal rounded-full"><Link to="/projetos/$slug" params={{ slug: "capoeira-motiro" }}>Conhecer Capoeira Motirô<ArrowRight /></Link></Button></div><AboutPhoto src={sportHero} alt="Imagem fictícia provisória de treinamento de capoeira" /></div></section>
    <section className="py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionTitle center eyebrow="Outras modalidades" title="Handebol Motirô" /><Paragraphs items={content.handball} className="mt-6" /><div className="mt-6 text-center"><Button asChild className="h-auto whitespace-normal rounded-full"><Link to="/projetos/$slug" params={{ slug: "handebol-motiro" }}>Conhecer Handebol Motirô<ArrowRight /></Link></Button></div></div></section>
    <section className="bg-muted/40 py-16"><div className={container}><SectionTitle center eyebrow="Resultados esportivos" title="Conquistas que serão registradas ao longo das temporadas" description={content.results} />
      {officialSportResults.length > 0 ? <div className="mt-10 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr>{["Ano", "Competição", "Modalidade", "Categoria", "Resultado"].map(label => <th key={label} className="border-b border-border p-3 font-semibold">{label}</th>)}</tr></thead><tbody>{officialSportResults.map((result, i) => <tr key={i}>{[result.year, result.competition, result.modality, result.category, result.result].map((value, j) => <td key={j} className="border-b border-border p-3">{value}</td>)}</tr>)}</tbody></table></div> : <div className="mx-auto mt-10 max-w-3xl text-center"><Trophy className="mx-auto mb-4 size-8 text-ouro" strokeWidth={1.5} aria-hidden="true" /><p className="leading-relaxed text-muted-foreground">Os registros esportivos oficiais serão publicados aqui após a confirmação das informações.</p></div>}
    </div></section>
    <InitiativeGallery slug="formacao-esportiva" />
    <section className="py-16"><div className={container}><SectionTitle center eyebrow="Esporte e transformação" title="Desempenho e desenvolvimento humano podem caminhar juntos" /><Paragraphs items={content.impact} className="mx-auto mt-6 max-w-3xl" /></div></section>
    <FinalCta variant="azul" eyebrow="Conheça essa trajetória" title="O esporte também abre caminhos" description="Acompanhe as ações esportivas da Motirô, conheça seus projetos e descubra como formação, cultura e desenvolvimento caminham juntos." buttons={[{ label: "Conheça os projetos", to: "/projetos" }, { label: "Fale conosco", to: "/contato" }]} />
  </>;
}