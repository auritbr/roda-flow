import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Ponto de Cultura Capoeira" },
      { name: "description", content: "Termos de uso do site institucional do Ponto de Cultura." },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <>
      <InternalHero
        eyebrow="Documento institucional"
        title="Termos de Uso"
        description="Regras e condições de utilização do site institucional."
        image="https://images.unsplash.com/photo-1628375385872-f2f937986c91?auto=format&fit=crop&w=2000&q=80"
        imageAlt=""
        variant="primary"
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-muted-foreground leading-relaxed">
          <Sec title="1. Aceite">Ao utilizar este site você concorda com estes termos. Conteúdo provisório a ser revisado.</Sec>
          <Sec title="2. Propriedade intelectual">Textos, imagens, marcas e materiais publicados pertencem ao Ponto de Cultura ou a seus respectivos autores.</Sec>
          <Sec title="3. Uso do conteúdo">Descrever condições de uso, reprodução e citação do conteúdo.</Sec>
          <Sec title="4. Responsabilidades">Descrever limitações de responsabilidade sobre disponibilidade e conteúdo de terceiros.</Sec>
          <Sec title="5. Alterações">Estes termos podem ser atualizados a qualquer tempo. Recomenda-se consulta periódica.</Sec>
          <Sec title="6. Foro">Descrever foro para questões relativas a este documento.</Sec>
        </div>
      </section>
    </>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-extrabold text-foreground mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
