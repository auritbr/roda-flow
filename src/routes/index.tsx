import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, BookOpen, Music2, Activity, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NEWS } from "@/lib/site-data";
import { initiatives } from "@/components/projects/detail-content";
import { SectionTitle } from "@/components/site/InternalHero";
import { HomeAgenda, HomeGallery, HomePartnerships, HomeTrajectory, HomeImpact } from "@/components/home/InstitutionalPreviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motirô — Cultura, esporte, educação e comunidade" },
      { name: "description", content: "Conheça a Motirô, Pontão de Cultura de José de Freitas, Piauí, e suas iniciativas culturais, esportivas, educativas e comunitárias." },
      { property: "og:title", content: "Motirô — Cultura, capoeira e comunidade" },
      { property: "og:description", content: "Conheça a Motirô, Pontão de Cultura de José de Freitas, Piauí, e suas iniciativas culturais, esportivas, educativas e comunitárias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=1200&h=630&q=80" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=1200&h=630&q=80" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Apresentacao />
      <Pilares />
      <ProjetosDestaque />
      <HomeAgenda />
      <NoticiasRecentes />
      <HomeTrajectory />
      <HomeImpact />
      <HomeGallery />
      <HomePartnerships />
      <CTAFinal />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-[460px] md:min-h-[560px] lg:min-h-[620px]">
      <img
        src="https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=2000&q=80"
        alt="Roda de Capoeira em atividade comunitária"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-vermelho/50" />
      <svg className="absolute -right-16 -top-16 h-[340px] w-[340px] opacity-40" viewBox="0 0 400 400" aria-hidden>
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="2 10" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="var(--creme)" strokeWidth="1.5" opacity="0.5" />
        <path d="M60 200 A 140 140 0 0 1 340 200" fill="none" stroke="var(--laranja)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg className="absolute -left-12 bottom-0 h-56 w-56 opacity-40" viewBox="0 0 300 300" aria-hidden>
        <path d="M20 260 Q 150 40 280 260" fill="none" stroke="var(--ouro)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="150" r="6" fill="var(--ouro)" />
        <circle cx="90" cy="200" r="4" fill="var(--laranja)" />
        <circle cx="220" cy="200" r="4" fill="var(--laranja)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-ouro/20 border border-ouro/40 px-3 py-1 text-xs eyebrow text-ouro">
            <Sparkles className="h-3 w-3" /> Pontão de Cultura
          </div>
          <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05]">
            Cultura, esporte e educação que{" "}
            <span className="text-ouro">transformam caminhos</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-primary-foreground/90 leading-relaxed">
            Há mais de duas décadas, a Motirô cria oportunidades de aprendizagem, convivência e desenvolvimento em José de Freitas, unindo cultura, esporte, educação e inclusão social.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-ouro px-5 py-2.5 text-sm font-semibold text-primary hover:brightness-95 transition">
              Conheça nossa trajetória <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/15 transition">
              Veja nossos projetos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="relative h-12 overflow-hidden bg-background" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0 40 Q 300 -10 600 30 T 1200 20" fill="none" stroke="var(--ouro)" strokeWidth="2" />
        <path d="M0 50 Q 300 10 600 40 T 1200 30" fill="none" stroke="var(--laranja)" strokeWidth="1.5" strokeDasharray="3 8" />
        <circle cx="200" cy="30" r="3" fill="var(--vermelho)" />
        <circle cx="600" cy="30" r="4" fill="var(--ouro)" />
        <circle cx="1000" cy="25" r="3" fill="var(--vermelho)" />
      </svg>
    </div>
  );
}

