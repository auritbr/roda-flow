import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { Button } from "@/components/ui/button";
import { AboutPhoto, CompactCard, MovementMark, Paragraphs } from "@/components/about/Elements";
import * as content from "@/components/about/content";
import { ArrowRight, Award, BookOpen, Drama, Film, HeartHandshake, Landmark, Music, Network, ShieldCheck, Sparkles, Trophy, Users, Volleyball } from "lucide-react";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({ meta: [
    { title: "Quem Somos — Motirô | Cultura, esporte e comunidade" },
    { name: "description", content: "Conheça a trajetória da Motirô em José de Freitas: capoeira, cultura, esporte, educação e inclusão. Pontão de Cultura desde 2017." },
    { property: "og:title", content: "Quem Somos — Motirô" },
    { property: "og:description", content: "Da roda de capoeira à atuação comunitária: conheça a história e os princípios da Motirô, Pontão de Cultura desde 2017." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: QuemSomos,
});

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const activityIcons = [Drama, BookOpen, Film, Volleyball, Music, ShieldCheck];
const areaIcons = [Music, BookOpen, Trophy, Drama, Film, HeartHandshake, ShieldCheck, Network];

function QuemSomos() {
  return <div className="motiro-about">
    <style>{`body:has(.motiro-about) footer li span { overflow-wrap: anywhere; min-width: 0; } .motiro-about h1, .motiro-about h2, .motiro-about h3 { letter-spacing: 0; }`}</style>
    <InternalHero
      eyebrow="Quem somos"
      title="Uma trajetória construída com cultura, esporte e comunidade"
      description="A Motirô nasceu da capoeira e, ao longo de mais de duas décadas, ampliou sua atuação para diferentes linguagens culturais, educativas, esportivas e sociais em José de Freitas, no Piauí."
      image="/images/quem-somos/capoeira.jpg"
      imageAlt="Roda de capoeira — fotografia ilustrativa da prática cultural"
      variant="primary" pattern="roda"
    />
    <section className="py-20">
      <div className={container}>
        <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center lg:gap-16">
          <div><SectionTitle eyebrow="Quem somos" title="Uma história que começou na roda e cresceu com a comunidade" /><Paragraphs items={content.introduction} className="mt-6" /></div>
          <div className="relative mx-auto w-full max-w-sm"><AboutPhoto src="/images/quem-somos/roda.jpg" alt="Participantes em uma atividade coletiva de capoeira" /><MovementMark className="absolute -bottom-5 right-3 h-14 w-24" /></div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-muted/40">
      <div className={container}>
        <SectionTitle eyebrow="História e trajetória" title="Da capoeira à construção de uma atuação mais ampla" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { title: "O início pela capoeira", paragraphs: content.history.slice(0, 2), tone: "border-azul/30 bg-azul/5", accent: "text-azul", icon: Music },
            { title: "Uma história construída entre gerações", paragraphs: content.history.slice(2, 3), tone: "border-vermelho/30 bg-vermelho/5", accent: "text-vermelho", icon: Users },
            { title: "Novas possibilidades", paragraphs: content.history.slice(3, 4), tone: "border-verde/30 bg-verde/5", accent: "text-verde", icon: Sparkles },
            { title: "Uma atuação que se tornou mais ampla", paragraphs: content.history.slice(4), tone: "border-ouro/40 bg-ouro/10", accent: "text-primary", icon: Network },
          ].map(({ title, paragraphs, tone, accent, icon: Icon }) => <article key={title} className={`relative h-full overflow-hidden rounded-xl border p-6 lg:p-8 ${tone}`}>
            <div className={`mb-5 flex items-center justify-between ${accent}`}><Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" /><MovementMark className={`h-10 w-20 ${accent}`} /></div>
            <h3 className="font-display text-xl font-bold leading-snug">{title}</h3>
            <Paragraphs items={paragraphs} className="mt-4 text-sm" />
          </article>)}
        </div>
      </div>
    </section>
      {/* Timeline */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <svg className="absolute left-0 top-8 h-40 w-40 opacity-20" viewBox="0 0 200 200" aria-hidden>
          <circle cx="100" cy="100" r="80" fill="none" stroke="var(--azul)" strokeWidth="2" strokeDasharray="6 10" />
        </svg>
        <svg className="absolute right-0 bottom-10 h-48 w-48 opacity-25" viewBox="0 0 200 200" aria-hidden>
          <path d="M20 180 Q 100 20 180 180" fill="none" stroke="var(--vermelho)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Trajetória" title="Principais marcos institucionais" center description="Marcos que constroem a história viva da Motirô." />

          <div className="relative mt-16">
            {/* Linha central desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2" aria-hidden>
              <svg className="h-full w-8" viewBox="0 0 32 1000" preserveAspectRatio="none">
                <path d="M16 0 Q 28 250 16 500 T 16 1000" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="6 8" />
              </svg>
            </div>
            {/* Linha lateral mobile */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-ouro/40" aria-hidden />

            <ol className="space-y-10 md:space-y-16">
              {content.timeline.map((t, i) => {
                const leftSide = i % 2 === 0;
                const accent = ["text-vermelho", "text-azul", "text-laranja", "text-verde", "text-ouro"][i % 5];
                const dot = ["bg-vermelho", "bg-azul", "bg-laranja", "bg-verde", "bg-ouro"][i % 5];
                return (
                  <li key={i} className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center">
                    {/* Marcador central desktop */}
                    <span className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full ${dot} ring-4 ring-background z-10`} aria-hidden />
                    {/* Marcador lateral mobile */}
                    <span className={`md:hidden absolute left-4 top-3 -translate-x-1/2 h-4 w-4 rounded-full ${dot} ring-4 ring-background`} aria-hidden />

                    <div className={`pl-10 md:pl-0 ${leftSide ? "md:pr-10 md:text-right" : "md:pl-10 md:col-start-2"}`}>
                      <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs max-w-full font-bold ${accent}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                        {t.year}
                      </div>
                      <div className="mt-3 relative rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition">
                        <svg className={`absolute ${leftSide ? "-right-2" : "-left-2"} top-4 h-8 w-8 opacity-70`} viewBox="0 0 30 30" aria-hidden>
                          <rect x="10" y="10" width="10" height="10" transform="rotate(45 15 15)" fill="none" stroke="currentColor" strokeWidth="2" className={accent} />
                        </svg>
                        <h3 className="font-display text-lg font-bold">{t.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                        <svg className="mt-3 h-3 w-24" viewBox="0 0 100 12" aria-hidden>
                          <path d="M2 8 Q 25 2 50 8 T 98 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={accent} />
                        </svg>
                      </div>
                    </div>
                    {/* Espaço vazio do outro lado no desktop */}
                    <div className={`hidden md:block ${leftSide ? "" : "md:col-start-1 md:row-start-1"}`} />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>


    <section className="py-20">
      <div className={container}>
        <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
          <div><SectionTitle eyebrow="Capoeira e transformação" title="Da roda de capoeira à transformação social" /><Paragraphs items={content.transformation} className="mt-6" /></div>
          <AboutPhoto src="/images/quem-somos/capoeira.jpg" alt="Roda de capoeira com participação coletiva e musicalidade" className="max-h-80" />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.transformationCards.map((card, i) => <CompactCard key={card.title} {...card} icon={[ShieldCheck, Music, Users, Trophy][i] ?? Users} index={i} />)}</div>
      </div>
    </section>
    <section className="py-20 bg-muted/40"><div className={container}>
      <SectionTitle eyebrow="Novas possibilidades" title="Cultura, educação e esporte em diferentes linguagens" description="Com o amadurecimento do trabalho, a Motirô passou a desenvolver outras iniciativas para atender aos diferentes interesses e necessidades da comunidade." center />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{content.activities.map((card, i) => <CompactCard key={card.title} {...card} icon={activityIcons[i] ?? Sparkles} index={i} />)}</div>
    </div></section>
    <section className="py-20"><div className={container}>
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div><SectionTitle eyebrow="Inclusão e acolhimento" title="Criar oportunidades para diferentes formas de participar" /><Paragraphs items={content.inclusion} className="mt-6" /></div>
        <div className="self-center"><MovementMark className="mb-4 text-vermelho" /><div className="grid gap-3 sm:grid-cols-2">{content.inclusionHighlights.map((title, i) => <CompactCard key={title} title={title} icon={i % 2 ? Users : HeartHandshake} index={i} />)}</div></div>
      </div>
    </div></section>
    <section className="py-20 bg-muted/40"><div className={container}>
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
        <div><SectionTitle eyebrow="Um espaço de memória" title="A sede histórica da Motirô" /><Paragraphs items={content.headquarters} className="mt-6" /></div>
        <div className="relative flex min-h-64 flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-background p-8 text-primary" aria-label="Espaço reservado para fotografia oficial da sede histórica">
          <MovementMark className="absolute bottom-3 right-4 text-ouro/60" /><Landmark className="h-12 w-12" strokeWidth={1.3} aria-hidden="true" /><span className="mt-4 font-display text-lg font-bold">Memória e continuidade</span>
        </div>
      </div>
    </div></section>
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground"><MovementMark className="absolute -right-6 top-4 h-32 w-56 opacity-30" /><div className={container}>
      <div className="relative mx-auto max-w-3xl text-center">
        <div><div className="eyebrow text-ouro">Reconhecimento</div><h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold">Pontão de Cultura desde {content.institutionalFacts.certificationYear}</h2><Paragraphs items={content.recognition} className="mt-6 text-primary-foreground/90" />
          {content.institutionalFacts.certificateUrl && <Button asChild variant="secondary" className="mt-6"><a href={content.institutionalFacts.certificateUrl}>Ver certificado</a></Button>}
        </div>
        <div className="mx-auto mt-9 flex w-fit max-w-[90%] items-center gap-3 rounded-xl border border-ouro/40 bg-ouro px-5 py-4 text-ouro-foreground shadow-sm"><Award className="h-7 w-7 shrink-0" strokeWidth={1.6} aria-hidden="true" /><h3 className="font-display text-base font-bold leading-snug sm:text-lg">Único Pontão de Cultura de José de Freitas</h3></div>
      </div>
    </div></section>
    <section className="py-20"><div className={container}>
      <SectionTitle eyebrow="Articulação institucional" title="A Motirô e as políticas públicas" center />
      <Paragraphs items={content.publicPolicies} className="mx-auto mt-8 max-w-3xl space-y-5 text-center" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{["Cultura", "Esporte", "Patrimônio imaterial", "Inclusão social", "Participação comunitária"].map((title, i) => <CompactCard key={title} title={title} icon={[Music, Trophy, Landmark, HeartHandshake, Users][i] ?? Users} index={i} />)}</div>
    </div></section>
      {/* Missão / Visão / Valores — cards fortes com grafismos de Capoeira */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Nossos princípios" title="Missão, Visão e Valores" center description="Os três eixos que orientam nossa atuação." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Missão",
                bg: "bg-azul text-azul-foreground",
                accent: "text-ouro",
                text: content.mission,
                art: (
                  <svg viewBox="0 0 200 140" className="h-32 w-full" aria-hidden>
                    <circle cx="100" cy="70" r="46" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 8" />
                    <circle cx="100" cy="70" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="30" y1="120" x2="170" y2="120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <polygon points="60,30 68,50 52,50" fill="currentColor" />
                    <rect x="140" y="30" width="16" height="16" transform="rotate(45 148 38)" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: "Visão",
                bg: "bg-vermelho text-vermelho-foreground",
                accent: "text-ouro",
                text: content.vision,
                art: (
                  <svg viewBox="0 0 200 140" className="h-32 w-full" aria-hidden>
                    <path d="M20 100 Q 100 20 180 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="100" cy="70" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="100" cy="70" r="5" fill="currentColor" />
                    <line x1="40" y1="120" x2="160" y2="120" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
                    <polygon points="30,40 40,55 50,40" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: "Valores",
                bg: "bg-laranja text-laranja-foreground",
                accent: "text-primary",
                text: "",
                art: (
                  <svg viewBox="0 0 200 140" className="h-32 w-full" aria-hidden>
                    <path d="M100 30 L120 60 L100 40 L80 60 Z" fill="currentColor" />
                    <path d="M60 90 Q 100 60 140 90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="60" cy="110" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="140" cy="110" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="92" y="100" width="16" height="16" transform="rotate(45 100 108)" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
              },
            ].map((c) => (
              <article key={c.title} className={`relative overflow-hidden rounded-3xl ${c.bg} p-8 shadow-lg ${c.title === "Valores" ? "md:col-span-2" : "h-full"}`}>
                <svg className="absolute -right-10 -top-10 h-40 w-40 opacity-20" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" />
                </svg>
                <div className={`${c.accent}`}>{c.art}</div>
                <h3 className="mt-4 font-display text-3xl font-extrabold">{c.title}</h3>
                {c.title === "Valores" ? <ul className="mt-4 grid gap-x-8 gap-y-3 text-sm leading-relaxed sm:grid-cols-2 lg:grid-cols-3">{content.values.map(value => <li key={value} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-current" aria-hidden="true" /><span>{value}</span></li>)}</ul> : <p className="mt-3 leading-relaxed text-[15px]">{c.text}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>


    <section className="py-20"><div className={container}>
      <SectionTitle eyebrow="Áreas de atuação" title="Diferentes frentes que se complementam" description="A Motirô desenvolve suas ações em diferentes áreas, que se complementam e ampliam as possibilidades de participação da comunidade." center />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.areas.map((card, i) => <CompactCard key={card.title} {...card} icon={areaIcons[i] ?? Network} index={i} />)}</div>
    </div></section>
    <section className="py-20 bg-muted/40"><div className={container}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle eyebrow="Quem faz acontecer" title="Uma equipe que fortalece nossa trajetória" center />
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">Por trás de cada projeto, atividade e conquista da Motirô, existem pessoas comprometidas com a cultura, o esporte, a educação e o desenvolvimento da comunidade. Nossa equipe trabalha de forma coletiva para fortalecer a instituição, dar continuidade às ações que transformam vidas e manter viva a missão da Motirô.</p>
        <Button asChild className="mt-8 rounded-full h-auto min-h-10 whitespace-normal"><Link to="/quem-somos/equipe">Conheça nossa equipe<ArrowRight aria-hidden="true" /></Link></Button>
      </div>
    </div></section>
    <FinalCta variant="primary" eyebrow="Nossa história continua" title="Cultura, esporte e educação seguem construindo novos caminhos" description="A trajetória da Motirô é feita de encontros, aprendizados, vínculos e oportunidades. Conheça nossos projetos e acompanhe as ações que continuam dando movimento a essa história." image="/images/quem-somos/roda.jpg" imageAlt="Encontro coletivo de capoeira — imagem ilustrativa" buttons={[{ label: "Conheça os projetos", to: "/projetos" }, { label: "Fale conosco", to: "/contato" }]} />
  </div>;
}
