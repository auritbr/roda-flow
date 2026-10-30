import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import provisionalMan from "@/assets/team-placeholder-man.jpg";
import provisionalWomanOne from "@/assets/team-placeholder-woman-one.jpg";
import provisionalWomanTwo from "@/assets/team-placeholder-woman-two.jpg";

const heroImage = "https://images.unsplash.com/photo-1623759126376-f3f1fb8c7f37?auto=format&fit=crop&w=2000&q=80";
const team: { name: string; role: string; distinction?: string; bio: string[]; color: string; photo?: string }[] = [
  {
    name: "Aerton Ezequiel Alves",
    role: "Coordenador Geral (presidente)",
    distinction: "Mestre Tingaúna",
    color: "bg-primary text-primary-foreground",
    photo: provisionalMan,
    bio: [
      "Responsável pela coordenação geral da instituição, pelo acompanhamento das atividades, pela articulação institucional e pela orientação do trabalho cultural, esportivo e social da Motirô.",
      "Conhecido na capoeira como Mestre Tingaúna, possui trajetória ligada à formação de praticantes e atletas, à gestão cultural e à defesa da capoeira como manifestação cultural e prática esportiva.",
    ],
  },
  {
    name: "Yarema Leite R. de S. Alves",
    role: "Secretária",
    color: "bg-vermelho text-vermelho-foreground",
    photo: provisionalWomanOne,
    bio: ["Responsável pelas atividades de secretaria, organização de documentos e registros institucionais, além do apoio administrativo à gestão da entidade."],
  },
  {
    name: "Anne Nathielle de Sousa Silva",
    role: "Coordenadora Financeira",
    color: "bg-ouro text-ouro-foreground",
    photo: provisionalWomanTwo,
    bio: ["Responsável pela coordenação financeira, pela organização das informações de receitas e despesas e pelo acompanhamento dos recursos destinados às atividades e aos projetos da instituição."],
  },
];

const responsibilities = [
  { title: "Coordenação", text: "Acompanhamento das atividades, articulação institucional e orientação do trabalho cultural, esportivo e social.", color: "bg-azul text-azul-foreground" },
  { title: "Organização institucional", text: "Documentos, registros e apoio administrativo necessários ao funcionamento e à gestão da entidade.", color: "bg-vermelho text-vermelho-foreground" },
  { title: "Gestão financeira", text: "Organização das informações de receitas, despesas e recursos destinados às atividades e aos projetos.", color: "bg-ouro text-ouro-foreground" },
];

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe Motirô — Quem faz acontecer" },
      { name: "description", content: "Conheça as pessoas responsáveis pela coordenação, organização e gestão institucional da Motirô." },
      { property: "og:title", content: "Equipe Motirô — Quem faz acontecer" },
      { property: "og:description", content: "Conheça as pessoas responsáveis pela coordenação, organização e gestão institucional da Motirô." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Equipe,
});

