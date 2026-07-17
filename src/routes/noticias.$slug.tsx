import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NEWS, GALLERY } from "@/lib/site-data";
import { InternalHero } from "@/components/site/InternalHero";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Tag,
  ChevronRight,
  Link2,
  Mail,
  Instagram,
  Send,
  Home,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

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
  const gallery = GALLERY.slice(0, 6);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => { setShareUrl(window.location.href); }, []);
  const shareText = news.title;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    email: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const shareInstagram = async () => {
    // Instagram não permite compartilhamento direto para feed via web.
    // Copiamos o link e orientamos o usuário — comportamento de apoio.
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText, url: shareUrl });
        return;
      } catch {}
    }
    await copyLink();
    alert("Link copiado! Cole no seu Instagram (stories, bio ou direct) para compartilhar.");
  };

  return (
    <>
      <InternalHero
        eyebrow={news.category}
        title={news.title}
        description={news.excerpt}
        image={news.image}
        imageAlt=""
        variant="primary"
        pattern="ginga"
        compact
      >
        <div className="flex flex-wrap items-center gap-4 text-xs text-primary-foreground/90">
          <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" />{news.category}</span>
          <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{news.date}</span>
        </div>
      </InternalHero>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border bg-card">
        <ol className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-primary inline-flex items-center gap-1"><Home className="h-3 w-3" /> Início</Link></li>
          <ChevronRight className="h-3 w-3" />
          <li><Link to="/noticias" className="hover:text-primary">Notícias</Link></li>
          <ChevronRight className="h-3 w-3" />
          <li className="text-foreground truncate max-w-[50vw]" aria-current="page">{news.title}</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-neutral max-w-none">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Corpo do texto da notícia a ser inserido. Este conteúdo é provisório e deve ser substituído por texto editorial completo, respeitando estilo, tom e clareza institucional.
          </p>
          <h2 className="font-display text-xl font-bold mt-8 mb-3">Contexto da atividade</h2>
          <p className="text-muted-foreground leading-relaxed">
            Parágrafo com desdobramentos, contexto, falas e detalhes da atividade coberta. Substitua com conteúdo real.
          </p>
          <blockquote className="border-l-4 border-ouro pl-4 italic text-foreground my-6">
            "Trecho de fala ou destaque da matéria a ser inserido."
          </blockquote>
          <h2 className="font-display text-xl font-bold mt-8 mb-3">Desdobramentos</h2>
          <p className="text-muted-foreground leading-relaxed">
            Parágrafo com mais informações da cobertura, mencionando participantes, parcerias e continuidade das ações.
          </p>
          <h2 className="font-display text-xl font-bold mt-8 mb-3">Fechamento</h2>
          <p className="text-muted-foreground leading-relaxed">
            Parágrafo final da matéria a ser inserido.
          </p>
        </div>
      </article>

      {/* Galeria de imagens */}
      <section className="pb-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <div className="eyebrow text-laranja">Registros</div>
              <h2 className="mt-1 font-display text-2xl font-extrabold">Galeria de imagens</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Abrir imagem: ${g.title}`}
              >
                <img src={g.image} alt={g.alt} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-left text-xs text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition">
                  {g.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Compartilhamento */}
      <section className="pb-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="eyebrow text-vermelho">Compartilhar</div>
              <h3 className="mt-1 font-display text-lg font-bold">Ajude a divulgar esta notícia</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <ShareBtn href={shareLinks.whatsapp} label="Compartilhar no WhatsApp" className="bg-verde text-white hover:brightness-95">
                <WhatsAppIcon /> WhatsApp
              </ShareBtn>
              <ShareBtn href={shareLinks.facebook} label="Compartilhar no Facebook" className="bg-azul text-white hover:brightness-110">
                <FacebookIcon /> Facebook
              </ShareBtn>
              <ShareBtn href={shareLinks.telegram} label="Compartilhar no Telegram" className="bg-primary text-primary-foreground hover:brightness-110">
                <Send className="h-4 w-4" /> Telegram
              </ShareBtn>
              <ShareBtn href={shareLinks.email} label="Compartilhar por e-mail" className="bg-muted text-foreground hover:bg-muted/70">
                <Mail className="h-4 w-4" /> E-mail
              </ShareBtn>
              <button
                onClick={shareInstagram}
                aria-label="Compartilhar no Instagram"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white hover:brightness-105"
                style={{ background: "linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)" }}
              >
                <Instagram className="h-4 w-4" /> Instagram
              </button>
              <button
                onClick={copyLink}
                aria-label="Copiar link"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted"
              >
                <Link2 className="h-4 w-4" /> {copied ? "Link copiado!" : "Copiar link"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Relacionadas */}
      <section className="py-14 bg-muted/40">
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
          <div className="mt-10">
            <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Voltar às notícias
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de imagem"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white inline-flex items-center justify-center hover:bg-white/20"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 h-10 w-10 rounded-full bg-white/10 text-white inline-flex items-center justify-center hover:bg-white/20"
            aria-label="Anterior"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length)); }}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-4 h-10 w-10 rounded-full bg-white/10 text-white inline-flex items-center justify-center hover:bg-white/20"
            aria-label="Próxima"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? 0 : (i + 1) % gallery.length)); }}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[lightbox].image} alt={gallery[lightbox].alt} className="max-h-[80vh] w-full object-contain rounded-lg" />
            <figcaption className="mt-3 text-center text-sm text-white/80">{gallery[lightbox].caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

function ShareBtn({ href, label, className, children }: { href: string; label: string; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.08-1.39l-.36-.22-3.67.96.98-3.58-.24-.37A9.98 9.98 0 1 1 22 12c0 5.52-4.48 10-10 10Zm5.5-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.2H7.6V14h2.7v8h3.2Z" />
    </svg>
  );
}
