export const supportNetwork = [
  { title: "Sistema de Incentivo Estadual à Cultura", acronym: "SIEC", text: "Mecanismo de incentivo mencionado entre as formas de apoio relacionadas à trajetória institucional da Motirô." },
  { title: "Equatorial", text: "Instituição mencionada em iniciativas relacionadas ao fomento cultural." },
  { title: "Fundo da Infância e Adolescência", acronym: "FIA", text: "Mecanismo de apoio relacionado a iniciativas voltadas à infância e à adolescência." },
  { title: "Prefeitura de José de Freitas", text: "Poder público municipal mencionado entre as articulações institucionais relacionadas às ações da Motirô." },
  { title: "Instituições parceiras", text: "Instituições educacionais, culturais e comunitárias que contribuem para ampliar o alcance das ações e fortalecer a atuação em rede." },
];

export const archiveCategories = [
  { id: "projetos", title: "Projetos apoiados e instrumentos de fomento" },
  { id: "termos", title: "Termos, parcerias e convênios" },
  { id: "contas", title: "Prestações de contas" },
  { id: "relatorios", title: "Relatórios de atividades" },
  { id: "institucionais", title: "Documentos institucionais" },
  { id: "certidoes", title: "Certidões e regularidade" },
];

export type PublicDocument = {
  category: string; title: string; url: string; description?: string;
  project?: string; year?: string; period?: string; partner?: string; instrument?: string;
};
// Populate only when Motirô supplies an actual document and its confirmed metadata.
export const publicDocuments: PublicDocument[] = [];