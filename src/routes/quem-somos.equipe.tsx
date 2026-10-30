import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { InternalHero } from "@/components/site/InternalHero";
import { TEAM } from "@/lib/site-data";
import portrait1 from "@/assets/equipe-retrato-natural-aerton.jpg";
import portrait2 from "@/assets/equipe-retrato-natural-yarema.jpg";
import portrait3 from "@/assets/equipe-retrato-natural-anne.jpg";
import ctaPhoto from "@/assets/equipe-capoeira-cta.jpg.asset.json";

const portraits = [portrait1, portrait2, portrait3];
const heroImage = "https://images.unsplash.com/photo-1623759126376-f3f1fb8c7f37?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Pontão de Cultura Motirô" },
      { name: "description", content: "Conheça a equipe da Motirô: coordenação geral, secretaria e coordenação financeira." },
      { property: "og:title", content: "Equipe — Pontão de Cultura Motirô" },
      { property: "og:description", content: "Conheça a equipe da Motirô: coordenação geral, secretaria e coordenação financeira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Equipe,
});

const bgClass: Record<string, string> = {
  azul: "bg-azul text-azul-foreground",
  vermelho: "bg-vermelho text-vermelho-foreground",
  ouro: "bg-ouro text-ouro-foreground",
  verde: "bg-verde text-verde-foreground",
  laranja: "bg-laranja text-laranja-foreground",
};

function Equipe() {
  return (
    <>
      <InternalHero
        eyebrow="Institucional"
        title="Equipe"
        description="Um coletivo de coordenadores, mestres, educadores, artistas e colaboradores que sustentam a atuação do Ponto de Cultura."
        image={heroImage}
        imageAlt="Encontro de educadores e mestres"
        variant="vermelho"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3" data-team-grid>
            {TEAM.map((p, i) => (
              <Collapsible asChild key={p.name}>
              <article className={`group relative overflow-hidden rounded-2xl ${bgClass[p.bg]}`} data-team-card>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-grafite to-transparent opacity-30 mix-blend-multiply" />
                <svg className="pointer-events-none absolute right-3 top-3 h-16 w-16 opacity-30" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
                </svg>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" aria-label={p.name} className="relative flex aspect-[3/4] h-auto w-full flex-col items-start justify-end whitespace-normal rounded-2xl p-5 text-current hover:bg-transparent hover:text-current focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current [&[data-state=open]_.team-chevron]:rotate-180">
                    <img src={portraits[i]} alt={`Retrato fictício temporário para ${p.name}; não é uma fotografia oficial`} width={768} height={1024} loading="lazy" className="absolute left-1/2 top-[26%] h-28 w-24 -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover" />
                    <span className="relative flex items-center gap-2 text-left font-display text-lg font-bold leading-tight">
                      <span>{p.name}</span>
                      <ChevronDown className="team-chevron size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none" aria-hidden />
                    </span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent forceMount className="relative grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 data-[state=open]:grid-rows-[1fr] motion-reduce:transition-none" data-team-content>
                  <span className="min-h-0 overflow-hidden group-data-[state=closed]:invisible">
                    <span className="block px-5 pb-5 text-sm leading-relaxed">
                      <span className="block font-semibold">{p.role}</span>
                      <span className="mt-3 block space-y-4">{p.bio.split("\n\n").map(paragraph => <span className="block" key={paragraph}>{paragraph}</span>)}</span>
                    </span>
                  </span>
                </CollapsibleContent>
              </article>
              </Collapsible>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            As atribuições descritas são apresentações institucionais dos respectivos cargos e poderão ser ajustadas pela diretoria conforme as responsabilidades efetivamente exercidas.
          </p>
        </div>
      </section>

      <EquipeCta />
    </>
  );
}

function EquipeCta() {
  return (
    <section className="py-8" aria-labelledby="equipe-cta-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-vermelho text-vermelho-foreground shadow-lg" data-team-cta>
          <svg className="pointer-events-none absolute -left-10 -top-12 h-40 w-40 text-ouro opacity-25" viewBox="0 0 160 160" aria-hidden>
            <circle cx="80" cy="80" r="68" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="80" cy="80" r="48" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg className="pointer-events-none absolute bottom-3 left-1/2 h-10 w-28 text-ouro opacity-60" viewBox="0 0 120 40" aria-hidden>
            <path d="M4 30 Q35 5 62 23 T116 12" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="110" cy="32" r="3" fill="currentColor" />
          </svg>
          <div className="relative grid items-center gap-7 p-6 sm:p-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10 lg:p-10">
            <div>
              <p className="eyebrow text-ouro">VAMOS JUNTOS</p>
              <h2 id="equipe-cta-title" className="mt-2 font-display text-2xl font-extrabold leading-tight lg:text-3xl">Quer caminhar junto com a nossa atuação?</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-vermelho-foreground/90">O trabalho do Ponto de Cultura é construído coletivamente. Entre em contato para saber mais sobre nossas ações, projetos e possibilidades de aproximação.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-creme px-5 text-grafite hover:bg-creme/90">
                  <Link to="/contato">Fale conosco <ArrowRight aria-hidden /></Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-vermelho-foreground/60 bg-transparent px-5 text-vermelho-foreground hover:bg-vermelho-foreground/10 hover:text-vermelho-foreground">
                  <Link to="/projetos">Conheça os projetos</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <img src={ctaPhoto.url} alt="Capoeiristas e músicos em atividade cultural em uma praça" width={1000} height={572} loading="lazy" className="aspect-[7/4] w-full rounded-2xl object-cover" />
              <span className="pointer-events-none absolute -bottom-2 -left-2 size-10 rounded-full border border-ouro/70" aria-hidden />
              <span className="pointer-events-none absolute -right-2 -top-2 size-3 rounded-full bg-ouro" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
