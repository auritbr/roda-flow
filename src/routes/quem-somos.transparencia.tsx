import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { DOCUMENTS } from "@/lib/site-data";
import {
  Archive,
  ChevronDown,
  Download,
  Eye,
  FileText,
  FileSignature,
  FileCheck2,
  FolderKanban,
  Handshake,
  Scale,
  BookOpen,
} from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Acervo institucional — Transparência" },
      { name: "description", content: "Documentos, relatórios, prestação de contas e políticas institucionais organizados por categoria." },
    ],
  }),
  component: Transparencia,
});

// Mapa de agrupamento amigável para os cards em acordeão
const CATEGORY_GROUPS: { id: string; label: string; icon: any; match: (cat: string) => boolean }[] = [
  { id: "oficiais", label: "Documentos oficiais e institucionais", icon: FileSignature, match: (c) => /institucion|atas/i.test(c) },
  { id: "portfolios", label: "Portfólios e prestação de contas", icon: FolderKanban, match: (c) => /portfólio|portfolios|prestação/i.test(c) },
  { id: "relatorios", label: "Relatórios de atividades", icon: FileText, match: (c) => /relatório/i.test(c) },
  { id: "certidoes", label: "Certidões e regularidade", icon: FileCheck2, match: (c) => /certid/i.test(c) },
  { id: "parcerias", label: "Parcerias e termos", icon: Handshake, match: (c) => /parceria|termo/i.test(c) },
  { id: "politicas", label: "Políticas e normas internas", icon: Scale, match: (c) => /polític|norma/i.test(c) },
];

function Transparencia() {
  const grouped = useMemo(() => {
    const map: Record<string, typeof DOCUMENTS> = {};
    for (const g of CATEGORY_GROUPS) map[g.id] = [];
    const outros: typeof DOCUMENTS = [];
    for (const d of DOCUMENTS) {
      const g = CATEGORY_GROUPS.find((x) => x.match(d.category));
      if (g) map[g.id].push(d);
      else outros.push(d);
    }
    return { map, outros };
  }, []);

  const [open, setOpen] = useState<string | null>(CATEGORY_GROUPS[0].id);

  return (
    <>
      <InternalHero
        eyebrow="Institucional"
        title="Transparência"
        description="Compromisso público com clareza, responsabilidade e prestação de contas."
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Registros e documentos institucionais"
        variant="azul"
        pattern="territorio"
        compact
      />

      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary">
            <Archive className="h-3.5 w-3.5" /> Acervo
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Acervo institucional
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Acesse documentos, relatórios, portfólios, certidões e registros institucionais organizados por categoria para facilitar a consulta pública.
          </p>

          {/* micrografismos sutis */}
          <div className="relative mt-8">
            <svg className="absolute -top-6 left-1/4 h-8 w-24 opacity-40" viewBox="0 0 120 30" aria-hidden>
              <path d="M0 20 Q 40 0 80 20 T 120 15" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="absolute -top-3 right-1/4 h-6 w-6 opacity-50" viewBox="0 0 30 30" aria-hidden>
              <rect x="10" y="10" width="10" height="10" transform="rotate(45 15 15)" fill="var(--laranja)" />
            </svg>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-10 space-y-4">
          {CATEGORY_GROUPS.map((g) => {
            const items = grouped.map[g.id] ?? [];
            if (items.length === 0) return null;
            const isOpen = open === g.id;
            const Icon = g.icon;
            return (
              <div key={g.id} className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : g.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 px-5 py-5 text-left hover:bg-muted/40 transition"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ouro/15 text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="font-display text-lg font-bold block truncate">{g.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {items.length} {items.length === 1 ? "documento" : "documentos"}
                    </span>
                  </span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-4 space-y-2">
                    {items.map((d) => (
                      <article key={d.title} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center rounded-xl border border-border/70 bg-background/60 p-3 hover:border-primary/40 transition">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap text-xs text-muted-foreground">
                            <span>{d.year}</span>
                            <span>·</span>
                            <span>{d.type}</span>
                          </div>
                          <h3 className="mt-0.5 font-display font-bold">{d.title}</h3>
                          <p className="text-sm text-muted-foreground">{d.description}</p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <button className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted">
                            <Eye className="h-3.5 w-3.5" /> Visualizar
                          </button>
                          <button className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold hover:bg-primary/90">
                            <Download className="h-3.5 w-3.5" /> Baixar
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {grouped.outros.length > 0 && (
            <div className="rounded-2xl border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
              {grouped.outros.length} documento(s) sem categoria atribuída.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
