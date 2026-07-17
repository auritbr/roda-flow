// Shared site data — provisional content, easy to edit.
export const SITE = {
  name: "Ponto de Cultura Capoeira",
  short: "Ponto de Cultura",
  tagline: "Capoeira que preserva histórias e transforma territórios",
  whatsapp: "5500000000000", // configurable
  whatsappMessage: "Olá! Gostaria de saber mais sobre o Ponto de Cultura.",
  email: "contato@pontodeculturacapoeira.org",
  phone: "(00) 0000-0000",
  address: "Endereço a informar — Cidade / UF",
  hours: "Segunda a sexta, das 9h às 18h",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const PROJECTS = [
  {
    slug: "capoeira-para-todos",
    title: "Capoeira para Todos",
    tagline: "Formação continuada por meio da prática da Capoeira",
    color: "azul" as const,
    summary:
      "Formação continuada para crianças, adolescentes e jovens por meio da prática da Capoeira, articulando corpo, cultura e cidadania.",
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1600&q=80",
    audience: "Crianças, adolescentes e jovens",
    area: "Educação e formação",
  },
  {
    slug: "ritmos-da-ancestralidade",
    title: "Ritmos da Ancestralidade",
    tagline: "Musicalidade, instrumentos e memória oral",
    color: "ouro" as const,
    summary:
      "Vivências de musicalidade, construção de instrumentos, cantos tradicionais e memória oral da cultura afro-brasileira.",
    image:
      "https://images.unsplash.com/photo-1519683384663-1c317dd2e13c?auto=format&fit=crop&w=1600&q=80",
    audience: "Comunidade em geral",
    area: "Cultura e musicalidade",
  },
  {
    slug: "roda-memoria-e-territorio",
    title: "Roda, Memória e Território",
    tagline: "Rodas abertas e preservação da história local",
    color: "vermelho" as const,
    summary:
      "Ações culturais, rodas abertas, encontros comunitários e preservação da história local do território de atuação.",
    image:
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1600&q=80",
    audience: "Famílias e comunidade",
    area: "Território e memória",
  },
];

export const PROJECT_DETAILS: Record<string, {
  intro: string;
  objectives: { title: string; text: string }[];
  activities: string[];
  differentials: string[];
  results: { label: string; value: string }[];
  testimonial: { text: string; author: string; role: string };
}> = {
  "capoeira-para-todos": {
    intro:
      "O projeto Capoeira para Todos amplia o acesso à Capoeira como prática cultural, educativa e comunitária. A iniciativa oferece vivências formativas para crianças, adolescentes, jovens e demais participantes do território, unindo corpo, ritmo, disciplina, convivência e pertencimento. Mais do que ensinar movimentos, o projeto fortalece vínculos, valoriza saberes tradicionais e cria um espaço de aprendizado coletivo, respeito e construção de identidade.",
    objectives: [
      { title: "Ampliar o acesso", text: "Ampliar o acesso à Capoeira como prática cultural e educativa." },
      { title: "Fortalecer vínculos", text: "Fortalecer vínculos comunitários e o sentido de pertencimento." },
      { title: "Formar pela prática", text: "Estimular disciplina, escuta e convivência por meio da vivência corporal." },
      { title: "Valorizar a cultura", text: "Valorizar a cultura afro-brasileira e seus saberes ancestrais." },
    ],
    activities: [
      "Aulas regulares e vivências continuadas",
      "Oficinas temáticas de corpo, ritmo e cultura",
      "Rodas comunitárias e apresentações abertas",
      "Encontros formativos com mestres e educadores",
    ],
    differentials: [
      "Metodologia ancorada em tradição e escuta",
      "Trabalho intergeracional no território",
      "Ponte entre escola, família e comunidade",
    ],
    results: [
      { label: "Participantes atendidos", value: "A informar" },
      { label: "Oficinas realizadas", value: "A informar" },
      { label: "Territórios cobertos", value: "A informar" },
      { label: "Educadores envolvidos", value: "A informar" },
    ],
    testimonial: { text: "A Capoeira mudou minha relação com meu corpo, minha história e meu território.", author: "Nome do participante", role: "Aluno(a) do projeto" },
  },
  "ritmos-da-ancestralidade": {
    intro:
      "O projeto Ritmos da Ancestralidade aproxima participantes da musicalidade que sustenta a Capoeira e de outros saberes ligados à tradição oral, ao canto e aos instrumentos. Por meio de oficinas, rodas de conversa e experiências coletivas, a proposta valoriza berimbau, atabaque, pandeiro, cantigas e memórias compartilhadas, reconhecendo a música como parte essencial da formação cultural e da transmissão de conhecimentos.",
    objectives: [
      { title: "Musicalidade viva", text: "Valorizar a musicalidade da Capoeira como saber cultural." },
      { title: "Tradição oral", text: "Fortalecer a tradição oral e o repertório de cantigas." },
      { title: "Instrumentos", text: "Aproximar participantes do berimbau, atabaque e pandeiro." },
      { title: "Memórias", text: "Preservar saberes, histórias e memórias culturais." },
    ],
    activities: [
      "Oficinas de berimbau, atabaque e pandeiro",
      "Vivências de canto e ladainhas",
      "Rodas de conversa com mestres e mestras",
      "Construção artesanal de instrumentos",
    ],
    differentials: [
      "Escuta ativa e transmissão oral como método",
      "Diálogo entre gerações de músicos",
      "Registro sonoro e documental do processo",
    ],
    results: [
      { label: "Oficinas musicais", value: "A informar" },
      { label: "Instrumentos construídos", value: "A informar" },
      { label: "Cantigas registradas", value: "A informar" },
      { label: "Mestres convidados", value: "A informar" },
    ],
    testimonial: { text: "Aprender o berimbau é aprender a escutar a história que o instrumento carrega.", author: "Nome do participante", role: "Educando(a) musical" },
  },
  "roda-memoria-e-territorio": {
    intro:
      "O projeto Roda, Memória e Território articula ações culturais abertas, rodas comunitárias, encontros intergeracionais e registros de memória ligados à Capoeira e à história local. A proposta reconhece o território como espaço de construção coletiva e busca conectar passado e presente por meio de experiências que valorizam a presença da comunidade, os mestres, os trajetos culturais e os vínculos que sustentam a continuidade da tradição.",
    objectives: [
      { title: "Território vivo", text: "Fortalecer a relação entre Capoeira e território de atuação." },
      { title: "Rodas abertas", text: "Promover rodas e encontros comunitários acessíveis." },
      { title: "Memória", text: "Registrar memórias, trajetórias e histórias locais." },
      { title: "Intergeracional", text: "Incentivar participação e diálogo entre gerações." },
    ],
    activities: [
      "Rodas comunitárias em praças e espaços abertos",
      "Encontros de mestres e educadores",
      "Registros audiovisuais e escritos de memória",
      "Caminhadas culturais pelo território",
    ],
    differentials: [
      "Atuação em espaços públicos e comunitários",
      "Escuta e registro da história oral",
      "Ponte entre patrimônio cultural e vida cotidiana",
    ],
    results: [
      { label: "Rodas realizadas", value: "A informar" },
      { label: "Territórios visitados", value: "A informar" },
      { label: "Depoimentos registrados", value: "A informar" },
      { label: "Parceiros locais", value: "A informar" },
    ],
    testimonial: { text: "A roda é onde nossa história se encontra com o presente e ganha continuidade.", author: "Nome do participante", role: "Membro da comunidade" },
  },
};

export const NEWS = [
  {
    slug: "roda-de-abertura-do-encontro-cultural",
    category: "Eventos",
    date: "Data a informar",
    title: "Roda de abertura marca início do encontro cultural anual",
    excerpt:
      "Participantes de diferentes territórios se reuniram na sede do Ponto de Cultura para a roda de abertura.",
    image:
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "oficina-de-berimbau-para-jovens",
    category: "Oficinas",
    date: "Data a informar",
    title: "Oficina de berimbau reúne jovens em processo formativo",
    excerpt:
      "Vivência prática integrou construção do instrumento, musicalidade e história da Capoeira.",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "capoeira-nas-escolas-do-territorio",
    category: "Projetos",
    date: "Data a informar",
    title: "Capoeira nas escolas fortalece educação e cultura no território",
    excerpt:
      "Atividades em escolas parceiras ampliam o acesso à prática cultural e educativa da Capoeira.",
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "encontro-de-mestres-e-educadores",
    category: "Institucional",
    date: "Data a informar",
    title: "Encontro reúne mestres e educadores em formação continuada",
    excerpt:
      "Roda de conversa aprofundou temas de metodologia, ancestralidade e prática comunitária.",
    image:
      "https://images.unsplash.com/photo-1519683384663-1c317dd2e13c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "apresentacao-cultural-na-praca",
    category: "Comunidade",
    date: "Data a informar",
    title: "Apresentação cultural na praça reúne famílias do território",
    excerpt:
      "Atividade aberta ao público celebrou a Capoeira como expressão cultural e comunitária.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "publicacao-registra-trajetoria",
    category: "Cultura",
    date: "Data a informar",
    title: "Publicação registra trajetória do Ponto de Cultura",
    excerpt:
      "Material reúne relatos, fotografias e reflexões sobre a atuação nos últimos anos.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80",
  },
];

export const TEAM = [
  { name: "Nome do integrante", role: "Coordenação geral", bio: "Breve apresentação profissional a ser inserida.", bg: "azul" },
  { name: "Nome do integrante", role: "Mestre de Capoeira", bio: "Breve apresentação profissional a ser inserida.", bg: "vermelho" },
  { name: "Nome do integrante", role: "Contramestre", bio: "Breve apresentação profissional a ser inserida.", bg: "ouro" },
  { name: "Nome do integrante", role: "Educador(a)", bio: "Breve apresentação profissional a ser inserida.", bg: "verde" },
  { name: "Nome do integrante", role: "Produção cultural", bio: "Breve apresentação profissional a ser inserida.", bg: "laranja" },
  { name: "Nome do integrante", role: "Administrativo", bio: "Breve apresentação profissional a ser inserida.", bg: "azul" },
  { name: "Nome do integrante", role: "Comunicação", bio: "Breve apresentação profissional a ser inserida.", bg: "vermelho" },
  { name: "Nome do integrante", role: "Colaborador(a)", bio: "Breve apresentação profissional a ser inserida.", bg: "ouro" },
] as const;

export const DOCUMENTS = [
  { title: "Estatuto social", category: "Documentos institucionais", year: "Ano a informar", type: "PDF", description: "Documento institucional a ser disponibilizado." },
  { title: "Ata de fundação", category: "Atas", year: "Ano a informar", type: "PDF", description: "Registro institucional provisório." },
  { title: "Relatório de atividades", category: "Relatórios", year: "Ano a informar", type: "PDF", description: "Relatório anual a ser disponibilizado." },
  { title: "Relatório financeiro", category: "Relatórios", year: "Ano a informar", type: "PDF", description: "Prestação de contas a ser disponibilizada." },
  { title: "Certidão de regularidade", category: "Certidões", year: "Ano a informar", type: "PDF", description: "Certidão institucional a ser inserida." },
  { title: "Termo de fomento cultural", category: "Parcerias", year: "Ano a informar", type: "PDF", description: "Termo de parceria a ser disponibilizado." },
  { title: "Política institucional", category: "Políticas", year: "Ano a informar", type: "PDF", description: "Política interna a ser inserida." },
  { title: "Relatório anual consolidado", category: "Relatórios", year: "Ano a informar", type: "PDF", description: "Documento consolidado a ser disponibilizado." },
];

export const GALLERY = [
  { year: "2026", title: "Roda de abertura do encontro cultural", date: "Data a informar", image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1600&q=80", alt: "Participantes formando uma roda de Capoeira", caption: "Participantes durante a roda realizada na sede do Ponto de Cultura.", credit: "Crédito a informar", category: "Roda de Capoeira" },
  { year: "2026", title: "Oficina de musicalidade", date: "Data a informar", image: "https://images.unsplash.com/photo-1519683384663-1c317dd2e13c?auto=format&fit=crop&w=1600&q=80", alt: "Berimbau em detalhe", caption: "Vivência de musicalidade com instrumentos tradicionais.", credit: "Crédito a informar", category: "Oficina" },
  { year: "2025", title: "Apresentação comunitária na praça", date: "Data a informar", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80", alt: "Apresentação cultural coletiva", caption: "Apresentação aberta ao público no território.", credit: "Crédito a informar", category: "Apresentação" },
  { year: "2025", title: "Formação de educadores", date: "Data a informar", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80", alt: "Educadores em roda de conversa", caption: "Encontro formativo com educadores parceiros.", credit: "Crédito a informar", category: "Formação" },
  { year: "2024", title: "Capoeira nas escolas", date: "Data a informar", image: "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1600&q=80", alt: "Atividade em escola parceira", caption: "Atividade realizada em escola do território.", credit: "Crédito a informar", category: "Escolas" },
  { year: "2024", title: "Encontro de mestres", date: "Data a informar", image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1600&q=80", alt: "Encontro comunitário de mestres", caption: "Roda de conversa entre mestres e educadores.", credit: "Crédito a informar", category: "Encontro" },
  { year: "2023", title: "Roda comunitária de aniversário", date: "Data a informar", image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1600&q=80", alt: "Roda coletiva de Capoeira", caption: "Celebração de aniversário do Ponto de Cultura.", credit: "Crédito a informar", category: "Roda de Capoeira" },
  { year: "2023", title: "Vivência com famílias", date: "Data a informar", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80", alt: "Famílias participando de atividade", caption: "Atividade voltada às famílias do território.", credit: "Crédito a informar", category: "Comunidade" },
];

export const TESTIMONIALS = [
  { name: "Nome do participante", role: "Aluno(a) do projeto", text: "A Capoeira mudou minha relação com meu corpo, minha história e meu território." },
  { name: "Nome da família", role: "Responsável", text: "Ver a criança pertencer a esse coletivo é acompanhar o nascer de uma nova consciência cultural." },
  { name: "Nome do educador", role: "Educador(a) parceiro(a)", text: "É uma prática cultural que educa integralmente: corpo, memória, escuta e cidadania." },
];

export const PARTNERS = Array.from({ length: 8 }).map((_, i) => ({
  name: `Parceiro ${i + 1}`,
}));
