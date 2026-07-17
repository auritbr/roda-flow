import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { NEWS } from "@/lib/site-data";
import { ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Ponto de Cultura Capoeira" },
      { name: "description", content: "Acompanhe as notícias, projetos, eventos e ações do Ponto de Cultura." },
    ],
  }),
  component: Noticias,
});

const PAGE_SIZE = 6;

function Noticias() {
  const [cat, setCat] = useState("Todas");
  const [year, setYear] = useState("Todos");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["Todas", ...Array.from(new Set(NEWS.map((n) => n.category)))], []);
  const years = useMemo(() => ["Todos", ...Array.from(new Set(NEWS.map((n) => n.date)))], []);

  const q = query.trim().toLowerCase();
  const filtered = NEWS.filter((n) =>
    (cat === "Todas" || n.category === cat) &&
    (year === "Todos" || n.date === year) &&
    (q === "" || n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q))
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <>
      <InternalHero
        eyebrow="Comunicação"
        title="Notícias"
        description="Coberturas de eventos, projetos e ações do Ponto de Cultura."
        image="https://images.unsplash.com/photo-1653476597388-b9a2d5f688d6?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Encontro cultural comunitário"
        variant="ouro"
        pattern="encontro"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              Acompanhe registros das nossas atividades — rodas, oficinas, encontros formativos, apresentações e ações no território.
            </p>
          </div>

          {/* Filtros + Busca */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <FilterSelect label="Categoria" value={cat} onChange={(v) => { setCat(v); setPage(1); }} options={categories} />
              <FilterSelect label="Ano" value={year} onChange={(v) => { setYear(v); setPage(1); }} options={years} />
            </div>
            <label className="relative w-full md:w-72">
              <span className="sr-only">Buscar notícia</span>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Buscar notícia"
                className="w-full rounded-full border border-border bg-card pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paged.map((n) => (
              <article key={n.slug} className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={n.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="eyebrow text-laranja">{n.category}</span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-2 font-display font-bold leading-snug">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                  <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                    Ler notícia <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
            {paged.length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
                Nenhuma notícia encontrada com os filtros atuais.
              </div>
            )}
          </div>

          {/* Paginação numérica */}
          {totalPages > 1 && (
            <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />
          )}
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

function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (n: number) => void }) {
  const pages: (number | "…")[] = [];
  const push = (v: number | "…") => pages.push(v);
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) push(i);
  } else {
    push(1);
    if (page > 3) push("…");
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) push(i);
    if (page < totalPages - 2) push("…");
    push(totalPages);
  }

  return (
    <nav className="mt-12 flex items-center justify-center gap-1.5" aria-label="Paginação">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Página anterior"
        className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} className="px-2 text-muted-foreground select-none">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            aria-current={page === p ? "page" : undefined}
            className={`h-9 w-9 rounded-full text-sm font-semibold border ${page === p ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Próxima página"
        className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
