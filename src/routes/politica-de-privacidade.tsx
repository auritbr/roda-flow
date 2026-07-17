import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Ponto de Cultura Capoeira" },
      { name: "description", content: "Política de Privacidade e tratamento de dados pessoais em conformidade com a LGPD." },
    ],
  }),
  component: Politica,
});

function Politica() {
  return (
    <>
      <InternalHero
        eyebrow="Documento institucional"
        title="Política de Privacidade"
        description="Compromisso com a proteção de dados pessoais e conformidade com a Lei Geral de Proteção de Dados (LGPD)."
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=80"
        imageAlt=""
        variant="primary"
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-muted-foreground leading-relaxed">
          <Sec title="1. Introdução">Este documento apresenta a política de tratamento de dados pessoais do Ponto de Cultura. O conteúdo é provisório e deverá ser revisado por profissional jurídico antes da publicação definitiva.</Sec>
          <Sec title="2. Dados coletados">Descrever quais dados são coletados por meio do site, formulários de contato e cadastros.</Sec>
          <Sec title="3. Finalidade">Descrever para quais finalidades os dados são utilizados.</Sec>
          <Sec title="4. Compartilhamento">Descrever com quem os dados podem ser compartilhados.</Sec>
          <Sec title="5. Direitos do titular">Listar os direitos previstos na LGPD, incluindo acesso, correção, portabilidade, eliminação e revogação de consentimento.</Sec>
          <Sec title="6. Cookies">Descrever a política de uso de cookies e o funcionamento do banner de consentimento.</Sec>
          <Sec title="7. Contato">Descrever canal para dúvidas e solicitações relacionadas a dados pessoais.</Sec>
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
