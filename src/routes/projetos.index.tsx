import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { ActivityTags, InformationCard, MovementMark, Paragraphs } from "@/components/projects/OverviewElements";
import { civicThemes, programInfo, programParagraphs } from "@/components/projects/overview-content";
import { ProgramReach } from "@/components/projects/ProgramReach";
import { Button } from "@/components/ui/button";
import { ActivityList } from "@/components/projects/ActivityList";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { FinalCta } from "@/components/site/FinalCta";
import { ArrowRight, CircleUserRound, HeartHandshake, MessagesSquare, ShieldCheck, Sparkles, Target, Users } from "lucide-react";

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

      <section className="relative overflow-hidden bg-ouro/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
            <div>
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
              <div className="mt-7 text-primary"><ActivityTags items={["Capoeira", "Teatro", "Leitura", "Cinema", "Dança", "Formação cidadã"]} /></div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{programInfo.map((info, i) => <InformationCard key={info.title} {...info} icon={infoIcons[i]} />)}</div>
        </div>
      </section>

      <ProgramReach overview />

      <ActivityList />

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
