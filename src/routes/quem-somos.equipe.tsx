import { createFileRoute } from "@tanstack/react-router";
import { Network, Files, ChartNoAxesCombined } from "lucide-react";
import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import provisionalMan from "@/assets/team-portrait-man-wide.jpg";
import provisionalWomanOne from "@/assets/team-portrait-woman-one-wide.jpg";
import provisionalWomanTwo from "@/assets/team-portrait-woman-two-wide.jpg";

const heroImage = "https://images.unsplash.com/photo-1623759126376-f3f1fb8c7f37?auto=format&fit=crop&w=2000&q=80";
const team: { name: string; role: string; distinction?: string; bio: string[]; color: string; photo?: string }[] = [
  {
    name: "Aerton Ezequiel Alves",
    role: "Coordenador Geral (presidente)",
    distinction: "Mestre Tingaúna",
    color: "text-primary",
    photo: provisionalMan,
    bio: [
      "Responsável pela coordenação geral da instituição, pelo acompanhamento das atividades, pela articulação institucional e pela orientação do trabalho cultural, esportivo e social da Motirô.",
      "Conhecido na capoeira como Mestre Tingaúna, possui trajetória ligada à formação de praticantes e atletas, à gestão cultural e à defesa da capoeira como manifestação cultural e prática esportiva.",
    ],
  },
  {
    name: "Yarema Leite R. de S. Alves",
    role: "Secretária",
    color: "text-vermelho",
    photo: provisionalWomanOne,
    bio: ["Responsável pelas atividades de secretaria, organização de documentos e registros institucionais, além do apoio administrativo à gestão da entidade."],
  },
  {
    name: "Anne Nathielle de Sousa Silva",
    role: "Coordenadora Financeira",
    color: "text-ouro",
    photo: provisionalWomanTwo,
    bio: ["Responsável pela coordenação financeira, pela organização das informações de receitas e despesas e pelo acompanhamento dos recursos destinados às atividades e aos projetos da instituição."],
  },
];

const responsibilities = [
  { title: "Coordenação", text: "Articulação institucional e acompanhamento das atividades.", color: "text-primary", icon: Network },
  { title: "Organização administrativa", text: "Documentos, registros e apoio à gestão da entidade.", color: "text-vermelho", icon: Files },
  { title: "Gestão financeira", text: "Organização de receitas, despesas e recursos dos projetos.", color: "text-primary", icon: ChartNoAxesCombined },
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
  const portraitPosition = ["object-[49%_45%]", "object-[48%_42%]", "object-[50%_44%]"][index];
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm">
      <div className="px-3 pt-3">
        <div className="relative h-[280px] overflow-hidden rounded-xl bg-muted">
          {person.photo && <img src={person.photo} alt={`Retrato ilustrativo para ${person.name}`} className={`h-full w-full object-cover ${portraitPosition}`} loading="lazy" width={1200} height={650} />}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-7 pt-6 lg:px-7">
        <div className="sm:min-h-[134px]">
          <h3 className="font-display text-xl font-bold leading-7 tracking-normal">{person.name}</h3>
          <p className={`mt-3 border-l-2 border-current pl-3 text-sm font-semibold leading-5 ${person.color}`}><span className={index === 2 ? "text-foreground" : undefined}>{person.role}</span></p>
          {person.distinction && <span className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">{person.distinction}</span>}
        </div>
        <div className={`mb-5 mt-6 flex items-center gap-2 ${person.color}`} aria-hidden="true">
          <span className="h-px w-9 bg-current opacity-60" /><span className="size-1.5 rotate-45 border border-current opacity-70" />
        </div>
        <div className="space-y-5 text-sm leading-7 text-muted-foreground">{person.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <svg className={`mt-auto h-9 w-24 shrink-0 pt-5 ${person.color}`} viewBox="0 0 96 20" aria-hidden="true"><path d="M2 14 Q24 2 48 12 T94 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" /></svg>
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
            <svg className="pointer-events-none absolute -right-1 -top-9 h-20 w-20 text-ouro/25 sm:-right-8" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" /><path d="M19 52 A25 25 0 0 1 53 18" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            <svg className="pointer-events-none absolute -bottom-8 left-0 h-6 w-20 text-vermelho/30 sm:left-5" viewBox="0 0 80 24" aria-hidden="true"><path d="M2 18 Q22 4 42 13 T78 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="36" y="7" width="5" height="5" transform="rotate(45 38.5 9.5)" fill="currentColor" /></svg>
            <div className="eyebrow text-laranja">Nossa equipe</div>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Um trabalho construído coletivamente</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">A trajetória da Motirô é construída pelo trabalho de sua equipe, dos participantes, das famílias, dos parceiros e da comunidade. Na organização institucional, diferentes responsabilidades se complementam para garantir o acompanhamento das atividades e a continuidade do trabalho cultural, esportivo e social.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="eyebrow text-laranja">Equipe institucional</div>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Responsabilidades que sustentam a atuação da Motirô</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">A equipe institucional reúne diferentes responsabilidades de coordenação, organização administrativa e gestão financeira, contribuindo para a continuidade das atividades, dos projetos e da atuação comunitária da Motirô.</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Diferentes funções, um mesmo compromisso</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Coordenação, secretaria e gestão financeira atuam de forma complementar para garantir organização, acompanhamento das atividades, continuidade dos projetos e suporte ao trabalho cultural, esportivo e social desenvolvido pela Motirô.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map(({ title, text, color, icon: Icon }) => (
              <div key={title} className={`text-center ${color}`}>
                <Icon className="mx-auto h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-3 font-display text-base font-bold leading-tight">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
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
