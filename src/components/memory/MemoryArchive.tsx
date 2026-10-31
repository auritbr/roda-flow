import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SectionTitle } from "@/components/site/InternalHero";
import { FileText, Award, Newspaper, CalendarDays, Images, History, ChevronDown, Eye, Download } from "lucide-react";
import { memoryCategories, memoryExamples, memoryContent, memoryExampleText, type MemoryExample } from "./content";
const icons = [FileText, Award, Newspaper, CalendarDays, Images, History];
export function MemoryArchive() {
  const [open, setOpen] = useState<string | null>(memoryCategories[0]?.id ?? null);
  const [preview, setPreview] = useState<MemoryExample | null>(null);
  function download(example: MemoryExample) {
    const url = URL.createObjectURL(new Blob([memoryExampleText(example)], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `memoria-exemplo-${example.id}.txt`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <>
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center eyebrow="Consulta pública" title="Acervo institucional de memória" description={memoryContent.archive} />
        <div className="mt-10 space-y-4">{memoryCategories.map((category, index) => {
          const Icon = icons[index] ?? FileText;
          const items = memoryExamples.filter(item => item.category === category.id);
          const expanded = open === category.id;
          return <div key={category.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Button variant="ghost" aria-expanded={expanded} aria-controls={`memory-${category.id}`} onClick={() => setOpen(expanded ? null : category.id)} className="flex h-auto w-full justify-start gap-4 whitespace-normal rounded-none px-5 py-5 text-left hover:bg-muted/40">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-ouro/15 text-primary"><Icon className="size-5" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block font-display text-lg font-bold leading-snug">{category.title}</span><span className="text-xs text-muted-foreground">{items.length} itens · Conteúdo demonstrativo</span></span>
              <ChevronDown aria-hidden="true" className={`shrink-0 text-muted-foreground motion-safe:transition-transform ${expanded ? "rotate-180" : ""}`} />
            </Button>
            <div id={`memory-${category.id}`} inert={!expanded} className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="min-h-0 overflow-hidden"><ul className="divide-y divide-border border-t border-border px-5 py-4">{items.map(item => <li key={item.id} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></span>
              <div className="min-w-0 flex-1"><span className="inline-flex rounded-full bg-ouro/15 px-2.5 py-1 text-xs font-semibold text-primary">Exemplo</span><h3 className="mt-2 font-display font-bold leading-snug">{item.title}</h3><p className="mt-2 text-xs text-muted-foreground">{item.type}</p></div>
              <div className="flex shrink-0 flex-wrap gap-2"><Button variant="outline" size="sm" className="rounded-full" onClick={() => setPreview(item)}><Eye />Visualizar</Button><Button size="sm" className="rounded-full" onClick={() => download(item)}><Download />Baixar</Button></div>
            </li>)}</ul></div></div>
          </div>;
        })}</div>
      </div>
    </section>
    <Dialog open={preview !== null} onOpenChange={value => { if (!value) setPreview(null); }}><DialogContent className="max-h-[85vh] overflow-y-auto"><DialogTitle className="pr-6">Documento de exemplo</DialogTitle><DialogDescription>Conteúdo demonstrativo. Não é um registro oficial da Motirô e não possui validade jurídica.</DialogDescription>{preview && <><div className="whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{memoryExampleText(preview)}</div><Button className="justify-self-start rounded-full" onClick={() => download(preview)}><Download />Baixar exemplo</Button></>}</DialogContent></Dialog>
  </>;
}