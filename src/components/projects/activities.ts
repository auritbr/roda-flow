import { arts, capoeiraParagraphs, capoeiraTags, theatreLaunchText } from "./overview-content";

export type Activity = {
  key: string;
  title: string;
  eyebrow?: string;
  image: string;
  alt: string;
  paragraphs: readonly string[];
  color: string;
  accent: string;
  tags?: readonly string[];
  independent?: boolean;
  audience?: string;
  highlights?: readonly { title?: string; text: string }[];
  slug?: string;
  credit?: { author: string; license: string; url: string };
};

const images = ["teatro-motiro", "oficina-leitura", "cine-motiro", "danca-motiro"];
const alts = ["Expressão cênica em apresentação teatral", "Crianças participando de leitura e contação de histórias", "Sala de exibição cinematográfica", "Samba de roda com dança e instrumentos tradicionais"];

export const activities: readonly Activity[] = [
  {
    key: "capoeira", title: "Capoeira Motirô", eyebrow: "Tradição, formação e esporte",
    image: "/images/projetos/capoeira-motiro.jpg", alt: "Praticantes de capoeira com instrumentos em roda pública",
    color: "bg-card", accent: "text-vermelho", slug: "capoeira-para-todos",
    paragraphs: [...capoeiraParagraphs, "Por meio das aulas e dos encontros, os participantes têm contato com movimentos, musicalidade, instrumentos, história, disciplina, respeito, cooperação, convivência, transmissão de saberes entre gerações e valorização da ancestralidade."],
    tags: capoeiraTags,
    highlights: [{ title: "Formação esportiva", text: "Além da dimensão cultural e educativa, o Capoeira Motirô possibilita o avanço da iniciação ao treinamento competitivo, com participação em graduações, festivais e campeonatos. Atletas formados ou preparados no ambiente da Motirô já representaram José de Freitas e o Piauí em competições locais, estaduais, nacionais e internacionais." }],
  },
  ...arts.map((art, index): Activity => ({
    ...art, image: `/images/projetos/${images[index]}.jpg`, alt: alts[index],
    highlights: art.key === "theatre" ? [
      { title: "Teatro e Consciência", text: "Iniciativa socioeducativa que utiliza a linguagem teatral para abordar questões relevantes à formação de crianças e adolescentes." },
      { title: "Entre a Ilusão e a Razão", text: theatreLaunchText },
    ] : undefined,
    tags: art.key === "dance" ? ["Maculelê", "Samba de roda", "Danças populares", "Musicalidade", "Memória cultural"] : undefined,
  })),
  {
    key: "handball", title: "Handebol Motirô", eyebrow: "Esporte, formação e trabalho em equipe",
    image: "/images/projetos/handebol-motiro.jpg", alt: "Jovens atletas com bolas de handebol em uma quadra esportiva",
    color: "bg-azul/10", accent: "text-azul",
    paragraphs: [
      "O handebol integra a atuação esportiva da Motirô, ampliando as oportunidades de participação de crianças e adolescentes que se identificam com modalidades esportivas além da capoeira.",
      "Por meio da prática do handebol, a iniciativa busca contribuir para o desenvolvimento físico, motor e social dos participantes, estimulando cooperação, disciplina, respeito às regras, responsabilidade e trabalho em equipe.",
      "Mais do que aprender os fundamentos da modalidade, os participantes têm a oportunidade de desenvolver habilidades, enfrentar desafios, fortalecer vínculos e compreender a importância do compromisso coletivo.",
      "A prática esportiva também pode contribuir para a formação de jovens atletas, criando oportunidades de participação em treinamentos, jogos, competições e outras experiências esportivas, conforme a organização e o funcionamento da atividade.",
    ],
    highlights: [{ text: "Esporte como ferramenta de educação, convivência e desenvolvimento humano." }],
    audience: "Crianças, adolescentes e jovens, conforme as faixas etárias e as categorias organizadas pela equipe responsável.",
    tags: ["Trabalho em equipe", "Disciplina", "Formação esportiva", "Convivência", "Desenvolvimento motor"],
    credit: { author: "Voltmetro", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:2016_Women%27s_Junior_World_Handball_Championship_-_Group_A_-_HUN_vs_NOR_-_(084).jpg" },
  },
  {
    key: "inclusion", title: "Brincando e Crescendo Juntos", eyebrow: "Inclusão, acolhimento e desenvolvimento", independent: true,
    image: "/images/projetos/brincando-crescendo-juntos.jpg", alt: "Crianças participando de uma atividade artística em um encontro cultural",
    color: "bg-verde/10", accent: "text-verde",
    paragraphs: [
      "O Brincando e Crescendo Juntos é uma iniciativa da Motirô voltada especificamente a crianças autistas, desenvolvida com o propósito de ampliar oportunidades de participação, convivência e desenvolvimento.",
      "A proposta reconhece a importância de respeitar as particularidades de cada criança, valorizando suas capacidades, seus interesses e suas diferentes formas de comunicação e interação.",
      "Por meio de experiências adequadas às características e às necessidades dos participantes, a iniciativa busca favorecer a convivência, a expressão, a interação social e a participação em atividades que contribuam para o desenvolvimento de cada criança.",
      "O acolhimento das famílias e a construção de um ambiente respeitoso também são aspectos importantes dessa proposta.",
    ],
    highlights: [{ text: "O Brincando e Crescendo Juntos integra o compromisso social da Motirô com a diversidade e a inclusão e possui identidade própria, independente do Além da Ginga." }],
    audience: "Crianças autistas, conforme os critérios de participação e a organização definidos pela iniciativa.",
    tags: ["Ampliar oportunidades de participação", "Promover convivência e interação social", "Respeitar diferentes ritmos de desenvolvimento", "Valorizar capacidades e formas de expressão", "Incentivar ambientes acolhedores", "Fortalecer o diálogo com as famílias", "Contribuir para uma comunidade mais inclusiva"],
    credit: { author: "Joe Mabel", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Children%27s_art_activities_-_2018_Romanian_Cultural_Festival_at_Maryhill_Museum_of_Art.jpg" },
  },
];

export const ACTIVITIES_PER_PAGE = 3;
export const activityPageCount = Math.ceil(activities.length / ACTIVITIES_PER_PAGE);
export function activitiesForPage(page: number) {
  if (!Number.isInteger(page) || page < 1 || page > activityPageCount) return [];
  return activities.slice((page - 1) * ACTIVITIES_PER_PAGE, page * ACTIVITIES_PER_PAGE);
}