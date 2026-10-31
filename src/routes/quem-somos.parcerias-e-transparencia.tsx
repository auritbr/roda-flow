import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { CulturalBackdrop } from "@/components/site/CulturalBackdrop";
import { Button } from "@/components/ui/button";
import { archiveCategories, demonstrationDocuments, demonstrationText, publicDocuments, supportNetwork, type DemonstrationDocument } from "@/components/site/partnership-content";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Archive, ChevronDown, Download, Eye, FileText, FileSignature, FileCheck2, FolderKanban, Handshake, BookOpen, Landmark, Users, Music, CircleDot, HeartHandshake } from "lucide-react";
import { useState } from "react";

const heroImage = "https://images.unsplash.com/photo-1628375385872-f2f937986c91?auto=format&fit=crop&w=2000&q=80";
export const Route = createFileRoute("/quem-somos/parcerias-e-transparencia")({
  head: () => ({ meta: [
    { title: "Parcerias e Transparência — Motirô" },
    { name: "description", content: "Conheça as articulações de apoio da Motirô e consulte informações públicas sobre parcerias, projetos e documentos institucionais." },
    { property: "og:title", content: "Parcerias e Transparência — Motirô" },
    { property: "og:description", content: "Conheça as articulações de apoio da Motirô e consulte informações públicas sobre parcerias, projetos e documentos institucionais." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: heroImage },
    { name: "twitter:image", content: heroImage },
  ] }),
  component: ParceriasTransparencia,
});

