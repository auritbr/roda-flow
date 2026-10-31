import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { Button } from "@/components/ui/button";
import { ActivityTags, InformationCard, MovementMark, Paragraphs } from "@/components/projects/OverviewElements";
import { arts, capoeiraParagraphs, capoeiraTags, civicThemes, programInfo, programParagraphs, reachText, theatreLaunchText } from "@/components/projects/overview-content";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { FinalCta } from "@/components/site/FinalCta";
import { ArrowRight, BookOpen, CircleUserRound, Drama, Film, Footprints, HeartHandshake, MapPin, MessagesSquare, Music, ShieldCheck, Sparkles, Target, Users } from "lucide-react";

const heroImage = "/images/projetos/capoeira-motiro.jpg";
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

const artImages = ["/images/projetos/teatro-motiro.jpg", "/images/projetos/oficina-leitura.jpg", "/images/projetos/cine-motiro.jpg", "/images/projetos/danca-motiro.jpg"];
const artImageAlts = ["Expressão cênica em apresentação teatral", "Crianças participando de leitura e contação de histórias", "Sala de exibição cinematográfica", "Samba de roda com dança e instrumentos tradicionais"];
const artIcons = [Drama, BookOpen, Film, Music];
const infoIcons = [Users, Sparkles, Target, HeartHandshake];
const civicIcons = [MessagesSquare, CircleUserRound, ShieldCheck, HeartHandshake];

function Projetos() {
  return (
    <>
      <InternalHero
        eyebrow="Projetos e iniciativas"
        title="Cultura, esporte e educação em movimento"
        description="A Motirô desenvolve projetos e atividades que conectam capoeira, artes, leitura, audiovisual, esporte, formação cidadã e inclusão social, ampliando oportunidades de aprendizagem, convivência e participação comunitária."
        image={heroImage}
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

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle center eyebrow="Projetos e atividades" title="Múltiplas linguagens para ampliar oportunidades" description="A Motirô desenvolve atividades que articulam cultura, esporte, educação, criatividade, expressão e convivência comunitária." />
          <article className="mt-10 grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-64 md:min-h-0">
              <ProjectImage src="/images/projetos/capoeira-motiro.jpg" alt="Praticantes de capoeira com instrumentos em roda pública" className="absolute inset-0 h-full w-full object-cover" icon={Footprints} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <MovementMark className="absolute bottom-5 left-5 h-16 w-32 text-ouro" />
            </div>
            <div className="p-6 md:p-8">
              <div className="eyebrow text-vermelho">Tradição, formação e esporte</div>
              <h3 className="mt-2 font-display text-2xl font-extrabold md:text-3xl">Capoeira Motirô</h3>
              <div className="mt-4"><Paragraphs paragraphs={capoeiraParagraphs} /></div>
              <div className="mt-5 text-primary"><ActivityTags items={capoeiraTags} /></div>
              <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">Os participantes têm contato com movimentos, musicalidade, instrumentos, história, disciplina, respeito, cooperação e convivência, além da transmissão de saberes entre gerações e da valorização da ancestralidade e da cultura afro-brasileira.</p>
              <Button asChild className="mt-5 h-auto whitespace-normal rounded-full px-5 py-2.5"><Link to="/projetos/$slug" params={{ slug: "capoeira-para-todos" }}>Conhecer Capoeira Motirô <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </article>
          <div className="my-8 grid gap-6 border-y border-border py-7 md:grid-cols-2">
            <div className="flex gap-4"><Footprints className="mt-1 size-7 shrink-0 text-laranja" aria-hidden="true" /><div><h3 className="font-display text-xl font-bold">Da iniciação à formação esportiva</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Além da dimensão cultural e educativa, o Capoeira Motirô desenvolve a formação esportiva dos praticantes. Os atletas podem avançar da iniciação ao treinamento competitivo, participando de graduações, festivais e campeonatos em diferentes níveis.</p></div></div>
            <div className="flex items-center gap-4 border-l-2 border-ouro pl-5"><p className="text-sm font-medium leading-relaxed">Atletas formados ou preparados no ambiente da Motirô já representaram José de Freitas e o Piauí em competições locais, estaduais, nacionais e internacionais.</p></div>
          </div>
          <div className="space-y-8">
            {arts.map((art, i) => { const Icon = artIcons[i]; const flip = i % 2 === 1; return <article key={art.key} className={`grid items-center overflow-hidden rounded-2xl border border-border ${art.color} ${flip ? "md:grid-cols-[1.3fr_0.7fr] lg:grid-cols-[1.15fr_0.85fr]" : "md:grid-cols-[0.7fr_1.3fr] lg:grid-cols-[0.85fr_1.15fr]"}`}>
              <div className={`relative h-56 overflow-hidden md:h-full md:min-h-64 ${flip ? "md:order-2" : ""}`}><ProjectImage src={artImages[i]} alt={artImageAlts[i]} className="h-full w-full object-cover" icon={Icon} /><MovementMark className="absolute bottom-2 right-4 h-12 w-24 text-ouro" /></div>
              <div className="min-w-0 p-6 lg:p-8"><div className="mb-4 flex items-center gap-3"><Icon className={`size-7 shrink-0 ${art.accent}`} strokeWidth={1.5} aria-hidden="true" /><h3 className="font-display text-xl font-extrabold">{art.title}</h3></div><Paragraphs paragraphs={art.paragraphs} />
                {art.key === "theatre" && <div className="mt-5 space-y-4 border-t border-vermelho/20 pt-4"><div><h4 className="font-display text-sm font-bold text-vermelho">Teatro e Consciência</h4><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Iniciativa socioeducativa que utiliza a linguagem teatral para abordar questões relevantes à formação de crianças e adolescentes.</p></div><div><h4 className="font-display text-sm font-bold text-vermelho">Entre a Ilusão e a Razão</h4><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{theatreLaunchText}</p></div></div>}
                {art.key === "dance" && <div className="mt-5 text-verde"><ActivityTags items={["Maculelê", "Samba de roda", "Danças populares", "Musicalidade", "Memória cultural"]} /></div>}
              </div>
            </article>; })}
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

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionTitle center eyebrow="Uma atuação integrada" title="Cada atividade amplia as possibilidades de aprender e participar" description="Capoeira, teatro, leitura, cinema, dança, esporte e formação cidadã fazem parte de uma atuação que busca reconhecer diferentes interesses e formas de participação. As atividades podem dialogar entre si, criando experiências mais amplas de aprendizagem, expressão, convivência e desenvolvimento humano." />
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-primary" aria-hidden="true">{[Footprints, Drama, BookOpen, Film, Music, MessagesSquare].map((Icon, i) => <div key={i} className="flex items-center gap-3"><Icon className="size-7" strokeWidth={1.5} />{i < 5 && <span className="h-px w-5 bg-ouro" />}</div>)}</div>
        </div>
      </section>

      <FinalCta
        variant="laranja"
        eyebrow="Cultura que cria caminhos"
        title="Cada atividade pode abrir uma nova possibilidade"
        description="A Motirô transforma cultura, esporte e educação em oportunidades de aprendizagem, convivência e desenvolvimento. Conheça nossas ações e descubra diferentes formas de se aproximar desse trabalho."
        image={heroImage}
        imageAlt="Movimento de Capoeira em atividade coletiva"
        buttons={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Conheça nossa trajetória", to: "/quem-somos", variant: "outline" },
        ]}
      />
    </>
  );
}
