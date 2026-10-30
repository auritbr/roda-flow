import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { Activity, BookOpen, Clapperboard, Drama, HeartHandshake, Music2, Users, Landmark, Sparkles, Volleyball, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const PHOTOS = {
  roda: "https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=2000&q=80",
  comunidade: "https://images.unsplash.com/photo-1583166614297-a97b68d5cead?auto=format&fit=crop&w=1200&q=80",
};

const APRESENTACAO = [
  "A Motirô é uma instituição cultural, esportiva, educativa e comunitária que desenvolve, há mais de duas décadas, atividades voltadas à formação humana, à inclusão social e à valorização da cultura em José de Freitas, no Piauí.",
  "Reconhecida pelo Ministério da Cultura como Pontão de Cultura, a Motirô desempenha um papel importante na articulação e no desenvolvimento de ações culturais no município. Segundo a instituição, é o único Pontão de Cultura de José de Freitas, reconhecimento que reforça a relevância de sua trajetória e a contribuição de seu trabalho para a cultura local.",
  "Sua história começou com a capoeira, manifestação cultural afro-brasileira que se tornou uma importante ferramenta de educação, desenvolvimento pessoal, formação esportiva e transformação social. Com o passar dos anos, entretanto, sua atuação ultrapassou os limites da roda de capoeira, incorporando outras linguagens e atividades, como teatro, leitura, cinema, handebol, dança, samba de roda, maculelê, oficinas e palestras educativas. Todas essas frentes de atuação estão integradas ao Além da Ginga, iniciativa que representa a proposta mais ampla de formação cultural, esportiva, educativa e social da Motirô.",
  "A Motirô acredita que a cultura, a educação e o esporte são instrumentos fundamentais para ampliar oportunidades, fortalecer vínculos comunitários e contribuir para a formação de cidadãos conscientes de seus direitos e responsabilidades.",
  "Grande parte de suas atividades é oferecida gratuitamente, com atenção especial a crianças, adolescentes e jovens, sobretudo aqueles que vivem em contextos de vulnerabilidade social. A instituição também promove ações de inclusão e acolhe pessoas com deficiência, buscando ampliar as oportunidades de participação e convivência.",
  "Mais do que oferecer atividades culturais e esportivas, a Motirô procura construir oportunidades para que seus participantes desenvolvam habilidades, descubram seus talentos, fortaleçam a autoestima e encontrem novos caminhos para suas vidas.",
];
const HISTORIA = [
  "A história da Motirô começa por volta do ano 2000, a partir do trabalho com a capoeira em José de Freitas. Desde o início, a proposta foi utilizar essa manifestação cultural como instrumento de formação, oferecendo às crianças e aos adolescentes acesso gratuito a uma atividade que combina movimento, musicalidade, disciplina, convivência, história e valores sociais.",
  "O trabalho foi crescendo e conquistando espaço na comunidade. A capoeira passou a representar não apenas uma prática esportiva, mas também uma oportunidade de educação, acolhimento e desenvolvimento humano.",
  "Ao longo de sua trajetória, a instituição acompanhou o crescimento de crianças que, com o passar do tempo, se tornaram adolescentes, jovens, adultos, atletas, instrutores e colaboradores. Essa convivência entre diferentes gerações é uma característica importante do trabalho desenvolvido pela Motirô.",
  "Com a ampliação das atividades, surgiram novas possibilidades de atuação. A instituição passou a trabalhar também com teatro, leitura, cinema, handebol, dança e outras expressões culturais, reconhecendo que cada pessoa possui interesses, talentos e formas diferentes de aprender e participar.",
  "Essa ampliação consolidou uma proposta de atuação mais abrangente, reunida no Além da Ginga, que passou a representar o conjunto das atividades desenvolvidas pela Motirô. A capoeira continuou sendo uma das principais raízes dessa história, mantendo seu espaço próprio por meio do Capoeira Motirô.",
  "A trajetória da instituição também se destaca pela articulação com políticas públicas, pela participação em iniciativas de financiamento cultural e pela defesa da capoeira como patrimônio cultural e prática esportiva.",
  "O reconhecimento como Pontão de Cultura representa mais um marco dessa caminhada, evidenciando a importância de preservar a memória institucional, valorizar a cultura local e ampliar o diálogo com outras iniciativas culturais e comunitárias.",
];
const TRANSFORMACAO = [
  "A capoeira ensina muito além de golpes, movimentos e técnicas. Ela trabalha disciplina, respeito, concentração, persistência, musicalidade, história, identidade e convivência.",
  "Na Motirô, esses elementos são utilizados para estimular o desenvolvimento integral dos participantes. Crianças e adolescentes aprendem a respeitar regras, conviver com as diferenças, trabalhar em grupo, enfrentar desafios e reconhecer suas próprias capacidades.",
  "Por meio do Capoeira Motirô, os participantes também encontram oportunidades de desenvolvimento esportivo. Atletas formados ou treinados no ambiente da instituição passaram a representar José de Freitas e o Piauí em competições locais, estaduais, nacionais e internacionais.",
  "Esse desenvolvimento demonstra que um trabalho de base comunitária pode, ao mesmo tempo, garantir acesso à cultura, contribuir para a educação e criar condições para a formação de atletas competitivos.",
];
const AMPLIACAO = [
  "Com o amadurecimento do trabalho, a Motirô passou a desenvolver outras iniciativas para atender aos diferentes interesses e necessidades da comunidade.",
  "O teatro tornou-se uma ferramenta de expressão, criatividade e reflexão sobre questões sociais. A Oficina da Leitura passou a contribuir para a formação de leitores e para o estímulo à escrita. O Cine Motirô ampliou o acesso ao audiovisual por meio de sessões gratuitas. O futebol, o handebol, a dança e outras atividades corporais acrescentaram novas possibilidades de participação.",
  "As ações também passaram a abordar temas como cidadania, autoestima, identidade, racismo, prevenção ao uso de drogas, direitos humanos e convivência comunitária.",
  "Essas iniciativas estão integradas à proposta abrangente do Além da Ginga. Assim, a Motirô não se limita a um único segmento artístico ou esportivo: constitui um espaço de encontro entre cultura, esporte, educação, inclusão e participação social.",
];
const INCLUSAO = [
  "A inclusão faz parte da experiência da Motirô. Ao longo de sua trajetória, as atividades receberam pessoas com diferentes condições físicas, intelectuais e sociais.",
  "A instituição também desenvolveu uma iniciativa específica voltada a crianças autistas, denominada Brincando e Crescendo Juntos, além de promover a participação de pessoas com deficiência em outras atividades.",
  "O objetivo é ampliar as possibilidades de convivência, respeitar as particularidades de cada participante e criar ambientes nos quais as pessoas possam desenvolver suas capacidades e construir vínculos.",
  "A atuação comunitária também inclui ações de prevenção ao uso de drogas e acolhimento de pessoas que buscam reconstruir suas trajetórias pessoais e sociais.",
  "Essas ações integram a missão mais ampla da Motirô de promover oportunidades, fortalecer vínculos comunitários e contribuir para uma sociedade mais inclusiva.",
];
const SEDE = [
  "A Motirô conta com uma sede instalada em um prédio histórico de José de Freitas, que anteriormente abrigou, em épocas diferentes, a Prefeitura e a Câmara Municipal.",
  "O imóvel foi disponibilizado à instituição por meio de comodato com prazo informado de 20 anos, dado que deve ser conferido com o contrato correspondente.",
  "A sede representa um espaço importante para a continuidade das atividades, a realização de oficinas, reuniões, encontros culturais e ações educativas.",
  "Além da sede, a instituição desenvolve atividades em comunidades, escolas, quadras e espaços parceiros, ampliando o alcance das ações.",
];
const VALORES = [
  "Inclusão e respeito às diferenças.",
  "Democratização do acesso à cultura, à educação e ao esporte.",
  "Valorização da cultura afro-brasileira.",
  "Cidadania e direitos humanos.",
  "Solidariedade e responsabilidade social.",
  "Disciplina, respeito e compromisso coletivo.",
  "Educação e formação integral.",
  "Convivência entre gerações.",
  "Valorização da diversidade.",
  "Compromisso com crianças, adolescentes e jovens.",
  "Preservação da memória e valorização das tradições culturais.",
  "Cooperação e fortalecimento das iniciativas comunitárias.",
];
const AREAS: { title: string; text: string; icon: LucideIcon; color: string }[] = [
  { title: "Cultura", text: "Valorização da cultura afro-brasileira, da capoeira e de outras manifestações populares, com atividades de musicalidade, samba de roda, maculelê, oficinas e apresentações.", icon: Music2, color: "bg-azul/10 text-azul" },
  { title: "Educação", text: "Incentivo à leitura, à escrita, à interpretação, à criatividade e à formação cidadã, por meio de oficinas, encontros e atividades educativas.", icon: BookOpen, color: "bg-verde/10 text-verde" },
  { title: "Esporte", text: "Prática esportiva, formação de atletas, treinamento, participação em campeonatos e desenvolvimento de habilidades físicas, técnicas e sociais.", icon: Volleyball, color: "bg-laranja/10 text-laranja" },
  { title: "Artes", text: "Teatro, dança, expressão corporal, apresentações culturais e atividades que estimulam a criatividade e a comunicação.", icon: Drama, color: "bg-vermelho/10 text-vermelho" },
  { title: "Audiovisual", text: "Exibição gratuita de filmes e realização de sessões culturais por meio do Cine Motirô.", icon: Clapperboard, color: "bg-ouro/15 text-foreground" },
  { title: "Inclusão social", text: "Ações voltadas à participação de pessoas com deficiência, ao acolhimento comunitário e à ampliação das oportunidades para pessoas de diferentes realidades sociais.", icon: HeartHandshake, color: "bg-verde/10 text-verde" },
  { title: "Formação cidadã", text: "Atividades que abordam autoestima, identidade, racismo, cidadania, prevenção ao uso de drogas, convivência e direitos humanos.", icon: Users, color: "bg-azul/10 text-azul" },
  { title: "Articulação cultural e comunitária", text: "Participação em ações, encontros e iniciativas que valorizem a cultura local, fortaleçam parcerias e ampliem o diálogo entre projetos, instituições e comunidade.", icon: Sparkles, color: "bg-vermelho/10 text-vermelho" },
];

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({ meta: [
    { title: "Quem Somos — Pontão de Cultura Motirô" },
    { name: "description", content: APRESENTACAO[0] },
    { property: "og:title", content: "Quem Somos — Pontão de Cultura Motirô" },
    { property: "og:description", content: APRESENTACAO[0] },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: PHOTOS.roda },
    { name: "twitter:image", content: PHOTOS.roda },
  ] }),
  component: QuemSomos,
});

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
function Paragraphs({ texts, className = "" }: { texts: string[]; className?: string }) {
  return <div className={`space-y-4 text-base leading-relaxed ${className}`}>{texts.map(text => <p key={text}>{text}</p>)}</div>;
}
function Movement({ className = "" }: { className?: string }) {
  return <svg className={`pointer-events-none ${className}`} viewBox="0 0 240 160" fill="none" aria-hidden="true">
    <circle cx="120" cy="80" r="64" stroke="currentColor" strokeWidth="2" strokeDasharray="5 9" />
    <path d="M16 144 Q80 24 144 108 T236 64" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="120" cy="80" r="38" stroke="currentColor" />
    <path d="m197 24 9 9-9 9-9-9Z" fill="currentColor" />
  </svg>;
}
function Photo({ src, className = "" }: { src: string; className?: string }) {
  return <div className={`relative ${className}`}>
    <img src={src} alt="Fotografia temporária de capoeira, não pertencente ao acervo oficial da Motirô" loading="lazy" className="relative aspect-[4/3] max-h-80 w-full rounded-2xl object-cover shadow-lg" />
    <div className="pointer-events-none absolute -bottom-3 -left-3 h-16 w-16 rounded-full border-2 border-ouro" aria-hidden="true" />
  </div>;
}
function Principle({ title, children, className }: { title: string; children: ReactNode; className: string }) {
  return <article className={`relative overflow-hidden rounded-3xl p-7 shadow-lg ${className}`}>
    <svg className="absolute -right-10 -top-10 h-40 w-40 opacity-20" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" /></svg>
    <svg viewBox="0 0 200 140" className="relative mb-4 h-16 w-24 text-ouro" fill="none" stroke="currentColor" aria-hidden="true">
      {title === "Missão" ? <><circle cx="100" cy="70" r="46" strokeWidth="3" strokeDasharray="6 8" /><circle cx="100" cy="70" r="24" strokeWidth="2" /><path d="M30 120h140" strokeWidth="2" /></> : title === "Visão" ? <><path d="M20 100Q100 20 180 100" strokeWidth="3" /><circle cx="100" cy="70" r="16" strokeWidth="2" /><circle cx="100" cy="70" r="5" fill="currentColor" /><path d="M40 120h120" strokeDasharray="4 6" /></> : <><path d="M60 90Q100 60 140 90" strokeWidth="3" /><circle cx="60" cy="110" r="10" strokeWidth="2" /><circle cx="140" cy="110" r="10" strokeWidth="2" /><path d="m100 30 20 30-20-20-20 20Z" fill="currentColor" /></>}
    </svg>
    <h3 className="relative font-display text-3xl font-extrabold">{title}</h3>
    <div className="relative mt-3 text-[15px] leading-relaxed">{children}</div>
  </article>;
}

