import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { DOCUMENTS } from "@/lib/site-data";
import { FileText, Download, Eye } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Ponto de Cultura Capoeira" },
      { name: "description", content: "Documentos institucionais, relatórios, prestação de contas e políticas de transparência." },
    ],
  }),
  component: Transparencia,
});

function Transparencia() {
  const [cat, setCat] = useState<string>("Todos");
  const [year, setYear] = useState<string>("Todos");

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(DOCUMENTS.map((d) => d.category)))], []);
  const years = useMemo(() => ["Todos", ...Array.from(new Set(DOCUMENTS.map((d) => d.year)))], []);
  const filtered = DOCUMENTS.filter((d) => (cat === "Todos" || d.category === cat) && (year === "Todos" || d.year === year));

  return (
    <>
      <InternalHero
        eyebrow="Institucional"
        title="Transparência"
        description="Compromisso público com clareza, responsabilidade e prestação de contas."
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Documentos e registros institucionais"
        variant="azul"
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="eyebrow text-laranja">Política de transparência</div>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Disponibilizamos documentos institucionais, relatórios de atividades, prestações de contas, certidões, políticas internas e informações sobre parcerias, em respeito ao compromisso público com a transparência e a boa gestão.
            </p>
          </div>

          {/* Filtros */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <FilterSelect label="Categoria" value={cat} onChange={setCat} options={categories} />
            <FilterSelect label="Ano" value={year} onChange={setYear} options={years} />
          </div>

          <div className="mt-6 space-y-3">
            {filtered.map((d) => (
              <article key={d.title} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ouro/20 text-primary shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="eyebrow text-vermelho">{d.category}</span>
                    <span className="text-muted-foreground">· {d.year}</span>
                    <span className="text-muted-foreground">· {d.type}</span>
                  </div>
                  <h3 className="mt-1 font-display font-bold">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs font-semibold hover:bg-muted">
                    <Eye className="h-3.5 w-3.5" /> Visualizar
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-2 text-xs font-semibold hover:bg-primary/90">
                    <Download className="h-3.5 w-3.5" /> Baixar
                  </button>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">Nenhum documento encontrado para os filtros selecionados.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">{label}:</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
