import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, BookOpen, MapPin, Music2, Quote } from "lucide-react";
import { PROJECTS, NEWS, GALLERY, TESTIMONIALS } from "@/lib/site-data";
import { SectionTitle } from "@/components/site/InternalHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ponto de Cultura Capoeira — Início" },
      { name: "description", content: "Capoeira, cultura afro-brasileira, educação e memória. Conheça nossos projetos e ações comunitárias." },
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
      <Atuacao />
      <NoticiasRecentes />
      <GaleriaDestaque />
      <Depoimentos />
      <CTAFinal />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=2000&q=80"
        alt="Roda de Capoeira em atividade comunitária"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-vermelho/50" />
      {/* Circles / arcs */}
      <svg className="absolute -right-20 -top-20 h-[420px] w-[420px] opacity-40" viewBox="0 0 400 400" aria-hidden>
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="2 10" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="var(--creme)" strokeWidth="1.5" opacity="0.5" />
        <path d="M60 200 A 140 140 0 0 1 340 200" fill="none" stroke="var(--laranja)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg className="absolute -left-16 bottom-0 h-72 w-72 opacity-40" viewBox="0 0 300 300" aria-hidden>
        <path d="M20 260 Q 150 40 280 260" fill="none" stroke="var(--ouro)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="150" r="6" fill="var(--ouro)" />
        <circle cx="90" cy="200" r="4" fill="var(--laranja)" />
        <circle cx="220" cy="200" r="4" fill="var(--laranja)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-ouro/20 border border-ouro/40 px-3 py-1 text-xs eyebrow text-ouro">
            <Sparkles className="h-3 w-3" /> Ponto de Cultura
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
            Capoeira que preserva histórias e{" "}
            <span className="text-ouro">transforma territórios</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            Um Ponto de Cultura dedicado à valorização da Capoeira, da cultura afro-brasileira, da educação, da memória e do fortalecimento comunitário.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-ouro px-5 py-3 text-sm font-semibold text-primary hover:brightness-95 transition">
              Conheça nossa trajetória <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/15 transition">
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
    <div className="relative h-16 overflow-hidden bg-background" aria-hidden>
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
  const stats = [
    { label: "Ano de fundação", value: "Ano a informar" },
    { label: "Território de atuação", value: "Cidade / UF" },
    { label: "Participantes", value: "Nº a informar" },
    { label: "Ações realizadas", value: "Nº a informar" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow text-laranja">Apresentação</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold leading-tight">
            Cultura, ancestralidade e movimento
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A Capoeira reúne corpo, música, memória, educação e pertencimento. Por meio de ações culturais, formativas e comunitárias, o Ponto de Cultura mantém viva essa tradição e cria novos caminhos para crianças, jovens, adultos e famílias.
            </p>
            <p>
              Atuamos na formação de novas gerações, no fortalecimento de mestres e educadores e na presença cultural em nosso território.
            </p>
          </div>
          <Link to="/quem-somos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Conheça nossa história <ArrowRight className="h-4 w-4" />
          </Link>

          <dl className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                <dt className="eyebrow text-vermelho">{s.label}</dt>
                <dd className="mt-1 font-display text-xl font-bold text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full border-2 border-ouro" aria-hidden />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-laranja/20" aria-hidden />
          <img
            src="https://images.unsplash.com/photo-1519683384663-1c317dd2e13c?auto=format&fit=crop&w=1200&q=80"
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
    { icon: Users, title: "Capoeira e formação", text: "Prática regular, graduação, corpo e ancestralidade em processos formativos continuados.", color: "azul" },
    { icon: Music2, title: "Cultura afro-brasileira", text: "Musicalidade, cantos, instrumentos e memória oral das tradições afro-brasileiras.", color: "ouro" },
    { icon: BookOpen, title: "Educação e cidadania", text: "Ações educativas que articulam Capoeira, escola, cidadania e direitos culturais.", color: "vermelho" },
    { icon: MapPin, title: "Memória e território", text: "Presença comunitária, rodas abertas e preservação da história local.", color: "verde" },
  ] as const;
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-24 relative overflow-hidden">
      <svg className="absolute -right-12 top-10 h-48 w-48 opacity-20" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="4 8" />
      </svg>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow text-ouro">Pilares</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold">Como atuamos</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="group relative rounded-2xl bg-primary-foreground/5 border border-primary-foreground/15 p-6 backdrop-blur hover:bg-primary-foreground/10 transition">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-${p.color} text-${p.color}-foreground`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">{p.text}</p>
                <div className="mt-4 h-1 w-10 rounded-full bg-ouro group-hover:w-16 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjetosDestaque() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Projetos" title="Iniciativas em destaque" description="Ações estruturantes que articulam formação, cultura e comunidade." />
          <Link to="/projetos" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-t from-${p.color}/80 via-${p.color}/20 to-transparent`} />
                <div className={`absolute top-3 left-3 rounded-full bg-${p.color} text-${p.color}-foreground px-2.5 py-1 text-[10px] eyebrow`}>
                  {p.area}
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="font-display text-xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                <Link
                  to="/projetos/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
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

