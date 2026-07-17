import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { PROJECTS, NEWS, GALLERY, PARTNERS } from "@/lib/site-data";
import { ArrowRight, Target, Users, MapPin, Compass } from "lucide-react";

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
        ]
      : [{ title: "Projeto não encontrado" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const variant = project.color as "azul" | "ouro" | "vermelho";

  return (
    <>
      <InternalHero
        eyebrow="Projeto"
        title={project.title}
        description={project.tagline}
        image={project.image}
        imageAlt=""
        variant={variant}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-4">
          <Info icon={Users} label="Público" text={project.audience} />
          <Info icon={Target} label="Área" text={project.area} />
          <Info icon={MapPin} label="Território" text="Cidade / UF a informar" />
          <Info icon={Compass} label="Situação" text="Em andamento" />
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <Block title="Sobre o projeto">
            <p>{project.summary}</p>
            <p>Descrição complementar do projeto a ser inserida, incluindo contexto, motivação e articulação com a missão do Ponto de Cultura.</p>
          </Block>
          <Block title="Objetivos">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Objetivo específico a ser detalhado.</li>
              <li>Objetivo específico a ser detalhado.</li>
              <li>Objetivo específico a ser detalhado.</li>
            </ul>
          </Block>
          <Block title="Metodologia">
            <p>Descrição da metodologia adotada a ser inserida, incluindo abordagens pedagógicas, éticas e culturais.</p>
          </Block>
          <Block title="Atividades desenvolvidas">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Aulas regulares e vivências continuadas.</li>
              <li>Rodas, apresentações e encontros comunitários.</li>
              <li>Oficinas de musicalidade, corpo e memória.</li>
              <li>Formação continuada de educadores.</li>
            </ul>
          </Block>
          <Block title="Território de atuação"><p>Descrição do território, comunidades e parceiros a serem inseridos.</p></Block>
          <Block title="Resultados">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-xl border border-border p-4">
                  <div className="eyebrow text-vermelho">Indicador {i}</div>
                  <div className="mt-1 font-display text-lg font-bold">A informar</div>
                </div>
              ))}
            </div>
          </Block>
          <Block title="Equipe envolvida"><p>Nomes e funções a serem inseridos.</p></Block>
        </div>
      </section>

      {/* Galeria + Notícias */}
      <section className="py-16 bg-muted/40">
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

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Relacionadas" title="Notícias sobre o projeto" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {NEWS.slice(0, 3).map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition">
                <img src={n.image} alt="" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5">
                  <div className="eyebrow text-laranja">{n.category}</div>
                  <h3 className="mt-1 font-display font-bold leading-snug">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros + CTA */}
      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Rede" title="Parceiros e apoiadores" center />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PARTNERS.slice(0, 4).map((p) => (
              <div key={p.name} className="aspect-[3/2] rounded-xl border border-border bg-card flex items-center justify-center text-xs eyebrow text-muted-foreground">{p.name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold">Quer saber mais sobre este projeto?</h2>
          <Link to="/contato" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Fale conosco <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, label, text }: { icon: any; label: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-vermelho">
        <Icon className="h-4 w-4" />
        <span className="eyebrow">{label}</span>
      </div>
      <div className="mt-1 font-display font-semibold">{text}</div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl md:text-2xl font-extrabold mb-3">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}
