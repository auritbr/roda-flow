import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { ActivityTags, InformationCard, MovementMark, Paragraphs } from "@/components/projects/OverviewElements";
import { civicThemes, programInfo, programParagraphs } from "@/components/projects/overview-content";
import { ProgramReach } from "@/components/projects/ProgramReach";
import { Button } from "@/components/ui/button";
import { CompactProjectCard } from "@/components/projects/CompactProjectCard";
import { otherInitiatives, programActivities } from "@/components/projects/activities";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { FinalCta } from "@/components/site/FinalCta";
import { ArrowRight, Footprints, CircleUserRound, HeartHandshake, MessagesSquare, ShieldCheck, Sparkles, Target, Users } from "lucide-react";

const title = "Projetos e iniciativas — Motirô";
const description = "Conheça Além da Ginga, Capoeira Motirô e as iniciativas de cultura, esporte, educação e formação cidadã da Motirô.";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

const infoIcons = [Users, Sparkles, Target, HeartHandshake];
const civicIcons = [MessagesSquare, CircleUserRound, ShieldCheck, HeartHandshake];

function Projetos() {
  return (
    <>
      <InternalHero
        eyebrow="Projetos e iniciativas"
        title="Cultura, esporte e educação em movimento"
        description="A Motirô desenvolve projetos e atividades que conectam capoeira, artes, leitura, audiovisual, esporte, formação cidadã e inclusão social, ampliando oportunidades de aprendizagem, convivência e participação comunitária."
        image="/images/projetos/capoeira-motiro.jpg"
        imageAlt="Atividade cultural coletiva"
        variant="laranja"
        pattern="ginga"
      />

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="eyebrow text-vermelho">Nossa atuação</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold relative inline-block">
            Diferentes caminhos, um mesmo propósito
            <svg className="absolute -bottom-3 left-0 right-0 mx-auto h-3 w-40" viewBox="0 0 160 12" aria-hidden>
              <path d="M2 8 Q 40 2 80 8 T 158 6" fill="none" stroke="var(--ouro)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A atuação da Motirô reúne diferentes linguagens e experiências que se complementam. A partir de uma trajetória iniciada com a capoeira, a instituição ampliou progressivamente suas ações, construindo oportunidades de formação cultural, esportiva, educativa e social para a comunidade.
          </p>
        </div>

      </section>

      <section className="relative overflow-hidden bg-ouro/10 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
            <div className="max-w-2xl">
              <SectionTitle eyebrow="Programa abrangente" title="Além da Ginga" />
              <div className="mt-5"><Paragraphs paragraphs={programParagraphs} /></div>
              <p className="mt-5 border-l-2 border-ouro pl-4 text-sm leading-relaxed text-foreground">O Além da Ginga está associado à trajetória iniciada por volta do ano 2000 e à ampliação progressiva do trabalho comunitário da Motirô.</p>
              <Button asChild className="mt-5 rounded-full"><Link to="/projetos/$slug" params={{ slug: "alem-da-ginga" }}>Conhecer Além da Ginga<ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className="relative">
              <div className="relative">
                <ProjectImage src="/images/projetos/alem-da-ginga.jpg" alt="Capoeira e musicalidade em encontro cultural coletivo" className="aspect-[4/3] max-h-80 w-full rounded-2xl object-cover" icon={Users} />
                <MovementMark className="absolute -bottom-4 right-5 h-14 w-28 text-vermelho" />
              </div>
              <div className="mt-6 text-muted-foreground [&_li]:border-border [&_li]:bg-card/60 [&_li]:py-0.5 [&_li]:text-[11px]"><ActivityTags items={["Capoeira", "Teatro", "Leitura", "Cinema", "Dança", "Formação cidadã"]} /></div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{programInfo.map((info, i) => <InformationCard key={info.title} {...info} icon={infoIcons[i]} />)}</div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="ml-1 border-l-2 border-ouro/50 pl-5 sm:ml-4 sm:pl-8 lg:ml-8 lg:pl-10">
            <div className="eyebrow text-laranja">Dentro do Além da Ginga</div>
            <h3 className="mt-2 font-display text-2xl font-bold md:text-[1.7rem]">Projetos e atividades que integram o programa</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">O Além da Ginga reúne diferentes linguagens culturais, educativas e esportivas desenvolvidas pela Motirô, permitindo que os participantes encontrem diferentes formas de aprender, conviver e desenvolver suas capacidades.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{programActivities.map(item => <CompactProjectCard key={item.key} item={item} />)}</div>
          </div>
        </div>
      </section>

      <ProgramReach overview />

      <section className="py-16 md:py-20" aria-labelledby="other-initiatives">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="eyebrow text-vermelho">Outras iniciativas</div>
            <h2 id="other-initiatives" className="mt-2 font-display text-2xl font-bold md:text-3xl">Projetos com identidade própria</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Além das ações reunidas no Além da Ginga, a Motirô também desenvolve outras iniciativas com organização e propostas próprias.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">{otherInitiatives.map(item => <CompactProjectCard key={item.key} item={item} />)}</div>

          <div className="mt-12 grid gap-6 border-y border-border py-7 md:grid-cols-2">
            <div className="flex gap-4"><Footprints className="mt-1 size-7 shrink-0 text-laranja" aria-hidden="true" /><div><h3 className="font-display text-xl font-bold">Da iniciação à formação esportiva</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Além da dimensão cultural e educativa, o Capoeira Motirô desenvolve a formação esportiva dos praticantes. Os atletas podem avançar da iniciação ao treinamento competitivo, participando de graduações, festivais e campeonatos em diferentes níveis.</p></div></div>
            <div className="flex flex-col items-start justify-center gap-4 border-l-2 border-ouro pl-5"><p className="text-sm font-medium leading-relaxed">Atletas formados ou preparados no ambiente da Motirô já representaram José de Freitas e o Piauí em competições locais, estaduais, nacionais e internacionais.</p><Link to="/projetos/formacao-esportiva" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4">Formação Esportiva e Conquistas<ArrowRight className="size-4" aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-vermelho/5 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle center eyebrow="Formação cidadã" title="Palestras e encontros formativos" />
          <div className="mx-auto mt-7 max-w-3xl text-center">
            <Paragraphs paragraphs={["A Motirô também realiza ou articula atividades educativas voltadas à discussão de temas relevantes para a comunidade.", "Esses encontros ampliam o conhecimento dos participantes e estimulam a reflexão sobre questões presentes em suas realidades, fortalecendo a cidadania, a convivência e a participação social."]} />
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{civicThemes.map((theme, i) => <InformationCard key={theme.title} {...theme} icon={civicIcons[i]} />)}</div>
        </div>
      </section>

      <FinalCta
        variant="laranja"
        eyebrow="Cultura que cria caminhos"
        title="Cada atividade pode abrir uma nova possibilidade"
        description="A Motirô transforma cultura, esporte, educação e inclusão em oportunidades de aprendizagem, convivência e desenvolvimento. Conheça nossas ações e descubra diferentes formas de se aproximar desse trabalho."
        image="/images/projetos/capoeira-motiro.jpg"
        imageAlt="Movimento de Capoeira em atividade coletiva"
        buttons={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Conheça nossa trajetória", to: "/quem-somos", variant: "outline" },
        ]}
      />
    </>
  );
}
