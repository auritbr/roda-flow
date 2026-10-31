export const supportNetwork: { title: string; acronym?: string; kind: string; logo?: string }[] = [
  { title: "Sistema de Incentivo Estadual à Cultura", acronym: "SIEC", kind: "Mecanismo de incentivo" },
  { title: "Equatorial", kind: "Apoio / fomento cultural" },
  { title: "Fundo da Infância e Adolescência", acronym: "FIA", kind: "Mecanismo de apoio" },
  { title: "Prefeitura de José de Freitas", kind: "Poder público municipal" },
  { title: "Instituições parceiras", kind: "Rede educacional, cultural e comunitária" },
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

export type DemonstrationDocument = {
  category: string; title: string; year?: string; type: string; demonstration: true;
};
export const demonstrationDocuments: DemonstrationDocument[] = [
  { category: "projetos", title: "Projeto Cultural — Exemplo de instrumento de fomento", year: "2026", type: "Documento demonstrativo", demonstration: true },
  { category: "termos", title: "Termo de Parceria — Documento demonstrativo", year: "2026", type: "Exemplo", demonstration: true },
  { category: "contas", title: "Prestação de Contas — Modelo de apresentação", year: "2026", type: "Documento demonstrativo", demonstration: true },
  { category: "relatorios", title: "Relatório de Atividades — Modelo", year: "2026", type: "Exemplo", demonstration: true },
  { category: "institucionais", title: "Documento Institucional — Modelo", type: "Documento demonstrativo", demonstration: true },
  { category: "certidoes", title: "Certidão — Modelo de exibição", type: "Documento demonstrativo", demonstration: true },
];

export function demonstrationText(document: DemonstrationDocument) {
  return ["CONTEÚDO DEMONSTRATIVO — DOCUMENTO DE EXEMPLO", "", document.title,
    ...(document.year ? [`Ano de exemplo: ${document.year}`] : []), `Tipo: ${document.type}`, "",
    "Exemplo visual do acervo. Não é um documento oficial da Motirô e não possui validade jurídica.",
    "Não representa parceria, contrato, prestação de contas ou certidão real."].join("\n");
}