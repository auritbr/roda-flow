import capoeira1 from "@/assets/gallery-capoeira-1.jpg";
import capoeira2 from "@/assets/gallery-capoeira-2.jpg";
import capoeira3 from "@/assets/gallery-capoeira-3.jpg";
import capoeira4 from "@/assets/gallery-capoeira-4.jpg";
import capoeira5 from "@/assets/gallery-capoeira-5.jpg";
import capoeira6 from "@/assets/gallery-capoeira-6.jpg";
import teatro1 from "@/assets/gallery-teatro-1.jpg";
import teatro2 from "@/assets/gallery-teatro-2.jpg";
import teatro3 from "@/assets/gallery-teatro-3.jpg";
import teatro4 from "@/assets/gallery-teatro-4.jpg";
import teatro5 from "@/assets/gallery-teatro-5.jpg";
import teatro6 from "@/assets/gallery-teatro-6.jpg";
import leitura1 from "@/assets/gallery-leitura-1.jpg";
import leitura2 from "@/assets/gallery-leitura-2.jpg";
import leitura3 from "@/assets/gallery-leitura-3.jpg";
import leitura4 from "@/assets/gallery-leitura-4.jpg";
import leitura5 from "@/assets/gallery-leitura-5.jpg";
import leitura6 from "@/assets/gallery-leitura-6.jpg";
import cine1 from "@/assets/gallery-cine-1.jpg";
import cine2 from "@/assets/gallery-cine-2.jpg";
import cine3 from "@/assets/gallery-cine-3.jpg";
import cine4 from "@/assets/gallery-cine-4.jpg";
import cine5 from "@/assets/gallery-cine-5.jpg";
import cine6 from "@/assets/gallery-cine-6.jpg";
import danca1 from "@/assets/gallery-danca-1.jpg";
import danca2 from "@/assets/gallery-danca-2.jpg";
import danca3 from "@/assets/gallery-danca-3.jpg";
import danca4 from "@/assets/gallery-danca-4.jpg";
import danca5 from "@/assets/gallery-danca-5.jpg";
import danca6 from "@/assets/gallery-danca-6.jpg";
import handebol1 from "@/assets/gallery-handebol-1.jpg";
import handebol2 from "@/assets/gallery-handebol-2.jpg";
import handebol3 from "@/assets/gallery-handebol-3.jpg";
import handebol4 from "@/assets/gallery-handebol-4.jpg";
import handebol5 from "@/assets/gallery-handebol-5.jpg";
import handebol6 from "@/assets/gallery-handebol-6.jpg";
import inclusao1 from "@/assets/gallery-inclusao-1.jpg";
import inclusao2 from "@/assets/gallery-inclusao-2.jpg";
import inclusao3 from "@/assets/gallery-inclusao-3.jpg";
import inclusao4 from "@/assets/gallery-inclusao-4.jpg";
import inclusao5 from "@/assets/gallery-inclusao-5.jpg";
import inclusao6 from "@/assets/gallery-inclusao-6.jpg";
import type { InitiativePhoto } from "./initiative-gallery";

// Fictional placeholders explicitly authorized for visual development. Never official records.
const placeholder = (src: string, subject: string): InitiativePhoto => ({ src, alt: `Imagem fictícia provisória: ${subject}`, authorized: false, placeholder: true });
const capoeira = [
  placeholder(capoeira1, "Roda de capoeira"),
  placeholder(capoeira2, "Berimbau e caxixi"),
  placeholder(capoeira3, "Musicalidade com pandeiro e atabaque"),
  placeholder(capoeira4, "Treinamento de capoeira"),
  placeholder(capoeira5, "Roda coletiva"),
  placeholder(capoeira6, "Apresentação cultural"),
];
const teatro = [
  placeholder(teatro1, "Ensaio teatral"),
  placeholder(teatro2, "Apresentação teatral"),
  placeholder(teatro3, "Expressão corporal"),
  placeholder(teatro4, "Grupo em cena"),
  placeholder(teatro5, "Atividade educativa"),
  placeholder(teatro6, "Preparação cênica"),
];
const leitura = [
  placeholder(leitura1, "Crianças lendo vistas de costas, sem rostos identificáveis"),
  placeholder(leitura2, "Livros"),
  placeholder(leitura3, "Contação de histórias vista de costas"),
  placeholder(leitura4, "Atividade coletiva de leitura"),
  placeholder(leitura5, "Leitura orientada, detalhe das mãos"),
  placeholder(leitura6, "Produção escrita"),
];
const cine = [
  placeholder(cine1, "Sessão de cinema"),
  placeholder(cine2, "Projeção"),
  placeholder(cine3, "Público assistindo visto de costas"),
  placeholder(cine4, "Tela de cinema"),
  placeholder(cine5, "Encontro audiovisual"),
  placeholder(cine6, "Conversa após sessão"),
];
const danca = [
  placeholder(danca1, "Samba de roda"),
  placeholder(danca2, "Maculelê"),
  placeholder(danca3, "Dança coletiva"),
  placeholder(danca4, "Instrumentos tradicionais"),
  placeholder(danca5, "Expressão corporal"),
  placeholder(danca6, "Apresentação cultural"),
];
const handebol = [
  placeholder(handebol1, "Treino de handebol"),
  placeholder(handebol2, "Passe de handebol"),
  placeholder(handebol3, "Atividade em quadra"),
  placeholder(handebol4, "Trabalho em equipe"),
  placeholder(handebol5, "Jogo de handebol"),
  placeholder(handebol6, "Formação esportiva"),
];
const inclusao = [
  placeholder(inclusao1, "Atividade lúdica com blocos"),
  placeholder(inclusao2, "Convivência em mesa de atividades"),
  placeholder(inclusao3, "Expressão artística"),
  placeholder(inclusao4, "Interação por materiais criativos"),
  placeholder(inclusao5, "Atividade artística com argila"),
  placeholder(inclusao6, "Ambiente acolhedor sem pessoas"),
];
export const placeholderGalleries: Record<string, InitiativePhoto[]> = {
  "alem-da-ginga": [capoeira[0], teatro[0], leitura[0], cine[0], danca[0], handebol[0]],
  "capoeira-motiro": capoeira,
  "teatro-motiro": teatro,
  "oficina-da-leitura": leitura,
  "cine-motiro": cine,
  "danca": danca,
  "handebol-motiro": handebol,
  "brincando-e-crescendo-juntos": inclusao,
  "formacao-esportiva": [capoeira[3], capoeira[0], capoeira[4], capoeira[5], handebol[4], handebol[3]],
};
