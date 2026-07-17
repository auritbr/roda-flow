import { createFileRoute, notFound } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { PROJECTS, PROJECT_DETAILS, GALLERY, PARTNERS } from "@/lib/site-data";
import {
  Target,
  Users,
  MapPin,
  Compass,
  Sparkles,
  Music,
  HeartHandshake,
  Quote,
  BookOpen,
  Drum,
  Users2,
  Landmark,
  GraduationCap,
  MapPinned,
  Vote,
  Feather,
  ShieldCheck,
  Heart,
  Handshake,
  History,
  Sprout,
} from "lucide-react";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Projetos` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [{ title: "Projeto não encontrado" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectDetail,
});

const colorMap: Record<string, { bg: string; text: string; border: string; soft: string; pattern: "roda" | "berimbau" | "ginga" }> = {
  azul: { bg: "bg-azul", text: "text-azul", border: "border-azul/30", soft: "bg-azul/10", pattern: "roda" },
  ouro: { bg: "bg-ouro", text: "text-ouro", border: "border-ouro/40", soft: "bg-ouro/15", pattern: "berimbau" },
  vermelho: { bg: "bg-vermelho", text: "text-vermelho", border: "border-vermelho/30", soft: "bg-vermelho/10", pattern: "ginga" },
};

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const variant = project.color as "azul" | "ouro" | "vermelho";
  const c = colorMap[variant];
  const details = PROJECT_DETAILS[project.slug];

  return (
    <>
      <InternalHero
        eyebrow="Projeto"
        title={project.title}
        description={project.tagline}
        image={project.image}
        imageAlt=""
        variant={variant}
        pattern={c.pattern}
      />

      {/* Informações principais */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Info icon={Users} label="Público" text={project.audience} color={c} />
          <Info icon={Target} label="Área" text={project.area} color={c} />
          <Info icon={MapPin} label="Território" text="Cidade / UF a informar" color={c} />
          <Info icon={Compass} label="Situação" text="Em andamento" color={c} />
        </div>
      </section>

      {/* Sobre o projeto */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className={`eyebrow ${c.text}`}>Sobre o projeto</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold relative inline-block">
            {project.title}
            <svg className="absolute -bottom-3 left-0 h-3 w-32" viewBox="0 0 160 12" aria-hidden>
              <path d="M2 8 Q 40 2 80 8 T 158 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className={c.text} />
            </svg>
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
            {details?.intro ?? project.summary}
          </p>
        </div>
      </section>

      {/* Objetivos — cards fortes com cor de destaque */}
      {details && (
        <section className={`py-16 ${c.soft} relative overflow-hidden`}>
          <svg className="absolute -left-10 -top-10 h-64 w-64 opacity-30" viewBox="0 0 200 200" aria-hidden>
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 10" className={c.text} />
          </svg>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <SectionTitle eyebrow="O que buscamos" title="Objetivos do projeto" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {details.objectives.map((o, i) => (
                <article key={i} className={`relative rounded-2xl ${c.bg} text-white p-6 shadow-lg overflow-hidden`}>
                  <svg className="absolute -right-6 -bottom-6 h-24 w-24 opacity-25" viewBox="0 0 100 100" aria-hidden>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
                  </svg>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-ouro font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm text-white/90 leading-relaxed">{o.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Metodologia + Atividades */}
      {details && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
            <div>
              <div className={`eyebrow ${c.text}`}>Como funciona</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold">Metodologia</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                O trabalho é conduzido em ciclos formativos, com aulas regulares, oficinas temáticas e encontros comunitários. A metodologia articula corpo, ritmo, escuta e memória, respeitando os saberes tradicionais da Capoeira e o contexto do território.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: Sparkles, label: "Vivência" },
                  { icon: Music, label: "Musicalidade" },
                  { icon: HeartHandshake, label: "Comunidade" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className={`rounded-xl border ${c.border} p-4 text-center`}>
                    <Icon className={`h-5 w-5 mx-auto ${c.text}`} />
                    <div className="mt-2 text-xs font-semibold">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className={`eyebrow ${c.text}`}>Na prática</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold">Atividades desenvolvidas</h2>
              <ul className="mt-6 space-y-3">
                {details.activities.map((a) => (
                  <li key={a} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${c.bg}`} />
                    <span className="text-sm">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Nesta ação, a Capoeira se expressa por meio de */}
      {details && (
        <section className={`py-16 ${c.soft} relative overflow-hidden`}>
          <svg className="absolute -right-10 -top-10 h-64 w-64 opacity-30" viewBox="0 0 200 200" aria-hidden>
            <path d="M100 20 A 80 80 0 0 1 180 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={c.text} />
            <path d="M20 100 A 80 80 0 0 1 100 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={c.text} />
          </svg>
          <svg className="absolute -left-10 bottom-10 h-40 w-40 opacity-40" viewBox="0 0 100 100" aria-hidden>
            <path d="M0 80 Q 30 40 60 70 T 100 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={c.text} />
          </svg>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Identidade do projeto"
              title="Nesta ação, a Capoeira se expressa por meio de"
              description="Frentes que compõem a experiência viva desta iniciativa."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(() => {
                const items = [
                  { icon: GraduationCap, label: "Formação cultural", tint: "bg-azul" },
                  { icon: Drum, label: "Musicalidade", tint: "bg-vermelho" },
                  { icon: Users2, label: "Convivência", tint: "bg-laranja" },
                  { icon: History, label: "Memória", tint: "bg-verde" },
                  { icon: BookOpen, label: "Educação", tint: "bg-azul" },
                  { icon: MapPinned, label: "Território", tint: "bg-vermelho" },
                  { icon: Vote, label: "Participação coletiva", tint: "bg-ouro" },
                  { icon: Feather, label: "Ancestralidade", tint: "bg-verde" },
                ];
                return items.map(({ icon: Icon, label, tint }, i) => (
                  <article
                    key={i}
                    className="group relative overflow-hidden rounded-2xl bg-card border border-border p-5 hover:shadow-lg transition"
                  >
                    <svg className="absolute -right-4 -bottom-4 h-20 w-20 opacity-10" viewBox="0 0 80 80" aria-hidden>
                      <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" className={c.text} />
                    </svg>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${tint} text-white shadow-sm`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-foreground">{label}</h3>
                    <svg className="mt-3 h-2.5 w-16" viewBox="0 0 80 10" aria-hidden>
                      <path d="M2 6 Q 20 2 40 6 T 78 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={c.text} />
                    </svg>
                  </article>
                ));
              })()}
            </div>
          </div>
        </section>
      )}

      {/* Como esta iniciativa fortalece o território */}
      {details && (
        <section className="py-16 relative overflow-hidden">
          <svg className="absolute left-0 top-10 h-40 w-40 opacity-20" viewBox="0 0 100 100" aria-hidden>
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="4 6" />
          </svg>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Impactos e frentes de atuação"
              title="Como esta iniciativa fortalece o território"
              description="Movimentos concretos que a Capoeira ativa a partir deste projeto."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Landmark, title: "Amplia o acesso à cultura", text: "Aproxima diferentes públicos das práticas culturais da Capoeira, com atividades abertas e continuadas." },
                { icon: HeartHandshake, title: "Fortalece vínculos comunitários", text: "Estimula encontros, escuta e construção coletiva no território de atuação." },
                { icon: Feather, title: "Valoriza saberes afro-brasileiros", text: "Reconhece e afirma a Capoeira como patrimônio cultural vivo e ancestral." },
                { icon: Users2, title: "Promove encontros e convivência", text: "Cria espaços seguros de troca, formação e experimentação artística." },
                { icon: Sprout, title: "Incentiva participação intergeracional", text: "Reúne crianças, jovens, adultos e mestres em uma mesma roda de saberes." },
                { icon: ShieldCheck, title: "Preserva memórias e práticas culturais", text: "Registra e transmite tradições, cantos, movimentos e histórias do território." },
              ].map((item, i) => (
                <article
                  key={i}
                  className={`relative overflow-hidden rounded-2xl border ${c.border} bg-card p-6 hover:shadow-md transition`}
                >
                  <svg className="absolute -right-6 -top-6 h-24 w-24 opacity-15" viewBox="0 0 80 80" aria-hidden>
                    <rect x="20" y="20" width="40" height="40" transform="rotate(45 40 40)" fill="none" stroke="currentColor" strokeWidth="2" className={c.text} />
                  </svg>
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${c.soft} ${c.text}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Depoimento */}
      {details && (
        <section className={`py-16 ${c.soft}`}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Quote className={`h-8 w-8 mx-auto ${c.text}`} />
            <blockquote className="mt-4 font-display text-xl md:text-2xl font-bold leading-snug">
              "{details.testimonial.text}"
            </blockquote>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{details.testimonial.author}</span> — {details.testimonial.role}
            </div>
          </div>
        </section>
      )}

      {/* Galeria */}
      <section className="py-14 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Registros" title="Galeria do projeto" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.slice(0, 8).map((g) => (
              <figure key={g.title} className="aspect-square overflow-hidden rounded-xl">
                <img src={g.image} alt={g.alt} className="h-full w-full object-cover hover:scale-105 transition duration-500" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Rede" title="Parceiros e apoiadores" center />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PARTNERS.slice(0, 4).map((p) => (
              <div key={p.name} className="aspect-[3/2] rounded-xl border border-border bg-card flex items-center justify-center text-xs eyebrow text-muted-foreground">{p.name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <FinalCta
        variant={variant}
        eyebrow="Aproxime-se desta ação"
        title="Quer saber mais sobre esta iniciativa?"
        description="Entre em contato para acompanhar as ações, conhecer melhor o projeto e se aproximar do trabalho desenvolvido pelo Ponto de Cultura."
        buttons={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Ver outros projetos", to: "/projetos", variant: "outline" },
        ]}
      />
    </>
  );
}

function Info({ icon: Icon, label, text, color }: { icon: any; label: string; text: string; color: { text: string; border: string } }) {
  return (
    <div className={`rounded-xl border ${color.border} bg-card p-4`}>
      <div className={`flex items-center gap-2 ${color.text}`}>
        <Icon className="h-4 w-4" />
        <span className="eyebrow">{label}</span>
      </div>
      <div className="mt-1 font-display font-semibold">{text}</div>
    </div>
  );
}
