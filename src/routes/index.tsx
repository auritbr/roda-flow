import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Users,
  BookOpen,
  MapPin,
  Music2,
  Activity,
  Mic2,
  Landmark,
  HeartHandshake,
  Music,
  Drum,
  CircleDot,
} from "lucide-react";
import { PROJECTS, NEWS } from "@/lib/site-data";
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
      <CapoeiraEmMovimento />
      <Instrumentos />
      <NoticiasRecentes />
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
            <Sparkles className="h-3 w-3" /> Ponto de Cultura
          </div>
          <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05]">
            Capoeira que preserva histórias e{" "}
            <span className="text-ouro">transforma territórios</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-primary-foreground/90 leading-relaxed">
            Um Ponto de Cultura dedicado à valorização da Capoeira, da cultura afro-brasileira, da educação, da memória e do fortalecimento comunitário.
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
  const stats = [
    { label: "Ano de fundação", value: "Ano a informar" },
    { label: "Território de atuação", value: "Cidade / UF" },
    { label: "Participantes", value: "Nº a informar" },
    { label: "Ações realizadas", value: "Nº a informar" },
  ];
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
              A Capoeira reúne corpo, música, memória, educação e pertencimento. Por meio de ações culturais, formativas e comunitárias, o Ponto de Cultura mantém viva essa tradição e cria novos caminhos para crianças, jovens, adultos e famílias.
            </p>
            <p>
              Atuamos na formação de novas gerações, no fortalecimento de mestres e educadores e na presença cultural em nosso território.
            </p>
          </div>
          <Link to="/quem-somos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Conheça nossa história <ArrowRight className="h-4 w-4" />
          </Link>

          <dl className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-3">
                <dt className="eyebrow text-vermelho text-[10px]">{s.label}</dt>
                <dd className="mt-1 font-display text-base md:text-lg font-bold text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
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
    { icon: Users, title: "Capoeira e formação", text: "Prática regular, graduação, corpo e ancestralidade em processos formativos continuados.", color: "azul" },
    { icon: Music2, title: "Cultura afro-brasileira", text: "Musicalidade, cantos, instrumentos e memória oral das tradições afro-brasileiras.", color: "ouro" },
    { icon: BookOpen, title: "Educação e cidadania", text: "Ações educativas que articulam Capoeira, escola, cidadania e direitos culturais.", color: "vermelho" },
    { icon: MapPin, title: "Memória e território", text: "Presença comunitária, rodas abertas e preservação da história local.", color: "verde" },
  ] as const;
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden">
      <svg className="absolute -right-12 top-10 h-48 w-48 opacity-20" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="4 8" />
      </svg>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow text-ouro">Pilares</div>
          <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-extrabold">Como atuamos</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="group relative rounded-2xl bg-primary-foreground/5 border border-primary-foreground/15 p-5 backdrop-blur hover:bg-primary-foreground/10 transition">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-${p.color} text-${p.color}-foreground`}>
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
          {PROJECTS.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-t from-${p.color}/80 via-${p.color}/20 to-transparent`} />
                <div className={`absolute top-3 left-3 rounded-full bg-${p.color} text-${p.color}-foreground px-2.5 py-1 text-[10px] eyebrow`}>
                  {p.area}
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

function Atuacao() {
  const cards = [
    { category: "Oficinas", title: "Capoeira em processo formativo", image: "https://images.unsplash.com/photo-1583166614297-a97b68d5cead?auto=format&fit=crop&w=1200&q=80", color: "azul" },
    { category: "Rodas abertas", title: "Encontros no território", image: "https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=1200&q=80", color: "vermelho" },
    { category: "Musicalidade", title: "Instrumentos e cantos", image: "https://images.unsplash.com/photo-1777375430966-c028cf6e3293?auto=format&fit=crop&w=1200&q=80", color: "ouro" },
    { category: "Escolas", title: "Cultura nas escolas parceiras", image: "https://images.unsplash.com/photo-1653476597388-b9a2d5f688d6?auto=format&fit=crop&w=1200&q=80", color: "verde" },
    { category: "Formação", title: "Educadores e mestres", image: "https://images.unsplash.com/photo-1623759126376-f3f1fb8c7f37?auto=format&fit=crop&w=1200&q=80", color: "laranja" },
    { category: "Comunidade", title: "Ações abertas ao público", image: "https://images.unsplash.com/photo-1628375385872-f2f937986c91?auto=format&fit=crop&w=1200&q=80", color: "azul" },
  ] as const;
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? cards : cards.slice(0, 4);
  return (
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Atuação" title="Nossa presença no território" description="Ações realizadas com continuidade, integrando cultura, educação e comunidade." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-xl border border-border h-[280px] sm:h-[300px] lg:h-[320px]">
              <img src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              <div className={`absolute inset-0 bg-gradient-to-t from-${c.color}/95 via-${c.color}/45 to-transparent`} />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <div className="eyebrow text-white/85 text-[10px]">{c.category}</div>
                <h3 className="mt-1 font-display text-base font-bold leading-tight">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {!showAll && cards.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
            >
              Conheça todas as frentes de atuação <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function CapoeiraEmMovimento() {
  const blocos = [
    { icon: Activity, title: "Corpo e movimento", text: "A ginga, os golpes, as esquivas e os jogos desenvolvem consciência corporal, disciplina e expressão.", color: "azul" },
    { icon: Mic2, title: "Música e oralidade", text: "Berimbau, atabaque, pandeiro, cantos e histórias conduzem a roda e transmitem conhecimentos.", color: "ouro" },
    { icon: Landmark, title: "Memória e ancestralidade", text: "Os saberes dos mestres, das comunidades e das gerações anteriores orientam a continuidade da tradição.", color: "vermelho" },
    { icon: HeartHandshake, title: "Comunidade e pertencimento", text: "A roda cria vínculos, acolhe diferentes gerações e fortalece a relação entre cultura e território.", color: "verde" },
  ] as const;
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <svg className="absolute -left-10 top-10 h-40 w-40 opacity-20" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="3 8" />
        <path d="M20 100 A 80 80 0 0 1 180 100" fill="none" stroke="var(--vermelho)" strokeWidth="2" />
      </svg>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle eyebrow="Uma cultura viva" title="Capoeira em movimento" description="A Capoeira se mantém viva quando seus saberes circulam entre gerações. Corpo, música, memória, oralidade e convivência se encontram em experiências que fortalecem identidades e ampliam o acesso à cultura afro-brasileira." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocos.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="relative rounded-2xl border border-border bg-card p-5 hover:shadow-md transition">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-${b.color} text-${b.color}-foreground`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-base font-bold leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                <svg className="absolute right-3 top-3 h-6 w-6 opacity-60" viewBox="0 0 24 24" aria-hidden>
                  <rect x="8" y="8" width="8" height="8" transform="rotate(45 12 12)" fill={`var(--${b.color})`} />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Instrumentos() {
  const items = [
    { icon: Music, name: "Berimbau", text: "Conduz o ritmo, orienta o jogo e ocupa posição central na musicalidade da roda." },
    { icon: Drum, name: "Atabaque", text: "Marca a pulsação e acrescenta profundidade ao conjunto de instrumentos." },
    { icon: CircleDot, name: "Pandeiro", text: "Complementa o ritmo com leveza, variações e respostas sonoras." },
    { icon: Music2, name: "Agogô", text: "Acrescenta timbres metálicos e reforça a organização rítmica." },
    { icon: Activity, name: "Reco-reco", text: "Produz textura sonora e amplia a riqueza musical da roda." },
    { icon: Sparkles, name: "Caxixi", text: "Integrado ao berimbau, participa da construção do ritmo e de suas variações." },
  ];
  return (
    <section className="relative py-16 md:py-20 bg-creme/50 overflow-hidden" style={{ backgroundColor: "color-mix(in oklab, var(--ouro) 10%, var(--background))" }}>
      <svg className="absolute -right-20 -bottom-20 h-96 w-96 opacity-15" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="90" fill="none" stroke="var(--vermelho)" strokeWidth="2" strokeDasharray="4 10" />
        <path d="M10 100 Q 100 -20 190 100" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Ritmo e tradição" title="Instrumentos que conduzem a roda" description="A musicalidade organiza o jogo, preserva histórias e conecta cada participante ao ritmo coletivo da Capoeira." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            const accents = ["vermelho", "ouro", "azul", "laranja", "verde", "primary"] as const;
            const c = accents[i % accents.length];
            return (
              <div key={it.name} className="group relative rounded-2xl border border-border bg-card p-5 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-${c}/15`} style={{ color: `var(--${c})` }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{it.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                <div className={`mt-4 h-1 w-10 rounded-full`} style={{ backgroundColor: `var(--${c})` }} />
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Conheça nossos projetos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NoticiasRecentes() {
  const items = NEWS.slice(0, 3);
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
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-2 font-display text-base font-bold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
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
        <div className="eyebrow text-ouro">Participe</div>
        <h2 className="mt-3 font-display text-2xl md:text-4xl font-extrabold leading-tight">
          Cada roda fortalece uma história coletiva
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-vermelho-foreground/90">
          Conheça, acompanhe e participe das ações que mantêm viva a Capoeira em nosso território.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-ouro text-primary px-5 py-2.5 text-sm font-semibold hover:brightness-95">
            Fale conosco <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border-2 border-vermelho-foreground/40 bg-vermelho-foreground/10 px-5 py-2.5 text-sm font-semibold hover:bg-vermelho-foreground/20">
            Conheça os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
