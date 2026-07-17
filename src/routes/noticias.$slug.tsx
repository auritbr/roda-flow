import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NEWS } from "@/lib/site-data";
import { ArrowLeft, Share2, Calendar, Tag } from "lucide-react";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const news = NEWS.find((n) => n.slug === params.slug);
    if (!news) throw notFound();
    return { news };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.news.title} — Notícias` },
          { name: "description", content: loaderData.news.excerpt },
          { property: "og:title", content: loaderData.news.title },
          { property: "og:description", content: loaderData.news.excerpt },
          { property: "og:image", content: loaderData.news.image },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Notícia não encontrada" }, { name: "robots", content: "noindex" }],
  }),
  component: NoticiaDetail,
});

function NoticiaDetail() {
  const { news } = Route.useLoaderData();
  const related = NEWS.filter((n) => n.slug !== news.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-primary text-primary-foreground">
          <img src={news.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex items-center gap-3 text-xs">
              <span className="eyebrow text-ouro"><Tag className="inline h-3 w-3 mr-1" />{news.category}</span>
              <span className="text-primary-foreground/80"><Calendar className="inline h-3 w-3 mr-1" />{news.date}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold leading-tight">{news.title}</h1>
            <p className="mt-4 text-lg text-primary-foreground/90">{news.excerpt}</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-neutral max-w-none">
          <img src={news.image} alt="" className="rounded-2xl w-full aspect-video object-cover mb-6" />
          <p className="text-muted-foreground leading-relaxed">Corpo do texto da notícia a ser inserido. Este conteúdo é provisório e deve ser substituído por texto editorial completo, respeitando estilo, tom e clareza institucional.</p>
          <h2 className="font-display text-xl font-bold mt-8 mb-3">Intertítulo</h2>
          <p className="text-muted-foreground leading-relaxed">Parágrafo com desdobramentos, contexto, falas e detalhes da atividade coberta. Substitua com conteúdo real.</p>
          <blockquote className="border-l-4 border-ouro pl-4 italic text-foreground my-6">"Trecho de fala ou destaque da matéria a ser inserido."</blockquote>
          <h2 className="font-display text-xl font-bold mt-8 mb-3">Fechamento</h2>
          <p className="text-muted-foreground leading-relaxed">Parágrafo final da matéria a ser inserido.</p>

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Voltar às notícias
            </Link>
            <button
              onClick={() => { if (navigator.share) navigator.share({ title: news.title, url: window.location.href }).catch(() => {}); else navigator.clipboard?.writeText(window.location.href); }}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm font-semibold hover:bg-muted"
            >
              <Share2 className="h-4 w-4" /> Compartilhar
            </button>
          </div>
        </div>
      </article>

      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold mb-6">Notícias relacionadas</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition">
                <img src={n.image} alt="" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5">
                  <div className="eyebrow text-laranja">{n.category}</div>
                  <h3 className="mt-1 font-display font-bold leading-snug">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
