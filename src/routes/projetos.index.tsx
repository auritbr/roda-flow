import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { PROJECTS } from "@/lib/site-data";
import { FinalCta } from "@/components/site/FinalCta";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Nossos Projetos — Ponto de Cultura Capoeira" },
      { name: "description", content: "Iniciativas culturais e educativas que articulam Capoeira, formação, memória e território." },
    ],
  }),
  component: Projetos,
});

const colorMap: Record<string, { bg: string; text: string; ring: string; soft: string }> = {
  azul: { bg: "bg-azul", text: "text-azul", ring: "from-azul/85", soft: "bg-azul/10" },
  ouro: { bg: "bg-ouro", text: "text-ouro", ring: "from-ouro/85", soft: "bg-ouro/15" },
  vermelho: { bg: "bg-vermelho", text: "text-vermelho", ring: "from-vermelho/85", soft: "bg-vermelho/10" },
};

function Projetos() {
  return (
    <>
      <InternalHero
        eyebrow="Ações estruturantes"
        title="Nossos Projetos"
        description="Iniciativas continuadas que articulam Capoeira, formação, cultura afro-brasileira, memória e comunidade."
        image="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Atividade cultural coletiva"
        variant="laranja"
        pattern="ginga"
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="eyebrow text-vermelho">Nossa atuação</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold relative inline-block">
            Cultura viva, formação e território
            <svg className="absolute -bottom-3 left-0 right-0 mx-auto h-3 w-40" viewBox="0 0 160 12" aria-hidden>
              <path d="M2 8 Q 40 2 80 8 T 158 6" fill="none" stroke="var(--ouro)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Nossos projetos articulam Capoeira, memória, formação, musicalidade, convivência e ação comunitária. Cada iniciativa fortalece o território e amplia o acesso à cultura afro-brasileira por meio de experiências coletivas, educativas e transformadoras.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 space-y-10">
          {PROJECTS.map((p, i) => {
            const c = colorMap[p.color];
            const flip = i % 2 === 1;
            return (
              <article key={p.slug} className={`grid gap-6 md:grid-cols-2 items-stretch rounded-3xl border border-border bg-card overflow-hidden ${flip ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${c.ring} via-transparent to-transparent mix-blend-multiply`} />
                  {/* Molduras geométricas */}
                  <svg className="absolute right-4 top-4 h-20 w-20 opacity-80" viewBox="0 0 80 80" aria-hidden>
                    <circle cx="40" cy="40" r="30" fill="none" stroke="var(--creme)" strokeWidth="2" strokeDasharray="4 6" />
                    <rect x="30" y="30" width="20" height="20" transform="rotate(45 40 40)" fill="none" stroke="var(--ouro)" strokeWidth="2" />
                  </svg>
                  <svg className="absolute left-4 bottom-4 h-16 w-32 opacity-90" viewBox="0 0 160 60" aria-hidden>
                    <path d="M0 40 Q 40 0 80 40 T 160 30" fill="none" stroke="var(--ouro)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <span className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full ${c.bg} text-white px-3 py-1 text-xs font-semibold shadow`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-white" /> Projeto {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col">
                  <div className={`inline-block eyebrow ${c.text}`}>{p.area}</div>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground italic">{p.tagline}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.summary}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className={`rounded-xl ${c.soft} p-3`}><dt className={`eyebrow ${c.text}`}>Público</dt><dd className="mt-0.5 font-semibold">{p.audience}</dd></div>
                    <div className={`rounded-xl ${c.soft} p-3`}><dt className={`eyebrow ${c.text}`}>Área</dt><dd className="mt-0.5 font-semibold">{p.area}</dd></div>
                  </dl>
                  <Link to="/projetos/$slug" params={{ slug: p.slug }} className={`mt-6 inline-flex self-start items-center gap-2 rounded-full ${c.bg} px-5 py-2.5 text-sm font-semibold text-white hover:brightness-95`}>
                    Conheça o projeto <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionTitle center eyebrow="Continue explorando" title="Quer conhecer nossa atuação de perto?" description="Entre em contato para saber mais sobre parcerias, participação e apoio às nossas ações." />
          <Link to="/contato" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Fale com o Ponto de Cultura <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
