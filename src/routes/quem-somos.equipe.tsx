import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { TEAM } from "@/lib/site-data";
import portrait1 from "@/assets/equipe-retrato-temporario-1.jpg";
import portrait2 from "@/assets/equipe-retrato-temporario-2.jpg";
import portrait3 from "@/assets/equipe-retrato-temporario-3.jpg";

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
          <Accordion type="multiple" className="mx-auto grid max-w-4xl gap-4">
            {TEAM.map((p, i) => (
              <AccordionItem key={p.name} value={p.name} className={`relative overflow-hidden rounded-2xl border-border/20 ${bgClass[p.bg]}`}>
                <svg className="pointer-events-none absolute right-8 top-3 h-16 w-16 opacity-20" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
                </svg>
                <AccordionTrigger className="relative gap-3 p-4 sm:gap-5 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-current [&>svg]:text-current [&>svg]:motion-reduce:transition-none">
                  <span className="flex min-w-0 items-center gap-3 sm:gap-5">
                    <img src={portraits[i]} alt={`Retrato fictício temporário para ${p.name}; não é uma fotografia oficial`} width={816} height={816} loading="lazy" className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24" />
                    <span className="min-w-0 font-display text-base font-bold leading-snug sm:text-lg">{p.name}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="relative px-4 pb-5 text-base leading-relaxed sm:pl-33 sm:pr-6" data-team-content>
                  <p className="font-semibold">{p.role}</p>
                  <div className="mt-3 space-y-4">{p.bio.split("\n\n").map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            As atribuições descritas são apresentações institucionais dos respectivos cargos e poderão ser ajustadas pela diretoria conforme as responsabilidades efetivamente exercidas.
          </p>
        </div>
      </section>

      <div className="[&>section]:py-8 [&>section>div>div>svg]:scale-75 [&>section>div>div>div.relative.grid]:gap-5 [&>section>div>div>div.relative.grid]:p-6 md:[&>section>div>div>div.relative.grid]:p-8 [&_h2]:mt-1 [&_p]:mt-3 [&_div.mt-6]:mt-4 [&_div.ring-1]:max-h-44 [&_div.ring-1]:aspect-[16/9]">
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
      </div>
    </>
  );
}