function QuemSomos() {
  return <>
    <InternalHero title="Quem Somos" eyebrow="Pontão de Cultura Motirô" image={PHOTOS.roda} imageAlt="Fotografia temporária de uma roda de capoeira" variant="primary" pattern="roda" compact />

    <section className="py-14 md:py-16">
      <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-start`}>
        <div><SectionTitle title="Apresentação Institucional" /><Paragraphs texts={APRESENTACAO} className="mt-7 text-muted-foreground" /></div>
        <div className="lg:pt-2"><Photo src={PHOTOS.comunidade} /></div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-primary py-12 text-primary-foreground md:py-14">
      <Movement className="absolute -right-8 -top-8 h-36 w-48 text-ouro opacity-20" />
      <div className={`${container} relative`}>
        <div><h2 className="font-display text-3xl font-extrabold leading-tight">A Motirô como Pontão de Cultura</h2>
          <div className="mt-6 max-w-5xl space-y-4 text-base leading-relaxed">
            <p>A Motirô é certificada pelo Ministério da Cultura como <strong className="text-ouro text-xl font-extrabold">Pontão de Cultura desde 2017</strong>.</p>
            <p>Os Pontões de Cultura estão relacionados à articulação, à integração e ao fortalecimento de iniciativas culturais, ampliando as possibilidades de cooperação, intercâmbio de experiências e desenvolvimento de ações em rede.</p>
            <p>No caso da Motirô, esse reconhecimento está associado a uma trajetória construída a partir da capoeira e ampliada para diferentes campos da cultura, do esporte, da educação e da inclusão social.</p>
            <p className="border-l-4 border-ouro pl-5">A Motirô é o <strong className="text-ouro text-xl font-extrabold">único Pontão de Cultura do município de José de Freitas-PI</strong>.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden py-14 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className={`${container} max-w-6xl`}><SectionTitle title="História e Trajetória" center />
        <div className="relative mt-10">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-ouro/40 md:hidden" aria-hidden="true" />
          <svg className="absolute left-1/2 top-0 hidden h-full w-8 -translate-x-1/2 md:block" viewBox="0 0 32 1000" preserveAspectRatio="none" aria-hidden="true"><path d="M16 0Q28 250 16 500T16 1000" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="6 8" /></svg>
          <div className="space-y-8 md:space-y-10">{[HISTORIA.slice(0, 2), HISTORIA.slice(2, 5), HISTORIA.slice(5)].map((texts, i) => <div key={i} className="relative pl-10 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
            <span className={`absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-background md:left-1/2 ${["bg-vermelho", "bg-azul", "bg-laranja"][i]}`} aria-hidden="true" />
            <div className={`relative rounded-2xl border border-border bg-card p-5 shadow-sm ${i % 2 ? "md:col-start-2" : "md:col-start-1"}`}>
              <Paragraphs texts={texts} className="text-muted-foreground" />
              <svg className={`mt-4 h-3 w-24 ${["text-vermelho", "text-azul", "text-laranja"][i]}`} viewBox="0 0 100 12" aria-hidden="true"><path d="M2 8Q25 2 50 8T98 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </div>
          </div>)}</div>
        </div>
      </div>
    </section>

    <section className="bg-azul/5 py-14 md:py-16"><div className={`${container} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)]`}>
      <Photo src={PHOTOS.roda} /><div><SectionTitle title="Da roda de capoeira à transformação social" /><Paragraphs texts={TRANSFORMACAO} className="mt-7 text-muted-foreground" /></div>
    </div></section>

    <section className="py-14 md:py-16"><div className={`${container} max-w-5xl`}>
      <SectionTitle title="Ampliação das atividades culturais e educativas" /><Paragraphs texts={AMPLIACAO} className="mt-6 text-muted-foreground" />
      <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-border pt-5" aria-hidden="true">{[Drama, BookOpen, Clapperboard, Volleyball, Activity, Music2].map((Icon, i) => <Icon key={i} className={`h-7 w-7 ${["text-vermelho", "text-verde", "text-azul", "text-laranja", "text-primary", "text-vermelho"][i]}`} strokeWidth={1.5} />)}</div>
    </div></section>

    <section className="relative overflow-hidden bg-muted/40 py-14 md:py-16"><Movement className="absolute -right-10 bottom-0 h-28 w-40 text-verde opacity-20" /><div className={`${container} max-w-5xl`}>
      <SectionTitle title="Inclusão e acolhimento" /><Paragraphs texts={INCLUSAO} className="mt-6 text-muted-foreground" />
    </div></section>

    <section className="py-14 md:py-16"><div className={`${container} grid items-center gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]`}>
      <div><SectionTitle title="A sede histórica da Motirô" /><Paragraphs texts={SEDE} className="mt-7 text-muted-foreground" /></div>
      <div role="img" aria-label="Espaço reservado para fotografias oficiais da sede histórica da Motirô" className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-muted/50">
        <Landmark className="h-8 w-8 text-primary/45" strokeWidth={1.5} /><Movement className="absolute -bottom-6 -right-8 h-24 w-36 text-ouro opacity-25" />
      </div>
    </div></section>

    <section className="bg-muted/40 py-14 md:py-16"><div className={container}>
      <SectionTitle title="Missão, Visão e Valores" center />
      <div className="mt-10 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.35fr]">
        <Principle title="Missão" className="bg-azul text-azul-foreground"><p>Promover o desenvolvimento humano e comunitário por meio da cultura, do esporte e da educação, oferecendo oportunidades de participação, aprendizagem e inclusão social, com valorização da cultura afro-brasileira, da diversidade, da cidadania e da formação integral.</p></Principle>
        <Principle title="Visão" className="bg-vermelho text-vermelho-foreground"><p>Consolidar-se como referência em José de Freitas e no Piauí na promoção da cultura, do esporte, da educação e da inclusão social, ampliando oportunidades, fortalecendo a participação comunitária e contribuindo para a articulação e o desenvolvimento cultural.</p></Principle>
        <Principle title="Valores" className="bg-laranja text-laranja-foreground md:col-span-2 xl:col-span-1"><ul className="grid gap-x-5 gap-y-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">{VALORES.map(value => <li key={value} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-ouro" aria-hidden="true" /><span>{value}</span></li>)}</ul></Principle>
      </div>
    </div></section>

    <section className="py-14 md:py-16"><div className={container}><SectionTitle title="Principais áreas de atuação" description="A Motirô desenvolve suas ações em diferentes áreas, que se complementam." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{AREAS.map(({ title, text, icon: Icon, color }) => <article key={title} className={`relative overflow-hidden rounded-2xl p-5 ${color}`}>
        <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-extrabold leading-snug text-foreground">{title}</h3><p className="mt-3 text-sm leading-relaxed text-foreground">{text}</p>
      </article>)}</div>
    </div></section>

    <FinalCta title="Conheça a Motirô" variant="primary" buttons={[{ label: "Conheça nossos projetos", to: "/projetos" }, { label: "Conheça nossa equipe", to: "/quem-somos/equipe" }]} />
  </>;
}
