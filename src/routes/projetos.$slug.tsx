import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { initiativeForSlug, legacyProjectDestinations, legacyOverviewSlugs } from "@/components/projects/detail-content";
import { ProgramReach } from "@/components/projects/ProgramReach";
import { ImageAttribution } from "@/components/projects/ImageAttribution";
import { activities } from "@/components/projects/activities";
import { Target, Users, MapPin, Compass, Sparkles, Music, HeartHandshake, BookOpen, Drum, History, GraduationCap, Feather, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const destination = legacyProjectDestinations[params.slug];
    if (destination) throw redirect({ to: "/projetos/$slug", params: { slug: destination }, statusCode: 301 });
    if (legacyOverviewSlugs.includes(params.slug)) throw redirect({ to: "/projetos", statusCode: 301 });
    const project = initiativeForSlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Motirô` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.title} — Motirô` },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Projeto não encontrado" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectDetail,
});

const colorMap: Record<"azul" | "ouro" | "vermelho" | "verde", { bg: string; foreground: string; text: string; border: string; soft: string; pattern: "roda" | "berimbau" | "ginga" }> = {
  azul: { bg: "bg-azul", foreground: "text-primary-foreground", text: "text-azul", border: "border-azul/30", soft: "bg-azul/10", pattern: "roda" },
  ouro: { bg: "bg-ouro", foreground: "text-ouro-foreground", text: "text-ouro", border: "border-ouro/40", soft: "bg-ouro/15", pattern: "berimbau" },
  vermelho: { bg: "bg-vermelho", foreground: "text-primary-foreground", text: "text-vermelho", border: "border-vermelho/30", soft: "bg-vermelho/10", pattern: "ginga" },
  verde: { bg: "bg-verde", foreground: "text-primary-foreground", text: "text-verde", border: "border-verde/30", soft: "bg-verde/10", pattern: "roda" },
};

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const variant = project.color;
  const c = colorMap[variant];
  const details = project;
  const credit = activities.find(item => item.slug === project.slug)?.credit;

  return (
    <>
      <InternalHero
        eyebrow={project.eyebrow}
        title={project.title}
        description={project.subtitle}
        image={project.image}
        imageAlt={project.alt}
        variant={variant}
        pattern={c.pattern}
      >
        <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/90">{project.summary}</p>
        {project.independent && <span className="mt-4 inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">Iniciativa independente</span>}
        {credit && <div className="relative mt-4 h-10"><ImageAttribution {...credit} /></div>}
      </InternalHero>

      {/* Informações principais */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {project.facts.map(fact => <Info key={fact.label} icon={fact.label === "Público" ? Users : fact.label === "Território" ? MapPin : fact.label === "Área" ? Target : Compass} label={fact.label} text={fact.text} color={c} />)}
        </div>
      </section>

      {/* Sobre o projeto */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className={`eyebrow ${c.text}`}>{project.aboutLabel}</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold relative inline-block">
            {project.title}
            <svg className="absolute -bottom-3 left-0 h-3 w-32" viewBox="0 0 160 12" aria-hidden>
              <path d="M2 8 Q 40 2 80 8 T 158 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className={c.text} />
            </svg>
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed text-lg">{project.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        </div>
      </section>

      {/* Objetivos — cards fortes com cor de destaque */}
      {details.objectives.length > 0 && (
        <section className={`py-16 ${c.soft} relative overflow-hidden`}>
          <svg className="absolute -left-10 -top-10 h-64 w-64 opacity-30" viewBox="0 0 200 200" aria-hidden>
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 10" className={c.text} />
          </svg>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <SectionTitle eyebrow="O que buscamos" title={project.reach ? "Objetivos do programa" : "Objetivos da iniciativa"} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {details.objectives.map((o, i) => (
                <article key={i} className={`relative rounded-2xl ${c.bg} ${c.foreground} p-6 shadow-lg overflow-hidden`}>
                  <svg className="absolute -right-6 -bottom-6 h-24 w-24 opacity-25" viewBox="0 0 100 100" aria-hidden>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
                  </svg>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-current/10 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm opacity-90 leading-relaxed">{o.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experiências confirmadas de cada iniciativa */}
      {details.practices && (
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
              eyebrow="Experiências da iniciativa"
              title={details.practices.title}
              description={details.practices.text}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(() => {
                const icons = [GraduationCap, Drum, Users, History, BookOpen, Music, HeartHandshake, Feather, Sparkles, Target];
                const tints = ["bg-azul text-primary-foreground", "bg-vermelho text-primary-foreground", "bg-laranja text-primary-foreground", "bg-verde text-primary-foreground"];
                const items = details.practices.items.map((label, index) => ({ label, icon: icons[index % icons.length], tint: tints[index % tints.length] }));
                return items.map(({ icon: Icon, label, tint }, i) => (
                  <article
                    key={i}
                    className="group relative overflow-hidden rounded-2xl bg-card border border-border p-5 hover:shadow-lg transition"
                  >
                    <svg className="absolute -right-4 -bottom-4 h-20 w-20 opacity-10" viewBox="0 0 80 80" aria-hidden>
                      <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" className={c.text} />
                    </svg>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${tint} shadow-sm`}>
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

      {project.feature && <section className="relative overflow-hidden py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={project.feature.eyebrow} title={project.feature.title} /><div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">{project.feature.paragraphs.map(text => <p key={text}>{text}</p>)}</div></div></section>}
      {project.highlights && <section className="py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="Expressão e formação" title="Ações em destaque" /><div className="mt-10 grid gap-5 md:grid-cols-2">{project.highlights.map(item => <article key={item.title} className={`relative overflow-hidden rounded-2xl border ${c.border} bg-card p-6`}><h3 className="font-display text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></div></section>}
      {project.reach && <ProgramReach />}
      {project.audience && <section className="py-10"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="Participação" title="Público" description={project.audience} /></div></section>}

      {/* CTA final */}
      <FinalCta
        variant={variant}
        eyebrow="Aproxime-se desta ação"
        title="Quer saber mais sobre esta iniciativa?"
        description={project.independent ? "Entre em contato para conhecer melhor a iniciativa e obter informações sobre participação, critérios e organização das atividades." : "Entre em contato para conhecer melhor esta iniciativa, acompanhar suas ações e saber mais sobre as possibilidades de participação."}
        buttons={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Ver outros projetos", to: "/projetos", variant: "outline" },
        ]}
      />
    </>
  );
}

function Info({ icon: Icon, label, text, color }: { icon: LucideIcon; label: string; text: string; color: { text: string; border: string } }) {
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