const categoryIcons = [FolderKanban, Handshake, FileText, BookOpen, FileSignature, FileCheck2];
function ParceriasTransparencia() {
  const [open, setOpen] = useState<string | null>(archiveCategories[0]?.id ?? null);
  const [preview, setPreview] = useState<DemonstrationDocument | null>(null);
  function downloadExample(document: DemonstrationDocument) {
    const url = URL.createObjectURL(new Blob([demonstrationText(document)], { type: "text/plain;charset=utf-8" }));
    const link = window.document.createElement("a");
    link.href = url;
    link.download = `exemplo-demonstrativo-${document.category}.txt`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <>
    <InternalHero eyebrow="Gestão, parceria e compromisso" title="Parcerias e Transparência" description="A continuidade das ações da Motirô é construída por meio do trabalho comunitário, da atuação institucional e da articulação com parceiros e mecanismos de apoio." image={heroImage} imageAlt="Atividade cultural coletiva" variant="azul" pattern="territorio" compact />
    <section className="relative overflow-hidden py-16">
      <CulturalBackdrop />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="eyebrow text-laranja">Parcerias e financiamento</div>
        <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Articulações que ajudam a manter o trabalho em movimento</h2>
        <div className="mx-auto mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
          <p>A continuidade das atividades da Motirô depende da articulação entre trabalho comunitário, equipe, voluntariado, parceiros e mecanismos de apoio.</p>
          <p>Ao longo de sua trajetória, a instituição buscou recursos e parcerias para viabilizar projetos culturais, esportivos, educativos e sociais que integram o Além da Ginga.</p>
        </div>
      </div>
    </section>
    <section className="relative overflow-hidden bg-muted/40 py-16">
      <CulturalBackdrop variant="connections" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow text-laranja">Rede de apoio</div>
          <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Parcerias que fortalecem projetos e oportunidades</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Ao longo de sua trajetória, a Motirô estabeleceu articulações e contou com diferentes mecanismos de apoio relacionados ao desenvolvimento de suas ações culturais, esportivas, educativas e sociais.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {supportNetwork.map((partner) => <article key={partner.title} className="flex flex-col items-center rounded-2xl border border-border/60 bg-card px-5 py-7 text-center motion-safe:transition-shadow motion-safe:duration-200 hover:shadow-sm">
            <div className="flex h-28 w-full items-center justify-center">
              {partner.logo ? <img src={partner.logo} alt={partner.title} className="max-h-20 max-w-full object-contain" loading="lazy" /> : <h3 className={`font-display font-semibold leading-snug text-primary ${partner.acronym ? "text-2xl" : "text-lg"}`}>{partner.acronym ?? partner.title}</h3>}
            </div>
            {(partner.acronym || partner.logo) && <p className="mt-3 text-sm font-semibold leading-6">{partner.title}</p>}
            <p className="mt-3 text-xs leading-5 text-muted-foreground">{partner.kind}</p>
          </article>)}
        </div>
      </div>
    </section>
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary"><Archive className="size-3.5" aria-hidden="true" />Acervo</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">Acervo institucional</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">Acesse documentos, relatórios, informações sobre projetos apoiados, instrumentos de fomento e registros institucionais organizados por categoria para facilitar a consulta pública.</p>
        <div className="relative mt-8" aria-hidden="true"><svg className="absolute -top-6 left-1/4 h-8 w-24 text-ouro opacity-40" viewBox="0 0 120 30"><path d="M0 20 Q40 0 80 20 T120 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg><svg className="absolute -top-3 right-1/4 size-6 text-laranja opacity-50" viewBox="0 0 30 30"><rect x="10" y="10" width="10" height="10" transform="rotate(45 15 15)" fill="currentColor" /></svg></div>
      </div>
      <div className="mx-auto mt-10 max-w-4xl space-y-4 px-4 sm:px-6 lg:px-8">
        {archiveCategories.map((category, index) => {
          const documents = publicDocuments.filter((d) => d.category === category.id);
          const examples = demonstrationDocuments.filter((d) => d.category === category.id);
          const count = documents.length + examples.length;
          const Icon = categoryIcons[index] ?? FileText;
          const isOpen = open === category.id;
          return <div key={category.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Button variant="ghost" onClick={() => setOpen(isOpen ? null : category.id)} aria-expanded={isOpen} aria-controls={`archive-${category.id}`} className="flex h-auto w-full justify-start gap-4 whitespace-normal rounded-none px-5 py-5 text-left hover:bg-muted/40">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-ouro/15 text-primary"><Icon className="size-5" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block font-display text-lg font-bold leading-snug">{category.title}</span><span className="text-xs text-muted-foreground">{count} {count === 1 ? "documento" : "documentos"}{examples.length > 0 ? " · Conteúdo demonstrativo" : ""}</span></span>
              <ChevronDown className={`shrink-0 text-muted-foreground motion-safe:transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </Button>
            <div id={`archive-${category.id}`} inert={!isOpen} className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="min-h-0 overflow-hidden"><div className="border-t border-border px-5 py-4">
                {count === 0 ? <p className="text-sm leading-relaxed text-muted-foreground">Nenhum documento disponibilizado nesta categoria.</p> : <ul className="divide-y divide-border">{examples.map((d) => <li key={d.category} className="flex flex-col gap-4 py-3 sm:flex-row sm:items-center">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><FileText className="size-5" aria-hidden="true" /></span>
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex rounded-full bg-ouro/15 px-2.5 py-1 text-xs font-semibold text-primary">Exemplo</span>
                    <h3 className="mt-2 font-display font-bold leading-snug">{d.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{d.year && <span>{d.year} · </span>}{d.type}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2"><Button variant="outline" size="sm" className="rounded-full" onClick={() => setPreview(d)}><Eye />Visualizar</Button><Button size="sm" className="rounded-full" onClick={() => downloadExample(d)}><Download />Baixar</Button></div>
                </li>)}{documents.map((d) => <li key={d.url} className="py-4">
                  <h3 className="font-display font-bold">{d.title}</h3>
                  <dl className="mt-2 space-y-1 text-sm text-muted-foreground">{[["Projeto", d.project], ["Ano", d.year], ["Período de execução", d.period], ["Parceiro ou mecanismo de apoio", d.partner], ["Instrumento", d.instrument]].map(([label, value]) => value ? <div key={label}><dt className="inline font-semibold">{label}: </dt><dd className="inline">{value}</dd></div> : null)}</dl>
                  {d.description && <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>}
                  <div className="mt-3 flex flex-wrap gap-2"><Button asChild variant="outline" size="sm" className="rounded-full"><a href={d.url} target="_blank" rel="noopener noreferrer"><Eye />Visualizar</a></Button><Button asChild size="sm" className="rounded-full"><a href={d.url} download><Download />Baixar</a></Button></div>
                </li>)}</ul>}
              </div></div>
            </div>
          </div>;
        })}
      </div>
    </section>
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="eyebrow text-laranja">Trabalho em rede</div>
        <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">Apoio que se transforma em atividade, formação e participação</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">Parcerias e mecanismos de apoio ajudam a criar condições para que projetos culturais, esportivos, educativos e sociais sejam desenvolvidos e alcancem diferentes públicos em José de Freitas.</p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">{[{ title: "Cultura", icon: Music }, { title: "Esporte", icon: CircleDot }, { title: "Educação", icon: BookOpen }, { title: "Inclusão social", icon: HeartHandshake }].map(({ title, icon: Icon }) => <div key={title}><Icon className="mx-auto size-6 text-primary" aria-hidden="true" /><h3 className="mt-3 font-display text-sm font-bold">{title}</h3></div>)}</div>
      </div>
    </section>
    <FinalCta variant="azul" eyebrow="Transparência e diálogo" title="Informação clara também fortalece a confiança" description="Se precisar de informações complementares sobre parcerias, projetos apoiados ou documentos institucionais, entre em contato com a Motirô." buttons={[{ label: "Fale conosco", to: "/contato" }, { label: "Conheça nossos projetos", to: "/projetos", variant: "outline" }]} />
    <Dialog open={preview !== null} onOpenChange={(isOpen) => { if (!isOpen) setPreview(null); }}>
      <DialogContent className="max-h-[85vh] overflow-y-auto">
        <DialogTitle className="pr-6 leading-snug">Documento de exemplo</DialogTitle>
        <DialogDescription>Conteúdo demonstrativo. Não é um documento oficial da Motirô e não possui validade jurídica.</DialogDescription>
        {preview && <><div className="whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{demonstrationText(preview)}</div><Button className="justify-self-start rounded-full" onClick={() => downloadExample(preview)}><Download />Baixar exemplo</Button></>}
      </DialogContent>
    </Dialog>
  </>;
}