function Atuacao() {
  const cards = [
    { category: "Oficinas", title: "Capoeira em processo formativo", image: "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1200&q=80", color: "azul" },
    { category: "Rodas abertas", title: "Encontros no território", image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1200&q=80", color: "vermelho" },
    { category: "Musicalidade", title: "Instrumentos e cantos", image: "https://images.unsplash.com/photo-1519683384663-1c317dd2e13c?auto=format&fit=crop&w=1200&q=80", color: "ouro" },
    { category: "Escolas", title: "Cultura nas escolas parceiras", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80", color: "verde" },
    { category: "Formação", title: "Educadores e mestres", image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1200&q=80", color: "laranja" },
    { category: "Comunidade", title: "Ações abertas ao público", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80", color: "azul" },
  ] as const;
  return (
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Atuação" title="Nossa presença no território" description="Ações realizadas com continuidade, integrando cultura, educação e comunidade." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl aspect-[4/5] border border-border">
              <img src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              <div className={`absolute inset-0 bg-gradient-to-t from-${c.color}/95 via-${c.color}/50 to-transparent`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="eyebrow text-white/85">{c.category}</div>
                <h3 className="mt-1 font-display text-xl font-bold leading-tight">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticiasRecentes() {
  const items = NEWS.slice(0, 3);
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Notícias" title="Últimas atualizações" />
          <Link to="/noticias" className="text-sm font-semibold text-primary hover:underline">Ver todas as notícias →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((n) => (
            <article key={n.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={n.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs">
                  <span className="eyebrow text-laranja">{n.category}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Ler notícia <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GaleriaDestaque() {
  const imgs = GALLERY.slice(0, 5);
  return (
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Galeria" title="Registros em imagens" />
          <Link to="/galeria" className="text-sm font-semibold text-primary hover:underline">Conheça nossa galeria →</Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <figure className="relative overflow-hidden rounded-2xl md:row-span-2 md:col-span-2 aspect-[4/3] md:aspect-auto">
            <img src={imgs[0].image} alt={imgs[0].alt} className="h-full w-full object-cover" loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/90 to-transparent text-primary-foreground">
              <div className="eyebrow text-ouro">{imgs[0].category}</div>
              <div className="font-display font-bold">{imgs[0].title}</div>
            </figcaption>
          </figure>
          {imgs.slice(1, 5).map((i) => (
            <figure key={i.title} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={i.image} alt={i.alt} className="h-full w-full object-cover" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-primary/85 to-transparent text-primary-foreground text-xs font-semibold">
                {i.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Depoimentos" title="Vozes da nossa comunidade" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Quote className="absolute -top-3 -left-3 h-10 w-10 text-ouro" fill="currentColor" />
              <p className="text-sm text-foreground leading-relaxed italic">"{t.text}"</p>
              <footer className="mt-5 border-t border-border pt-4">
                <div className="font-display font-bold text-sm">{t.name}</div>
                <div className="eyebrow text-vermelho">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-vermelho text-vermelho-foreground py-20 md:py-24">
      <img src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=2000&q=80" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-vermelho via-vermelho/90 to-primary/70" />
      <svg className="absolute right-0 top-0 h-full w-1/2 opacity-30" viewBox="0 0 400 400" aria-hidden>
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="4 12" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="var(--ouro)" strokeWidth="1.5" />
      </svg>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="eyebrow text-ouro">Participe</div>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold leading-tight">
          Cada roda fortalece uma história coletiva
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-vermelho-foreground/90">
          Conheça, acompanhe e participe das ações que mantêm viva a Capoeira em nosso território.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-ouro text-primary px-5 py-3 text-sm font-semibold hover:brightness-95">
            Fale conosco <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border-2 border-vermelho-foreground/40 bg-vermelho-foreground/10 px-5 py-3 text-sm font-semibold hover:bg-vermelho-foreground/20">
            Conheça os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
