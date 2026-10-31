export const memoryContent = {
  hero: "Um espaço dedicado à preservação de registros, documentos, imagens, certificados e marcos que ajudam a contar a trajetória da Motirô desde o início de suas atividades.",
  introduction: "A memória institucional fortalece a identidade da Motirô, valoriza sua trajetória e contribui para preservar documentos, imagens, reconhecimentos e acontecimentos marcantes relacionados ao desenvolvimento de suas ações culturais, esportivas, educativas e comunitárias.",
  archive: "Acesse categorias organizadas com documentos, certificados, reportagens e outros registros históricos da trajetória da Motirô.",
  gallery: "Espaço destinado a fotografias antigas, imagens de eventos marcantes e outros registros visuais da trajetória da Motirô.",
  living: "A organização da memória institucional permite valorizar a trajetória da Motirô, fortalecer sua identidade e ampliar o reconhecimento das experiências construídas ao longo do tempo.",
};
export const memoryHighlights = [
  { title: "Documentos históricos", description: "Registros institucionais e materiais que ajudam a compreender a trajetória da Motirô." },
  { title: "Fotografias antigas", description: "Imagens que preservam momentos importantes da atuação cultural e comunitária." },
  { title: "Reportagens", description: "Publicações e matérias relacionadas à presença da Motirô em diferentes contextos." },
  { title: "Certificados", description: "Reconhecimentos, títulos e documentos de valorização institucional." },
  { title: "Eventos marcantes", description: "Registros de ações, encontros e acontecimentos relevantes ao longo da trajetória." },
  { title: "Registros da trajetória", description: "Materiais que ajudam a reconstruir a história da instituição desde o início de suas atividades." },
];
export const memoryCategories = [
  { id: "documentos", title: "Documentos históricos", examples: ["Documento histórico — Exemplo de registro institucional", "Ata / registro institucional — Exemplo", "Material de memória — Documento demonstrativo"] },
  { id: "certificados", title: "Certificados e reconhecimentos", examples: ["Certificado institucional — Exemplo", "Reconhecimento cultural — Documento demonstrativo", "Certificação — Modelo de exibição"] },
  { id: "reportagens", title: "Reportagens e publicações", examples: ["Reportagem — Exemplo de publicação", "Matéria institucional — Documento demonstrativo", "Publicação sobre a trajetória — Exemplo"] },
  { id: "eventos", title: "Eventos marcantes", examples: ["Registro de evento marcante — Exemplo", "Memória de atividade institucional — Exemplo", "Marco da trajetória — Documento demonstrativo"] },
  { id: "fotografias", title: "Fotografias e registros visuais", examples: ["Galeria histórica — Exemplo", "Registro fotográfico institucional — Exemplo", "Fotografia de memória — Conteúdo demonstrativo"] },
  { id: "linha-do-tempo", title: "Linha do tempo e memória institucional", examples: ["Linha do tempo — Exemplo", "Marco institucional — Exemplo", "Memória cronológica — Documento demonstrativo"] },
];
export type MemoryExample = { id: string; category: string; title: string; type: string; demonstration: true };
export const memoryExamples: MemoryExample[] = memoryCategories.flatMap(category => category.examples.map((title, index) => ({ id: `${category.id}-${index + 1}`, category: category.id, title, type: "Documento demonstrativo", demonstration: true })));
// Confirmed records stay separate from visual demonstrations; no dates are assumed.
export const officialMemoryDocuments: { title: string; url: string; category: string; year?: number }[] = [];
export function memoryExampleText(example: MemoryExample) {
  return `MEMÓRIA INSTITUCIONAL — MOTIRÔ\nCONTEÚDO DEMONSTRATIVO\n\n${example.title}\nTipo: ${example.type}\n\nEste é apenas um exemplo de organização do acervo, para futura substituição por um arquivo real autorizado.\nNão representa um documento histórico, certificado, reportagem ou evento confirmado da Motirô. Não possui validade jurídica.\nNenhuma data, assinatura ou informação legal foi atribuída a este exemplo.`;
}