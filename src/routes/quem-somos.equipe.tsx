import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Pontão de Cultura Motirô" },
      { name: "description", content: "Conheça a equipe da Motirô: coordenação geral, secretaria e coordenação financeira." },
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
        eyebrow="Pontão de Cultura Motirô"
        title="Equipe"
        description="Equipe institucional da Motirô."
        image="https://images.unsplash.com/photo-1623759126376-f3f1fb8c7f37?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Encontro de educadores e mestres"
        variant="vermelho"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((p, i) => (
              <article key={i} className={`group relative overflow-hidden rounded-2xl ${bgClass[p.bg]} text-white aspect-[3/4] flex flex-col justify-end p-5`}>
                <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-gradient-to-t from-black to-transparent" />
                <svg className="absolute right-3 top-3 h-16 w-16 opacity-30" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
                </svg>
                <div className="absolute left-1/2 top-[26%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-dashed border-white/50 bg-white/10" aria-hidden>
                  <User className="h-10 w-10 text-white/70" strokeWidth={1.5} />
                </div>
                <div className="relative">
                  <div className="eyebrow text-white/80">{p.role}</div>
                  <h3 className="mt-1 font-display text-lg font-bold leading-tight">{p.name}</h3>
                  <p className="mt-2 text-xs text-white/85 leading-relaxed whitespace-pre-line">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            As atribuições descritas são apresentações institucionais dos respectivos cargos e poderão ser ajustadas pela diretoria conforme as responsabilidades efetivamente exercidas.
          </p>
        </div>
      </section>

      <FinalCta
        variant="vermelho"
        eyebrow="Pontão de Cultura Motirô"
        title="Conheça a Motirô"
        image="https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Roda de Capoeira em atividade comunitária"
        buttons={[
          { label: "Conheça nossos projetos", to: "/projetos" },
          { label: "Quem Somos", to: "/quem-somos", variant: "outline" },
        ]}
      />
    </>
  );
}
