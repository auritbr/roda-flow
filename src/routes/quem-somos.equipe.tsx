import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Ponto de Cultura Capoeira" },
      { name: "description", content: "Conheça a equipe do Ponto de Cultura: coordenação, mestres, educadores e colaboradores." },
    ],
  }),
  component: Equipe,
});

const bgClass: Record<string, string> = {
  azul: "bg-azul",
  vermelho: "bg-vermelho",
  ouro: "bg-ouro",
  verde: "bg-verde",
  laranja: "bg-laranja",
};

function Equipe() {
  return (
    <>
      <InternalHero
        eyebrow="Institucional"
        title="Equipe"
        description="Um coletivo de coordenadores, mestres, educadores, artistas e colaboradores que sustentam a atuação do Ponto de Cultura."
        image="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Encontro de educadores e mestres"
        variant="vermelho"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((p, i) => (
              <article key={i} className={`group relative overflow-hidden rounded-2xl ${bgClass[p.bg]} text-white aspect-[3/4] flex flex-col justify-end p-5`}>
                <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-gradient-to-t from-black to-transparent" />
                <svg className="absolute right-3 top-3 h-16 w-16 opacity-30" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
                </svg>
                <div className="relative">
                  <div className="eyebrow text-white/80">{p.role}</div>
                  <h3 className="mt-1 font-display text-lg font-bold leading-tight">{p.name}</h3>
                  <p className="mt-2 text-xs text-white/85 leading-relaxed line-clamp-3">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
