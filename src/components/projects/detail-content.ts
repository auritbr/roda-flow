export type Initiative = {
  slug: string; title: string; eyebrow: string; subtitle: string; summary: string;
  color: "azul" | "ouro" | "vermelho" | "verde";
  image: string; alt: string; independent?: boolean;
  facts: { label: string; text: string }[];
  aboutLabel: string; paragraphs: string[];
  objectives: { title: string; text: string }[];
  practices?: { title: string; text?: string; items: string[] };
  feature?: { eyebrow: string; title: string; paragraphs: string[] };
  highlights?: { title: string; text: string }[];
  reach?: boolean; audience?: string;
};
const paragraphs = (text: string) => text.split("\n\n");
const objectives = (items: [string, string][]) => items.map(([title, text]) => ({ title, text }));
const facts = (items: [string, string][]) => items.map(([label, text]) => ({ label, text }));
const territory: [string, string] = ["Território", "José de Freitas / PI"];
const image = (name: string) => `/images/projetos/${name}.jpg`;

export const initiatives: Initiative[] = [
  {
    slug: "alem-da-ginga", title: "Além da Ginga", eyebrow: "Programa abrangente", subtitle: "Cultura, esporte, educação e inclusão em uma atuação integrada",
    summary: "O Além da Ginga reúne diferentes atividades e linguagens desenvolvidas pela Motirô, ampliando oportunidades de aprendizagem, convivência, formação e participação comunitária.",
    color: "ouro", image: image("alem-da-ginga"), alt: "Capoeira e musicalidade em encontro cultural coletivo",
    facts: facts([["Público", "Crianças, adolescentes e jovens"], ["Área", "Cultura, esporte, educação e inclusão"], territory, ["Tipo", "Programa abrangente"]]),
    aboutLabel: "Sobre o programa", paragraphs: paragraphs(`O Além da Ginga representa a proposta abrangente de formação cultural, esportiva, educativa e social desenvolvida pela Motirô.

Por meio dessa iniciativa, a instituição reúne diferentes atividades e linguagens, oferecendo oportunidades de aprendizagem, convivência, desenvolvimento de talentos e participação comunitária.

O programa contempla frentes como capoeira, teatro, leitura, cinema, dança, musicalidade, samba de roda, maculelê, oficinas e ações educativas.

A proposta busca contribuir para a formação de cidadãos conscientes, fortalecer a autoestima, estimular a participação em ambientes educativos e criar oportunidades para que crianças, adolescentes, jovens e outros integrantes da comunidade descubram e desenvolvam suas capacidades.

O Além da Ginga está associado à trajetória iniciada por volta do ano 2000 e à ampliação progressiva do trabalho comunitário da Motirô.`),
    objectives: objectives([
      ["Ampliar o acesso", "Ampliar o acesso à cultura, ao esporte e à educação."],
      ["Promover desenvolvimento humano", "Criar oportunidades de aprendizagem, formação e desenvolvimento de capacidades."],
      ["Fortalecer vínculos", "Fortalecer vínculos comunitários, convivência e participação."],
      ["Estimular cidadania", "Estimular cidadania, autoestima e participação social."],
      ["Valorizar talentos", "Criar oportunidades para descoberta e desenvolvimento de talentos."],
      ["Promover inclusão", "Ampliar as possibilidades de participação e inclusão."],
    ]),
    practices: { title: "Diferentes linguagens em uma mesma proposta", items: ["Capoeira", "Teatro", "Leitura", "Cinema", "Dança", "Musicalidade", "Samba de roda", "Maculelê", "Oficinas", "Formação cidadã"] }, reach: true,
  },
  {
    slug: "capoeira-motiro", title: "Capoeira Motirô", eyebrow: "Projeto", subtitle: "Tradição, formação cultural e desenvolvimento esportivo",
    summary: "Uma das principais expressões da trajetória da Motirô, unindo cultura afro-brasileira, educação, convivência, musicalidade e formação esportiva.",
    color: "azul", image: image("capoeira-motiro"), alt: "Praticantes de capoeira com instrumentos em roda pública",
    facts: facts([["Público", "Crianças, adolescentes e jovens"], ["Área", "Cultura e esporte"], territory, ["Trajetória", "Desde aproximadamente 2000"]]),
    aboutLabel: "Sobre o projeto", paragraphs: paragraphs(`O Capoeira Motirô é o projeto específico de capoeira da instituição e uma das principais expressões de sua trajetória.

Iniciado por volta do ano 2000, oferece atividades de capoeira e cultura afro-brasileira, principalmente para crianças e adolescentes, utilizando essa manifestação como instrumento de educação, desenvolvimento pessoal, formação esportiva e inclusão social.

Por meio das aulas e dos encontros, os participantes têm contato com movimentos, musicalidade, instrumentos, história, disciplina, respeito, cooperação e convivência.

O trabalho também contempla o conhecimento das tradições da capoeira, a transmissão de saberes entre gerações, a valorização da ancestralidade e o fortalecimento da identidade cultural.`),
    objectives: objectives([
      ["Preservar e difundir", "Preservar e difundir a capoeira e seus saberes."],
      ["Promover desenvolvimento", "Contribuir para o desenvolvimento integral dos participantes."],
      ["Disciplina e convivência", "Estimular disciplina, respeito, cooperação e convivência."],
      ["Formar praticantes e atletas", "Criar caminhos da iniciação à formação esportiva."],
      ["Valorizar a cultura", "Valorizar a cultura afro-brasileira, a ancestralidade e a identidade cultural."],
    ]),
    practices: { title: "Práticas que compõem a formação", text: "As atividades articulam movimento, musicalidade, instrumentos, história e convivência, permitindo que os participantes conheçam diferentes dimensões culturais e esportivas da capoeira.", items: ["Aulas de capoeira", "Musicalidade", "Instrumentos", "Rodas", "Oficinas", "Apresentações", "Festivais", "Preparação para competições"] },
    feature: { eyebrow: "Da iniciação ao treinamento competitivo", title: "Formação esportiva", paragraphs: paragraphs(`Além da dimensão cultural e educativa, o Capoeira Motirô desenvolve a formação esportiva dos praticantes.

Os atletas podem avançar da iniciação ao treinamento competitivo, participando de graduações, festivais e campeonatos em diferentes níveis.

Atletas formados ou preparados no ambiente da Motirô já representaram José de Freitas e o Piauí em competições locais, estaduais, nacionais e internacionais.

Essa trajetória demonstra que a capoeira pode ser, ao mesmo tempo, manifestação cultural, instrumento educativo, espaço de convivência e caminho para o desenvolvimento esportivo.`) },
  },
  {
    slug: "teatro-motiro", title: "Teatro Motirô", eyebrow: "Projeto", subtitle: "Expressão artística, reflexão e formação cidadã",
    summary: "O teatro integra a atuação cultural e educativa da Motirô, criando oportunidades de expressão, criatividade, comunicação e reflexão.",
    color: "vermelho", image: image("teatro-motiro"), alt: "Expressão cênica em apresentação teatral",
    facts: facts([["Público", "Crianças e adolescentes"], ["Área", "Artes cênicas e formação"], territory]),
    aboutLabel: "Sobre o projeto", paragraphs: paragraphs(`O Teatro Motirô representa a atuação da instituição no campo das artes cênicas e da expressão artística.

Por meio do teatro, os participantes podem desenvolver criatividade, comunicação, expressão corporal, interpretação, trabalho coletivo e capacidade de refletir sobre situações do cotidiano.

A linguagem teatral também pode ser utilizada para abordar temas sociais e educativos, estimular a autoestima e promover o diálogo com a comunidade.

O projeto demonstra o potencial do teatro como ferramenta de reflexão, prevenção, conscientização e formação cidadã.`),
    objectives: objectives([
      ["Desenvolver expressão", "Estimular criatividade, comunicação, interpretação e expressão corporal."],
      ["Fortalecer o coletivo", "Promover trabalho coletivo, convivência e participação."],
      ["Refletir sobre a realidade", "Utilizar a linguagem teatral para abordar questões sociais e educativas."],
      ["Promover formação cidadã", "Estimular autoestima, reflexão, conscientização e diálogo com a comunidade."],
    ]),
    highlights: [
      { title: "Teatro e Consciência", text: "Iniciativa socioeducativa que utiliza a linguagem teatral para abordar questões relevantes à formação de crianças e adolescentes." },
      { title: "Entre a Ilusão e a Razão", text: "Atividade lançada em maio de 2026 e apresentada em diferentes escolas, com público médio aproximado de 200 estudantes." },
    ],
  },
  {
    slug: "oficina-da-leitura", title: "Oficina da Leitura", eyebrow: "Iniciativa", subtitle: "Leitura, escrita e formação de novos leitores",
    summary: "Uma iniciativa dedicada à aproximação com os livros, ao desenvolvimento da leitura e à ampliação das possibilidades de conhecimento e expressão.",
    color: "ouro", image: image("oficina-leitura"), alt: "Crianças participando de leitura e contação de histórias",
    facts: facts([["Área", "Leitura e educação"], territory, ["Integra", "Além da Ginga"]]),
    aboutLabel: "Sobre a iniciativa", paragraphs: paragraphs(`A Oficina da Leitura é uma iniciativa de incentivo à leitura e à formação de leitores.

O projeto procura aproximar os participantes dos livros, estimular a interpretação de textos, ampliar o vocabulário, desenvolver a escrita e despertar o interesse pelo conhecimento.

A leitura também constitui uma ferramenta importante para o desenvolvimento da autonomia, do pensamento crítico e da capacidade de compreender a realidade.

A Oficina da Leitura integra a proposta educativa do Além da Ginga e pode dialogar com outras atividades culturais, como teatro e cinema.`),
    objectives: objectives([
      ["Aproximar dos livros", "Estimular o contato com livros e diferentes experiências de leitura."],
      ["Desenvolver interpretação", "Estimular a compreensão e interpretação de textos."],
      ["Fortalecer a escrita", "Ampliar vocabulário e desenvolver possibilidades de expressão escrita."],
      ["Estimular pensamento crítico", "Contribuir para autonomia, conhecimento e compreensão da realidade."],
    ]),
    practices: { title: "Experiências de leitura e aprendizagem", items: ["Leitura", "Interpretação", "Escrita", "Vocabulário", "Conhecimento", "Pensamento crítico"] },
  },
  {
    slug: "cine-motiro", title: "Cine Motirô", eyebrow: "Iniciativa", subtitle: "Audiovisual, encontro e reflexão",
    summary: "O Cine Motirô amplia o acesso ao audiovisual por meio de exibições gratuitas de filmes em experiências coletivas de cultura, entretenimento e diálogo.",
    color: "azul", image: image("cine-motiro"), alt: "Sala de exibição cinematográfica",
    facts: facts([["Área", "Audiovisual e cultura"], territory, ["Acesso", "Exibições gratuitas"], ["Integra", "Além da Ginga"]]),
    aboutLabel: "Sobre a iniciativa", paragraphs: paragraphs(`O Cine Motirô é uma iniciativa de exibição gratuita de filmes e promoção do acesso ao audiovisual.

A proposta é oferecer à comunidade a oportunidade de assistir a produções cinematográficas em um ambiente coletivo, utilizando o cinema também como possibilidade de diálogo, entretenimento e reflexão.

As sessões podem ser articuladas com outros projetos e atividades da Motirô, de acordo com os interesses dos participantes.`),
    objectives: objectives([
      ["Ampliar o acesso", "Ampliar o acesso da comunidade ao audiovisual."],
      ["Promover experiências coletivas", "Criar oportunidades de encontro em torno do cinema."],
      ["Estimular diálogo", "Utilizar as exibições como possibilidade de conversa e reflexão."],
      ["Articular linguagens", "Possibilitar diálogo com outras atividades culturais e educativas da Motirô."],
    ]),
  },
  {
    slug: "danca", title: "Dança, ritmo e tradição", eyebrow: "Atividade cultural", subtitle: "Movimento, musicalidade e memória cultural",
    summary: "Maculelê, samba de roda e outras danças populares integram as experiências culturais e corporais desenvolvidas pela Motirô.",
    color: "verde", image: image("danca-motiro"), alt: "Samba de roda com dança e instrumentos tradicionais",
    facts: facts([["Área", "Dança e cultura popular"], territory, ["Integra", "Além da Ginga"], ["Linguagens", "Maculelê, samba de roda e danças populares"]]),
    aboutLabel: "Sobre a atividade", paragraphs: paragraphs(`A dança é outra linguagem artística e corporal presente entre as atividades da Motirô.

Por meio do maculelê, do samba de roda e de outras danças populares, os participantes podem desenvolver expressão corporal, ritmo, coordenação, criatividade e consciência do próprio corpo.

As danças ofertadas fazem parte do conjunto de expressões culturais afro-brasileiras e nordestinas relacionadas às atividades da Motirô.

Essas manifestações permitem trabalhar musicalidade, ritmo, movimento, memória cultural, participação coletiva e valorização das tradições populares.`),
    objectives: [], practices: { title: "Experiências de movimento e tradição", items: ["Expressão corporal", "Ritmo", "Coordenação", "Criatividade", "Musicalidade", "Memória cultural", "Participação coletiva", "Valorização das tradições"] },
  },
  {
    slug: "handebol-motiro", title: "Handebol Motirô", eyebrow: "Atividade esportiva", subtitle: "Esporte, formação e trabalho em equipe",
    summary: "Uma iniciativa que amplia as possibilidades de participação esportiva e utiliza o handebol como espaço de aprendizagem, disciplina, cooperação e desenvolvimento.",
    color: "azul", image: image("handebol-motiro"), alt: "Atletas com bolas de handebol em uma quadra esportiva",
    facts: facts([["Público", "Crianças, adolescentes e jovens"], ["Área", "Esporte e formação"], territory]),
    aboutLabel: "Sobre a atividade", paragraphs: paragraphs(`O handebol integra a atuação esportiva da Motirô, ampliando as oportunidades de participação de crianças e adolescentes que se identificam com modalidades esportivas além da capoeira.

Por meio da prática do handebol, a iniciativa busca contribuir para o desenvolvimento físico, motor e social dos participantes, estimulando a cooperação, a disciplina, o respeito às regras, a responsabilidade e o trabalho em equipe.

Mais do que aprender os fundamentos de uma modalidade esportiva, os participantes têm a oportunidade de desenvolver habilidades, enfrentar desafios, fortalecer vínculos e compreender a importância do compromisso coletivo.

A prática esportiva também pode contribuir para a formação de jovens atletas, criando oportunidades de participação em treinamentos, jogos, competições e outras experiências esportivas, conforme a organização e o funcionamento da atividade.

O handebol faz parte da atuação da Motirô na promoção do esporte como ferramenta de educação, convivência e desenvolvimento humano.`),
    objectives: objectives([
      ["Ampliar oportunidades", "Ampliar as possibilidades de participação de crianças, adolescentes e jovens no esporte."],
      ["Desenvolver habilidades", "Contribuir para o desenvolvimento físico, motor e social dos participantes."],
      ["Fortalecer o coletivo", "Estimular cooperação, responsabilidade e trabalho em equipe."],
      ["Promover disciplina", "Trabalhar disciplina, respeito às regras e compromisso."],
      ["Criar experiências esportivas", "Possibilitar participação em treinamentos, jogos e competições conforme a organização da atividade."],
    ]),
    practices: { title: "Prática esportiva e aprendizagem", items: ["Treinamentos", "Fundamentos do handebol", "Trabalho em equipe", "Jogos", "Desenvolvimento motor", "Experiências esportivas"] },
    audience: "Crianças, adolescentes e jovens, conforme as faixas etárias e as categorias organizadas pela equipe responsável.",
  },
  {
    slug: "brincando-e-crescendo-juntos", title: "Brincando e Crescendo Juntos", eyebrow: "Iniciativa de inclusão", subtitle: "Inclusão, acolhimento e desenvolvimento",
    summary: "Uma iniciativa voltada especificamente a crianças autistas, criada para ampliar oportunidades de participação, convivência e desenvolvimento em um ambiente respeitoso e acolhedor.",
    color: "verde", image: image("inclusao-materiais"), alt: "Materiais de expressão criativa sobre uma mesa, ilustração sem pessoas", independent: true,
    facts: facts([["Público", "Crianças autistas"], ["Área", "Inclusão e convivência"], ["Tipo", "Iniciativa independente"], territory]),
    aboutLabel: "Sobre a iniciativa", paragraphs: paragraphs(`O Brincando e Crescendo Juntos é uma iniciativa da Motirô voltada especificamente a crianças autistas, desenvolvida com o propósito de ampliar oportunidades de participação, convivência e desenvolvimento.

A proposta reconhece a importância de respeitar as particularidades de cada criança, valorizando suas capacidades, seus interesses e suas diferentes formas de comunicação e interação.

Por meio de experiências adequadas às características e às necessidades dos participantes, a iniciativa busca favorecer a convivência, a expressão, a interação social e a participação em atividades que contribuam para o desenvolvimento de cada criança.

O acolhimento das famílias e a construção de um ambiente respeitoso também são aspectos importantes dessa proposta.

A inclusão pressupõe reconhecer as diferenças, respeitar os limites individuais e criar condições para que cada participante tenha oportunidades reais de participação.

O Brincando e Crescendo Juntos integra o compromisso social da Motirô com a diversidade e a inclusão, mas possui identidade própria e é uma iniciativa independente do Além da Ginga.`),
    objectives: objectives([
      ["Ampliar participação", "Ampliar as oportunidades de participação de crianças autistas."],
      ["Promover convivência", "Promover experiências de convivência e interação social."],
      ["Respeitar particularidades", "Respeitar as particularidades e os diferentes ritmos de desenvolvimento."],
      ["Valorizar capacidades", "Valorizar capacidades, interesses e formas de expressão de cada criança."],
      ["Criar ambientes acolhedores", "Incentivar ambientes acolhedores e respeitosos."],
      ["Aproximar as famílias", "Fortalecer o diálogo e a aproximação com as famílias."],
      ["Fortalecer inclusão", "Contribuir para a construção de uma comunidade mais inclusiva."],
    ]),
    practices: { title: "Participação, convivência e expressão", text: "As experiências são organizadas considerando as características e as necessidades dos participantes, buscando favorecer convivência, expressão, interação social e participação.", items: ["Convivência", "Expressão", "Interação social", "Participação", "Respeito às diferenças", "Acolhimento"] },
  },
];
export function initiativeForSlug(slug: string) { return initiatives.find(item => item.slug === slug); }
export const legacyProjectDestinations: Record<string, string> = { "capoeira-para-todos": "capoeira-motiro" };
export const legacyOverviewSlugs = ["ritmos-da-ancestralidade", "roda-memoria-e-territorio"];
export const programReach = [
  { value: "4 núcleos", context: "Registros de 2026", scope: "2026", count: 4 },
  { value: "+150 participantes", context: "Vinculados ao programa em registros de 2026", scope: "2026", count: 150 },
  { value: "≈ 190 participantes", context: "Em determinados períodos de funcionamento", scope: "specific-periods", count: 190 },
] as const;
