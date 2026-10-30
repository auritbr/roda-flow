import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
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
            {TEAM.map((p, i) => <TeamCard key={p.name} person={p} index={i} />)}
          </div>
        </div>
      </section>

      <EquipeCta />
    </>
  );
}

function TeamCard({ person, index }: { person: (typeof TEAM)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentId = `team-details-${index}`;
  return (
    <article className={`group relative flex aspect-[3/4] min-w-0 flex-col overflow-hidden rounded-2xl ${bgClass[person.bg]}`} data-team-card>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-grafite to-transparent opacity-30 mix-blend-multiply" />
      <svg className="pointer-events-none absolute right-3 top-3 h-16 w-16 opacity-30" viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
      </svg>
      <Button variant="ghost" aria-label={person.name} aria-expanded={open} aria-controls={contentId} onClick={() => setOpen(value => !value)} className={`relative flex w-full shrink-0 flex-col gap-4 whitespace-normal rounded-2xl p-5 text-current hover:bg-transparent hover:text-current focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current ${open ? "h-auto items-start pb-3" : "h-full min-h-0 items-center justify-end"}`}>
        {!open && (
          <span className="relative min-h-0 w-3/4 flex-1 overflow-hidden rounded-lg">
            <img src={portraits[index]} alt={`Retrato fictício temporário para ${person.name}; não é uma fotografia oficial`} width={768} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </span>
        )}
        <span className="relative flex w-full items-center gap-2 text-left font-display text-lg font-bold leading-tight">
          <span className="min-w-0">{person.name}</span>
          <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} aria-hidden />
        </span>
      </Button>
      <div id={contentId} hidden={!open} className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-5 text-sm leading-relaxed [scrollbar-width:thin] [scrollbar-color:currentColor_transparent]" data-team-content>
        <p className="font-semibold">{person.role}</p>
        <div className="mt-3 space-y-4">{person.bio.split("\n\n").map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </article>
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
            <div className="relative mx-auto aspect-[7/4] w-full min-w-0 max-w-sm">
              <img src={ctaPhoto.url} alt="Capoeiristas e músicos em atividade cultural em uma praça" width={1000} height={572} loading="eager" decoding="async" className="block h-full w-full rounded-2xl object-cover" />
              <span className="pointer-events-none absolute -bottom-2 -left-2 size-10 rounded-full border border-ouro/70" aria-hidden />
              <span className="pointer-events-none absolute -right-2 -top-2 size-3 rounded-full bg-ouro" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
