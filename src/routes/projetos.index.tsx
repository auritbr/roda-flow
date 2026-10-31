import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { ActivityTags, InformationCard, MovementMark, Paragraphs } from "@/components/projects/OverviewElements";
import { civicThemes, programInfo, programParagraphs, reachText } from "@/components/projects/overview-content";
import { ActivityList } from "@/components/projects/ActivityList";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { FinalCta } from "@/components/site/FinalCta";
import { BookOpen, CircleUserRound, Drama, Film, Footprints, HeartHandshake, MapPin, MessagesSquare, Music, ShieldCheck, Sparkles, Target, Users } from "lucide-react";

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

      <section className="bg-primary py-8 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-start sm:px-6 lg:px-8">
          <MapPin className="size-8 shrink-0 text-ouro" strokeWidth={1.5} aria-hidden="true" />
          <div><h2 className="font-display text-xl font-bold">Uma atuação presente em diferentes núcleos</h2><p className="mt-3 max-w-5xl text-sm leading-relaxed text-primary-foreground/90">{reachText}</p></div>
        </div>
      </section>

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

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionTitle center eyebrow="Uma atuação integrada" title="Cada atividade amplia as possibilidades de aprender e participar" description="Capoeira, teatro, leitura, cinema, dança, esporte, formação cidadã e iniciativas de inclusão fazem parte de uma atuação que reconhece diferentes interesses, capacidades e formas de participação. Essas experiências podem dialogar entre si, criando oportunidades mais amplas de aprendizagem, expressão, convivência e desenvolvimento humano." />
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-primary" aria-hidden="true">{[Footprints, Drama, BookOpen, Film, Music, MessagesSquare].map((Icon, i) => <div key={i} className="flex items-center gap-3"><Icon className="size-7" strokeWidth={1.5} />{i < 5 && <span className="h-px w-5 bg-ouro" />}</div>)}</div>
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
