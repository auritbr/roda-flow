import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { CulturalBackdrop } from "@/components/site/CulturalBackdrop";
import { ContributionCard, ImpactParagraphs, ImpactPhoto, ImpactSection, ImpactWords } from "@/components/impact/Elements";
import * as content from "@/components/impact/content";
import { BookOpen, CircleDot, Drama, Film, Footprints, Heart, HeartHandshake, Music, ShieldCheck, Sparkles, Sprout, Trophy, Users, Accessibility, HandHeart } from "lucide-react";

export const Route = createFileRoute("/impacto-social")({
  head: () => ({ meta: [
    { title: "Impacto Social — Motirô | Cultura, esporte e educação" },
    { name: "description", content: "Conheça as contribuições da Motirô para a formação humana, a inclusão e a participação comunitária, com números institucionais contextualizados." },
    { property: "og:title", content: "Impacto Social — Motirô" },
    { property: "og:description", content: "Cultura, esporte, educação e inclusão: oportunidades construídas na trajetória da Motirô em José de Freitas." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ImpactoSocial,
});

const container = "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const icons = [ShieldCheck, Heart, Music, BookOpen, Footprints, Trophy, Accessibility, Users, HeartHandshake, CircleDot, Sprout, Sparkles];
const figureTones = ["bg-primary text-primary-foreground", "bg-vermelho text-vermelho-foreground", "bg-ouro text-ouro-foreground"];
function ImpactoSocial() {
  return <>
    <InternalHero compact variant="vermelho" pattern="ginga" eyebrow="Impacto social" title="Cultura, esporte e educação que ampliam oportunidades" description="O trabalho da Motirô vai além da realização de oficinas e treinamentos. Sua atuação contribui para o desenvolvimento humano, a participação cultural, a convivência comunitária e a criação de novas oportunidades." image="/images/quem-somos/capoeira.jpg" imageAlt="Participantes em uma roda coletiva de capoeira" />

    <ImpactSection>
      <CulturalBackdrop />
      <div className={container}>
        <SectionTitle center eyebrow="Nossa contribuição" title="Transformação que acontece no cotidiano" />
        <ImpactParagraphs items={content.introduction} className="mx-auto mt-6 max-w-3xl text-center" />
      </div>
    </ImpactSection>

    <ImpactSection className="bg-muted/40">
      <div className={container}>
        <SectionTitle center eyebrow="Impactos da atuação" title="Desenvolvimento, pertencimento e participação" description="As ações da Motirô articulam diferentes dimensões da formação humana, cultural, esportiva e comunitária." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {content.contributions.map((item, index) => <ContributionCard key={item.title} {...item} icon={icons[index] ?? CircleDot} index={index} />)}
        </div>
      </div>
    </ImpactSection>

    <ImpactSection>
      <CulturalBackdrop variant="connections" />
      <div className={container}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div className="order-2 lg:order-1"><SectionTitle eyebrow="Formação e futuro" title="Crianças, adolescentes e jovens no centro da trajetória" /><ImpactParagraphs items={content.youth} className="mt-6" /></div>
          <div className="order-1 lg:order-2"><ImpactPhoto src="/images/projetos/oficina-leitura.jpg" alt="Crianças participando de uma atividade de leitura" /></div>
        </div>
      </div>
    </ImpactSection>

    <ImpactSection className="bg-verde/5">
      <div className={container}>
        <div className="mx-auto max-w-4xl"><SectionTitle center eyebrow="Inclusão" title="Participação com respeito às diferenças" /><ImpactParagraphs items={content.inclusion} className="mx-auto mt-6 max-w-3xl text-center" /></div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[{ title: "Participação", icon: Users }, { title: "Respeito", icon: Heart }, { title: "Convivência", icon: HandHeart }, { title: "Inclusão", icon: Accessibility }].map(({ title, icon: Icon }) => <div key={title} className="text-center"><Icon className="mx-auto size-6 text-verde" strokeWidth={1.6} aria-hidden="true" /><h3 className="mt-3 font-display text-sm font-bold">{title}</h3></div>)}
        </div>
      </div>
    </ImpactSection>

    <ImpactSection className="bg-vermelho text-vermelho-foreground">
      <CulturalBackdrop variant="connections" />
      <div className={container}>
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow text-ouro">Cultura e cidadania</div>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-4xl">Expressão, identidade e participação na vida coletiva</h2>
          <ImpactParagraphs items={content.citizenship} className="mx-auto mt-6 max-w-3xl text-vermelho-foreground/90" />
        </div>
        <div className="mt-8"><ImpactWords inverse items={[{ title: "Capoeira", icon: Footprints }, { title: "Teatro", icon: Drama }, { title: "Leitura", icon: BookOpen }, { title: "Cinema", icon: Film }, { title: "Expressão cultural", icon: Music }]} /></div>
      </div>
    </ImpactSection>

    <ImpactSection>
      <div className={container}>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr]">
          <ImpactPhoto src="/images/projetos/capoeira-motiro.jpg" alt="Praticantes jogando capoeira em uma roda acompanhada por participantes" />
          <div><SectionTitle eyebrow="Esporte e desenvolvimento" title="Formação humana e desempenho podem caminhar juntos" /><ImpactParagraphs items={content.sport} className="mt-6" /></div>
        </div>
      </div>
    </ImpactSection>

    <ImpactSection className="bg-muted/40">
      <div className={container}>
        <SectionTitle center eyebrow="Números e resultados institucionais" title="O alcance de uma trajetória construída ao longo do tempo" description="Os números ajudam a demonstrar o alcance da atuação da Motirô, mas precisam ser compreendidos de acordo com o período e o tipo de atendimento contabilizado." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {content.impactFigures.map((figure, index) => <article key={figure.scope} className={`relative overflow-hidden rounded-2xl p-7 ${figureTones[index]}`}>
            <svg className="pointer-events-none absolute -right-8 -top-8 size-36 opacity-20" viewBox="0 0 140 140" aria-hidden="true"><path d="M20 112 A55 55 0 1 1 119 38" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M35 103 A38 38 0 1 1 102 48" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            <div className="relative"><p className="text-xs font-semibold leading-5">{figure.context}</p><p className="mt-5 font-display text-5xl font-extrabold leading-none">{figure.display}</p><h3 className="mt-5 font-display text-lg font-bold leading-snug">{figure.title}</h3><p className="mt-4 text-sm leading-6 opacity-90">{figure.text}</p></div>
          </article>)}
        </div>
      </div>
    </ImpactSection>

    <ImpactSection>
      <CulturalBackdrop />
      <div className={container}>
        <SectionTitle center eyebrow="Impacto que continua" title="Cada oportunidade pode abrir um novo caminho" description="O impacto da Motirô é construído no encontro entre cultura, esporte, educação, inclusão e comunidade. Cada atividade pode fortalecer vínculos, revelar capacidades e criar novas possibilidades de participação e desenvolvimento." />
        <div className="mt-7"><ImpactWords items={["Cultura", "Educação", "Esporte", "Inclusão", "Comunidade", "Cidadania"].map((title) => ({ title }))} /></div>
      </div>
    </ImpactSection>
    <FinalCta variant="vermelho" eyebrow="Faça parte dessa história" title="Conheça de perto o trabalho que transforma oportunidades em caminhos" description="Acompanhe os projetos da Motirô, conheça suas ações e descubra como cultura, esporte e educação fazem parte dessa trajetória." buttons={[{ label: "Conheça os projetos", to: "/projetos" }, { label: "Fale conosco", to: "/contato", variant: "outline" }]} />
  </>;
}