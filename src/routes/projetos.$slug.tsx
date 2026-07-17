import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { PROJECTS, PROJECT_DETAILS, GALLERY, PARTNERS } from "@/lib/site-data";
import {
  ArrowRight,
  Target,
  Users,
  MapPin,
  Compass,
  Sparkles,
  Music,
  HeartHandshake,
  Quote,
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

      {/* Diferenciais */}
      {details && (
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <svg className="absolute -right-10 -top-10 h-72 w-72 opacity-20" viewBox="0 0 200 200" aria-hidden>
            <circle cx="100" cy="100" r="80" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="6 10" />
            <circle cx="100" cy="100" r="55" fill="none" stroke="var(--creme)" strokeWidth="1.5" />
          </svg>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <SectionTitle eyebrow="O que nos diferencia" title="Diferenciais do projeto" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {details.differentials.map((d, i) => (
                <div key={i} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ouro text-primary font-bold">{i + 1}</div>
                  <p className="mt-4 text-primary-foreground/90 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resultados */}
      {details && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Resultados" title="Indicadores do projeto" />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {details.results.map((r, i) => (
                <div key={i} className={`rounded-2xl border ${c.border} p-5 bg-card`}>
                  <div className={`eyebrow ${c.text}`}>{r.label}</div>
                  <div className="mt-1 font-display text-2xl font-extrabold">{r.value}</div>
                </div>
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

      {/* Equipe */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Quem faz acontecer" title="Equipe envolvida" description="Nomes, funções e formações a serem inseridos conforme a composição atual da equipe do projeto." />
        </div>
      </section>

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
      <section className={`py-16 ${c.bg} text-white relative overflow-hidden`}>
        <svg className="absolute -left-10 -bottom-10 h-64 w-64 opacity-25" viewBox="0 0 200 200" aria-hidden>
          <path d="M20 180 Q 100 20 180 180" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold">Quer saber mais sobre este projeto?</h2>
          <p className="mt-3 text-white/90">Entre em contato para conhecer nossa atuação, participar ou apoiar as ações.</p>
          <Link to="/contato" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-3 text-sm font-semibold hover:bg-white/90">
            Fale conosco <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
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
