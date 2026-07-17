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
        image="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=2000&q=80"
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
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80" alt="Atividade cultural aberta em espaço público" className="rounded-2xl object-cover aspect-video w-full shadow-lg" loading="lazy" />
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
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Trajetória" title="Nossa linha do tempo" center />
          <ol className="mt-12 relative border-l-2 border-ouro/40 md:border-l-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-ouro/40">
            {TIMELINE.map((t, i) => (
              <li key={i} className={`relative mb-10 pl-6 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 1 ? "md:[&>div:first-child]:col-start-2" : ""}`}>
                <div className={`md:${i % 2 === 0 ? "text-right md:pr-10" : "md:pl-10 md:col-start-2"} relative`}>
                  <span className="absolute -left-[30px] md:left-auto md:right-auto top-1 h-4 w-4 rounded-full bg-ouro border-4 border-background md:relative md:mx-auto md:mb-3" />
                  <div className="eyebrow text-laranja">{t.year}</div>
                  <h3 className="mt-1 font-display text-lg font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Parcerias" title="Redes e parceiros" center />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PARTNERS.map((p) => (
              <div key={p.name} className="aspect-[3/2] rounded-xl border border-border bg-card flex items-center justify-center text-xs eyebrow text-muted-foreground">
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Equipe */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold">Conheça quem faz o Ponto de Cultura acontecer</h2>
          <Link to="/quem-somos/equipe" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Ver a equipe <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