function Apresentacao() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_42%] lg:items-center">
        <div>
          <div className="eyebrow text-laranja">Quem somos</div>
          <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
            Cultura, ancestralidade e movimento
          </h2>
          <div className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              A Motirô é uma instituição cultural, esportiva, educativa e comunitária de José de Freitas, no Piauí, com mais de duas décadas de atuação. Reconhecida pelo Ministério da Cultura como Pontão de Cultura, construiu sua trajetória promovendo o acesso à cultura, ao esporte e à educação e contribuindo para o desenvolvimento social da comunidade.
            </p>
            <p>
              Sua história tem raízes na capoeira, manifestação cultural afro-brasileira que permanece viva por meio do Capoeira Motirô, projeto dedicado à formação cultural e esportiva de praticantes e atletas.
            </p>
            <p>Essa trajetória se ampliou e deu origem a uma atuação diversificada, reunida no Além da Ginga, iniciativa que integra diferentes atividades da instituição, como capoeira, teatro, leitura, cinema, handebol, dança, musicalidade, oficinas e ações de inclusão social.</p>
          </div>
          <Link to="/quem-somos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Conheça nossa história <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
        <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
          <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full border-2 border-ouro" aria-hidden />
          <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-laranja/20" aria-hidden />
          <img
            src="https://images.unsplash.com/photo-1777375430966-c028cf6e3293?auto=format&fit=crop&w=1200&q=80"
            alt="Berimbau em detalhe, símbolo da Capoeira"
            className="relative rounded-2xl object-cover aspect-[4/5] w-full shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  const pilares = [
    { icon: Music2, title: "Cultura", text: "Capoeira, teatro, dança, audiovisual, musicalidade e valorização das manifestações culturais afro-brasileiras e populares.", color: "bg-azul text-azul-foreground" },
    { icon: BookOpen, title: "Educação", text: "Leitura, escrita, formação cidadã, oficinas e experiências educativas que estimulam conhecimento, criatividade e participação.", color: "bg-ouro text-ouro-foreground" },
    { icon: Activity, title: "Esporte", text: "Formação esportiva, capoeira, handebol, treinamento e oportunidades de desenvolvimento físico, técnico e social.", color: "bg-vermelho text-vermelho-foreground" },
    { icon: HeartHandshake, title: "Inclusão", text: "Ações voltadas à convivência, ao respeito às diferenças e à ampliação das oportunidades de participação.", color: "bg-verde text-verde-foreground" },
  ] as const;
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden">
      <svg className="absolute -right-12 top-10 h-48 w-48 opacity-20" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="4 8" />
      </svg>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow text-ouro">Como atuamos</div>
          <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-extrabold">Cultura, esporte, educação e inclusão</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/80">A atuação da Motirô reúne diferentes áreas que se complementam e ampliam as possibilidades de participação, aprendizagem e desenvolvimento.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="group relative rounded-2xl bg-primary-foreground/5 border border-primary-foreground/15 p-5 backdrop-blur hover:bg-primary-foreground/10 transition">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${p.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">{p.text}</p>
                <div className="mt-3 h-1 w-10 rounded-full bg-ouro group-hover:w-16 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjetosDestaque() {
  const featured = ["alem-da-ginga", "capoeira-motiro", "teatro-motiro"]
    .flatMap(slug => initiatives.filter(item => item.slug === slug));
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Projetos" title="Iniciativas em destaque" description="Ações estruturantes que articulam formação, cultura e comunidade." />
          <Link to="/projetos" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featured.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-t from-${p.color}/80 via-${p.color}/20 to-transparent`} />
                <div className={`absolute top-3 left-3 rounded-full ${p.color} px-2.5 py-1 text-[10px] eyebrow`}>
                  {p.eyebrow}
                </div>
              </div>
              <div className="flex-1 p-5">
                <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                <Link
                  to="/projetos/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Conheça o projeto <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticiasRecentes() {
  // Legacy examples are tagged locally; this cannot turn them into official news.
  const items = NEWS.slice(0, 3).map(item => ({ ...item, demonstration: true }));
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Notícias" title="Últimas atualizações" />
          <Link to="/noticias" className="text-sm font-semibold text-primary hover:underline">Ver todas as notícias →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((n) => (
            <article key={n.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={n.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs">
                  <span className="eyebrow text-laranja">{n.category}</span>
                  <span className="text-muted-foreground">{n.demonstration ? "Conteúdo demonstrativo" : n.date}</span>
                </div>
                <h3 className="mt-2 font-display text-base font-bold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Ver exemplo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-vermelho text-vermelho-foreground py-16 md:py-20">
      <img src="https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=2000&q=80" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-vermelho via-vermelho/90 to-primary/70" />
      <svg className="absolute right-0 top-0 h-full w-1/2 opacity-30" viewBox="0 0 400 400" aria-hidden>
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="4 12" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="var(--ouro)" strokeWidth="1.5" />
      </svg>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="eyebrow text-ouro">Faça parte dessa história</div>
        <h2 className="mt-3 font-display text-2xl md:text-4xl font-extrabold leading-tight">
          Cultura, esporte e educação continuam criando novos caminhos
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-vermelho-foreground/90">
          Conheça os projetos da Motirô, acompanhe suas ações e descubra diferentes formas de se aproximar desse trabalho.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full bg-ouro text-primary hover:bg-ouro/90"><Link to="/projetos">Conheça os projetos <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="outline" className="rounded-full border-vermelho-foreground/40 bg-vermelho-foreground/10 text-vermelho-foreground hover:bg-vermelho-foreground/20 hover:text-vermelho-foreground"><Link to="/contato">Fale conosco</Link></Button>
        </div>
      </div>
    </section>
  );
}
