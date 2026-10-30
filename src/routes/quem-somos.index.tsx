import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { MapPin } from "lucide-react";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Ponto de Cultura Capoeira" },
      { name: "description", content: "Apresentação institucional do Ponto de Cultura, com missão, visão, valores e trajetória." },
    ],
  }),
  component: QuemSomos,
});

const TIMELINE = [
  { year: "Ano a informar", title: "Origem", text: "Descrição do marco inicial a ser inserida." },
  { year: "Ano a informar", title: "Primeiros projetos", text: "Descrição a ser inserida." },
  { year: "Ano a informar", title: "Reconhecimento", text: "Descrição a ser inserida." },
  { year: "Ano a informar", title: "Ampliação", text: "Descrição a ser inserida." },
  { year: "Ano a informar", title: "Momento atual", text: "Descrição a ser inserida." },
];

function QuemSomos() {
  return (
    <>
      <InternalHero
        eyebrow="Institucional"
        title="Quem Somos"
        description="Somos um Ponto de Cultura dedicado à valorização da Capoeira, à cultura afro-brasileira e ao fortalecimento comunitário no território."
        image="https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Roda de Capoeira em atividade comunitária"
        variant="primary"
        pattern="roda"
      />

      {/* Quem Somos — apresentação */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="eyebrow text-laranja">Quem Somos</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold">Uma organização cultural que educa através da Capoeira</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>Texto de apresentação institucional a ser inserido. Fale sobre a natureza jurídica, o compromisso com a cultura popular, o pertencimento comunitário e os princípios que orientam a atuação.</p>
            <p>Fale sobre a atuação como Ponto de Cultura, os públicos atendidos, a articulação com escolas, redes culturais e políticas públicas de cultura, quando aplicável.</p>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores — cards fortes com grafismos de Capoeira */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Nossos princípios" title="Missão, Visão e Valores" center description="Os três eixos que orientam nossa atuação como Ponto de Cultura." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Missão",
                bg: "bg-azul",
                accent: "text-ouro",
                text: "Promover a Capoeira como prática cultural, educativa e comunitária, fortalecendo vínculos, identidades, ancestralidade e cidadania por meio da formação, da convivência e da valorização da cultura afro-brasileira.",
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
                bg: "bg-vermelho",
                accent: "text-ouro",
                text: "Ser referência na preservação e difusão da Capoeira como patrimônio cultural vivo, ampliando oportunidades de formação, inclusão e transformação social em diálogo com o território e com as novas gerações.",
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
                bg: "bg-laranja",
                accent: "text-primary",
                text: "Ancestralidade, respeito, coletividade, escuta, disciplina, pertencimento, diversidade, compromisso comunitário, valorização da cultura afro-brasileira e defesa da Capoeira como instrumento de educação e transformação.",
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
              <article key={c.title} className={`relative overflow-hidden rounded-3xl ${c.bg} text-white p-8 shadow-lg`}>
                <svg className="absolute -right-10 -top-10 h-40 w-40 opacity-20" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" />
                </svg>
                <div className={`${c.accent}`}>{c.art}</div>
                <h3 className="mt-4 font-display text-3xl font-extrabold">{c.title}</h3>
                <p className="mt-3 text-white/90 leading-relaxed text-[15px]">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Atuação territorial */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle eyebrow="Território" title="Atuação no território" description="Estamos presentes em diferentes espaços comunitários, escolas, praças e centros culturais parceiros." />
            <ul className="mt-6 space-y-3 text-sm">
              {["Sede do Ponto de Cultura", "Escolas parceiras", "Praças e espaços públicos", "Centros culturais e comunitários"].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-vermelho mt-1 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1653476597388-b9a2d5f688d6?auto=format&fit=crop&w=1200&q=80" alt="Atividade cultural aberta em espaço público" className="rounded-2xl object-cover aspect-video w-full shadow-lg" loading="lazy" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-2 border-ouro" aria-hidden />
          </div>
        </div>
      </section>

      {/* Patrimônio */}
      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="eyebrow text-vermelho">Patrimônio cultural</div>
          <h2 className="mt-3 font-display text-3xl font-extrabold">Capoeira como patrimônio, prática educativa e expressão cultural</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Reconhecida como patrimônio cultural do Brasil e da humanidade, a Capoeira é prática viva que une corpo, música, memória, resistência e educação. É nesse horizonte que atuamos.
          </p>
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
          <SectionTitle eyebrow="Trajetória" title="Nossa linha do tempo" center description="Marcos que constroem a história viva do Ponto de Cultura." />

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
              {TIMELINE.map((t, i) => {
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
                      <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-bold ${accent}`}>
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

      {/* CTA Equipe */}
      <FinalCta
        variant="primary"
        eyebrow="A comunidade do Ponto"
        title="As pessoas que mantêm a roda viva"
        description="Conheça quem constrói, ensina, organiza e fortalece as ações do Ponto de Cultura por meio da Capoeira, da educação e da atuação comunitária."
        image="https://images.unsplash.com/photo-1623759126376-f3f1fb8c7f37?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Encontro coletivo do Ponto de Cultura"
        buttons={[{ label: "Conhecer a equipe", to: "/quem-somos/equipe" }]}
      />
    </>
  );
}
