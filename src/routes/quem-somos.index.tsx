import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { Activity, BookOpen, Clapperboard, Drama, HeartHandshake, Music2, Users, Landmark, Sparkles, Volleyball, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const PHOTOS = {
  roda: "https://images.unsplash.com/photo-1759352856072-985a4ddab82d?auto=format&fit=crop&w=2000&q=80",
  comunidade: "https://images.unsplash.com/photo-1583166614297-a97b68d5cead?auto=format&fit=crop&w=1200&q=80",
  musica: "https://images.unsplash.com/photo-1777375430966-c028cf6e3293?auto=format&fit=crop&w=1200&q=80",
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
  return <div className={`space-y-5 text-base leading-relaxed ${className}`}>{texts.map(text => <p key={text}>{text}</p>)}</div>;
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
    <img src={src} alt="Fotografia temporária de capoeira, não pertencente ao acervo oficial da Motirô" loading="lazy" className="relative aspect-[4/3] w-full rounded-lg object-cover" />
    <Movement className="absolute -bottom-5 -right-3 h-28 w-40 text-ouro opacity-75" />
  </div>;
}
function Principle({ title, children, className }: { title: string; children: ReactNode; className: string }) {
  return <article className={`relative overflow-hidden rounded-3xl p-7 md:p-8 ${className}`}>
    <Movement className="absolute -right-12 -top-8 h-40 w-56 opacity-20" />
    <Movement className="relative mb-4 h-24 w-36 text-ouro" />
    <h3 className="relative font-display text-3xl font-extrabold">{title}</h3>
    <div className="relative mt-5 text-base leading-relaxed">{children}</div>
  </article>;
}

function QuemSomos() {
  return <>
    <InternalHero title="Quem Somos" eyebrow="Pontão de Cultura Motirô" image={PHOTOS.roda} imageAlt="Fotografia temporária de uma roda de capoeira" variant="primary" pattern="roda" compact />

    <section className="py-14 md:py-16">
      <div className={`${container} grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start`}>
        <div><SectionTitle title="Apresentação Institucional" /><Paragraphs texts={APRESENTACAO} className="mt-7 text-muted-foreground" /></div>
        <div className="space-y-8 lg:sticky lg:top-28"><Photo src={PHOTOS.comunidade} /><div className="flex items-center gap-5 border-t border-border pt-7" aria-hidden="true"><Users className="h-9 w-9 text-verde" /><BookOpen className="h-9 w-9 text-vermelho" /><Activity className="h-9 w-9 text-azul" /><Music2 className="h-9 w-9 text-laranja" /></div></div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-primary py-12 text-primary-foreground md:py-14">
      <Movement className="absolute -right-14 -top-12 h-80 w-96 text-ouro opacity-20" />
      <div className={`${container} relative grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]`}>
        <div><h2 className="font-display text-3xl font-extrabold leading-tight">A Motirô como Pontão de Cultura</h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed">
            <p>A Motirô é certificada pelo Ministério da Cultura como <strong className="text-ouro text-xl font-extrabold">Pontão de Cultura desde 2017</strong>.</p>
            <p>Os Pontões de Cultura estão relacionados à articulação, à integração e ao fortalecimento de iniciativas culturais, ampliando as possibilidades de cooperação, intercâmbio de experiências e desenvolvimento de ações em rede.</p>
            <p>No caso da Motirô, esse reconhecimento está associado a uma trajetória construída a partir da capoeira e ampliada para diferentes campos da cultura, do esporte, da educação e da inclusão social.</p>
            <p className="border-l-4 border-ouro pl-5">A Motirô é o <strong className="text-ouro text-xl font-extrabold">único Pontão de Cultura do município de José de Freitas-PI</strong>.</p>
          </div>
        </div><Photo src={PHOTOS.roda} />
      </div>
    </section>

    <section className="py-14 md:py-16">
      <div className={container}><SectionTitle title="História e Trajetória" />
        <div className="relative mt-10 space-y-12 border-l-2 border-ouro/50 pl-6 md:pl-10">
          {[HISTORIA.slice(0, 2), HISTORIA.slice(2, 5), HISTORIA.slice(5)].map((texts, i) => <div key={i} className="relative">
            <span className="absolute -left-[33px] top-2 h-4 w-4 rounded-full bg-vermelho ring-4 ring-background md:-left-[49px]" aria-hidden="true" />
            {i < 2 ? <div className="grid items-center gap-8 lg:grid-cols-2"><div className={i === 1 ? "lg:order-2" : ""}><Paragraphs texts={texts} className="text-muted-foreground" /></div><Photo src={i === 0 ? PHOTOS.musica : PHOTOS.comunidade} /></div> : <div className="border-t border-border pt-8"><Paragraphs texts={texts} className="max-w-4xl text-muted-foreground" /></div>}
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-azul/5 py-14 md:py-16"><div className={`${container} grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]`}>
      <Photo src={PHOTOS.roda} /><div><SectionTitle title="Da roda de capoeira à transformação social" /><Paragraphs texts={TRANSFORMACAO} className="mt-7 text-muted-foreground" /></div>
    </div></section>

    <section className="py-14 md:py-16"><div className={`${container} grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center`}>
      <div><SectionTitle title="Ampliação das atividades culturais e educativas" /><Paragraphs texts={AMPLIACAO} className="mt-7 text-muted-foreground" /></div>
      <div className="relative grid grid-cols-3 gap-5 py-8" aria-hidden="true">{[Drama, BookOpen, Clapperboard, Volleyball, Activity, Music2].map((Icon, i) => <div key={i} className={`flex aspect-square items-center justify-center rounded-full ${["bg-vermelho/10 text-vermelho", "bg-verde/10 text-verde", "bg-azul/10 text-azul", "bg-laranja/10 text-laranja", "bg-ouro/20 text-foreground", "bg-vermelho/10 text-vermelho"][i]}`}><Icon className="h-10 w-10" strokeWidth={1.5} /></div>)}</div>
    </div></section>

    <section className="bg-verde/5 py-14 md:py-16"><div className={`${container} grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]`}>
      <Photo src={PHOTOS.comunidade} /><div><SectionTitle title="Inclusão e acolhimento" /><Paragraphs texts={INCLUSAO} className="mt-7 text-muted-foreground" /></div>
    </div></section>

    <section className="py-14 md:py-16"><div className={`${container} grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]`}>
      <div><SectionTitle title="A sede histórica da Motirô" /><Paragraphs texts={SEDE} className="mt-7 text-muted-foreground" /></div>
      <div role="img" aria-label="Espaço reservado para fotografias oficiais da sede histórica da Motirô" className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-muted/50">
        <Movement className="absolute -left-8 -top-5 h-64 w-80 text-ouro opacity-35" /><Landmark className="h-20 w-20 text-primary/45" strokeWidth={1} /><Movement className="absolute -bottom-12 -right-10 h-64 w-80 text-vermelho opacity-20" />
      </div>
    </div></section>

    <section className="bg-muted/40 py-14 md:py-16"><div className={container}>
      <SectionTitle title="Missão, Visão e Valores" center />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.8fr]">
        <Principle title="Missão" className="bg-azul text-azul-foreground"><p>Promover o desenvolvimento humano e comunitário por meio da cultura, do esporte e da educação, oferecendo oportunidades de participação, aprendizagem e inclusão social, com valorização da cultura afro-brasileira, da diversidade, da cidadania e da formação integral.</p></Principle>
        <Principle title="Visão" className="bg-vermelho text-vermelho-foreground"><p>Consolidar-se como referência em José de Freitas e no Piauí na promoção da cultura, do esporte, da educação e da inclusão social, ampliando oportunidades, fortalecendo a participação comunitária e contribuindo para a articulação e o desenvolvimento cultural.</p></Principle>
        <Principle title="Valores" className="bg-laranja text-laranja-foreground md:col-span-2 xl:col-span-1"><ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">{VALORES.map(value => <li key={value} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-ouro" aria-hidden="true" /><span>{value}</span></li>)}</ul></Principle>
      </div>
    </div></section>

    <section className="py-14 md:py-16"><div className={container}><SectionTitle title="Principais áreas de atuação" description="A Motirô desenvolve suas ações em diferentes áreas, que se complementam." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{AREAS.map(({ title, text, icon: Icon, color }) => <article key={title} className={`relative overflow-hidden rounded-lg p-5 ${color}`}>
        <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-4 font-display text-lg font-extrabold leading-snug text-foreground">{title}</h3><p className="mt-3 text-sm leading-relaxed text-foreground">{text}</p>
      </article>)}</div>
    </div></section>

    <FinalCta title="Conheça a Motirô" variant="primary" image={PHOTOS.comunidade} imageAlt="Fotografia temporária de atividade comunitária de capoeira" buttons={[{ label: "Conheça nossos projetos", to: "/projetos" }, { label: "Conheça nossa equipe", to: "/quem-somos/equipe" }]} />
  </>;
}