function TeamCard({ person, index }: { person: (typeof team)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `team-description-${index}`;
  return (
    <article className={`group isolate overflow-hidden rounded-2xl border border-current/10 shadow-sm ${person.color}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {person.photo && <img src={person.photo} alt="Retrato fictício provisório; não representa a pessoa integrante da equipe" className="h-full w-full object-cover object-[50%_25%]" loading="lazy" width={768} height={1024} />}
        <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/90 px-3 py-1 text-[10px] font-semibold text-foreground backdrop-blur-sm">Retrato provisório</span>
        <svg className="pointer-events-none absolute -right-4 bottom-6 h-24 w-24 text-ouro" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
          <path d="M20 64 A34 34 0 0 1 68 19" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg className={`pointer-events-none absolute inset-x-0 -bottom-px h-9 w-full ${person.color}`} viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 29 Q105 7 210 24 T400 13 V40 H0 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="relative">
        <svg className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 opacity-[0.08]" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="31" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 5" />
        </svg>
        <div className="relative min-h-56 px-6 pb-7 pt-6">
          <div className="mb-5 flex items-center gap-2 opacity-60" aria-hidden="true">
            <span className="h-px w-8 bg-current" /><span className="h-1.5 w-1.5 rotate-45 bg-current" /><span className="h-1.5 w-1.5 rotate-45 border border-current" />
          </div>
          <h3 className="font-display text-lg font-bold leading-snug">
            <Button variant="ghost" className="h-auto w-full items-start justify-between gap-3 whitespace-normal p-0 text-left font-display text-lg font-bold leading-snug text-inherit hover:bg-transparent hover:text-inherit focus-visible:ring-current" aria-expanded={expanded} aria-controls={panelId} onClick={() => setExpanded((value) => !value)}>
              <span>{person.name}</span>
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/25 bg-current/5">
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </span>
            </Button>
          </h3>
          <p className="mt-3 text-sm leading-relaxed opacity-85">{person.role}</p>
          {person.distinction && <span className="mt-4 inline-flex rounded-full border border-current/25 px-3 py-1 text-xs font-medium">{person.distinction}</span>}
        </div>
        <div id={panelId} inert={!expanded} aria-hidden={!expanded} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="min-h-0 overflow-hidden" role="region" aria-label={`Sobre ${person.name}`}>
            <div className="relative mx-6 border-t border-current/20 pb-7 pt-5 text-sm leading-relaxed">
              {person.bio.map((paragraph) => <p key={paragraph} className="mb-4 last:mb-0">{paragraph}</p>)}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Equipe() {
  return (
    <>
      <InternalHero
        eyebrow="Quem faz acontecer"
        title="Equipe Motirô"
        description="Conheça as pessoas responsáveis pela coordenação, organização e gestão institucional da Motirô."
        image={heroImage}
        imageAlt="Encontro de educadores e mestres"
        variant="vermelho"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto mb-8 max-w-3xl text-center">
            <div className="eyebrow text-laranja">Nossa equipe</div>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Um trabalho construído coletivamente</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">A trajetória da Motirô é construída pelo trabalho de sua equipe, dos participantes, das famílias, dos parceiros e da comunidade. Na organização institucional, diferentes responsabilidades se complementam para garantir o acompanhamento das atividades e a continuidade do trabalho cultural, esportivo e social.</p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => <TeamCard key={person.name} person={person} index={index} />)}
          </div>
        </div>
      </section>

      <section className="relative bg-muted/40 py-12">
        <svg className="pointer-events-none absolute -top-3 left-1/2 h-6 w-32 -translate-x-1/2 text-laranja" viewBox="0 0 128 24" aria-hidden="true">
          <path d="M2 18 Q32 2 64 13 T126 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow text-laranja">Gestão e continuidade</div>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Responsabilidades que se complementam</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">A organização institucional reúne diferentes frentes de trabalho que ajudam a manter as atividades, os projetos e a atuação comunitária da Motirô em funcionamento.</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((item, index) => (
              <article key={item.title} className={`relative overflow-hidden rounded-2xl p-6 ${item.color}`}>
                <svg className="mb-4 h-10 w-10 opacity-70" viewBox="0 0 48 48" aria-hidden="true">
                  {index === 0 ? <><circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" /><circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2" /></> : index === 1 ? <><path d="M9 12 Q24 2 39 12 M9 24 Q24 14 39 24 M9 36 Q24 26 39 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></> : <><path d="M7 35 L17 25 L27 30 L41 12 M7 41 H41" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="17" cy="25" r="3" fill="currentColor" /><circle cx="27" cy="30" r="3" fill="currentColor" /></>}
                </svg>
                <svg className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 opacity-15" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                <h3 className="font-display text-lg font-bold leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        variant="vermelho"
        eyebrow="Vamos juntos"
        title="Quer caminhar junto com a nossa atuação?"
        description="O trabalho do Ponto de Cultura é construído coletivamente. Entre em contato para saber mais sobre nossas ações, projetos e possibilidades de aproximação."
        image="https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Roda de Capoeira em atividade comunitária"
        buttons={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Conheça os projetos", to: "/projetos", variant: "outline" },
        ]}
      />
    </>
  );
}
