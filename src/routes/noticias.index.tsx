import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { NEWS } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
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
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["Todas", ...Array.from(new Set(NEWS.map((n) => n.category)))], []);
  const years = useMemo(() => ["Todos", ...Array.from(new Set(NEWS.map((n) => n.date)))], []);

  const filtered = NEWS.filter((n) => (cat === "Todas" || n.category === cat) && (year === "Todos" || n.date === year));
  const featured = filtered[0];
  const rest = filtered.slice(1);
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const paged = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <InternalHero
        eyebrow="Comunicação"
        title="Notícias"
        description="Coberturas, coberturas de eventos, projetos e ações do Ponto de Cultura."
        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Encontro cultural comunitário"
        variant="ouro"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtros */}
          <div className="flex flex-wrap items-center gap-3">
            <FilterSelect label="Categoria" value={cat} onChange={(v) => { setCat(v); setPage(1); }} options={categories} />
            <FilterSelect label="Ano" value={year} onChange={(v) => { setYear(v); setPage(1); }} options={years} />
          </div>

          {/* Destaque */}
          {featured && (
            <Link to="/noticias/$slug" params={{ slug: featured.slug }} className="mt-8 group grid gap-6 md:grid-cols-2 rounded-3xl border border-border bg-card overflow-hidden hover:shadow-lg transition">
              <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                <img src={featured.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs">
                  <span className="eyebrow text-vermelho">{featured.category}</span>
                  <span className="text-muted-foreground">{featured.date}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold leading-tight">{featured.title}</h2>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Ler notícia <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Paginação">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? "page" : undefined}
                  className={`h-9 w-9 rounded-full text-sm font-semibold border ${page === i + 1 ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
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
