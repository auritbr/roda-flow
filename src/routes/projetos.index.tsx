import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { PROJECTS } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Ponto de Cultura Capoeira" },
      { name: "description", content: "Conheça os projetos culturais e educativos do Ponto de Cultura." },
    ],
  }),
  component: Projetos,
});

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  azul: { bg: "bg-azul", text: "text-azul", ring: "from-azul/85" },
  ouro: { bg: "bg-ouro", text: "text-ouro", ring: "from-ouro/85" },
  vermelho: { bg: "bg-vermelho", text: "text-vermelho", ring: "from-vermelho/85" },
};

function Projetos() {
  return (
    <>
      <InternalHero
        eyebrow="Ações estruturantes"
        title="Nossos projetos"
        description="Iniciativas continuadas que articulam Capoeira, formação, cultura afro-brasileira, memória e comunidade."
        image="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Atividade cultural coletiva"
        variant="laranja"
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center mb-12">
          <p className="text-muted-foreground leading-relaxed">
            Cada projeto responde a uma dimensão da nossa atuação — formação, musicalidade e território — mantendo unidade em torno da Capoeira como prática cultural, educativa e comunitária.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {PROJECTS.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <article key={p.slug} className={`grid gap-6 md:grid-cols-2 items-center rounded-3xl border border-border bg-card overflow-hidden ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                  <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${c.ring} via-transparent to-transparent`} />
                </div>
                <div className="p-8 md:p-10">
                  <div className={`inline-block eyebrow ${c.text}`}>{p.area}</div>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground italic">{p.tagline}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.summary}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div><dt className="eyebrow text-vermelho">Público</dt><dd className="mt-0.5 font-semibold">{p.audience}</dd></div>
                    <div><dt className="eyebrow text-vermelho">Área</dt><dd className="mt-0.5 font-semibold">{p.area}</dd></div>
                  </dl>
                  <Link to="/projetos/$slug" params={{ slug: p.slug }} className={`mt-6 inline-flex items-center gap-2 rounded-full ${c.bg} px-5 py-2.5 text-sm font-semibold text-white hover:brightness-95`}>
                    Conheça o projeto <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
