import photo1 from "@/assets/memory-placeholder-1.jpg";
import photo2 from "@/assets/memory-placeholder-2.jpg";
import photo3 from "@/assets/memory-placeholder-3.jpg";
import photo4 from "@/assets/memory-placeholder-4.jpg";
import photo5 from "@/assets/memory-placeholder-5.jpg";
import photo6 from "@/assets/memory-placeholder-6.jpg";
import type { InitiativePhoto } from "@/components/projects/initiative-gallery";
export const officialMemoryPhotos: InitiativePhoto[] = [];
export const memoryPlaceholderPhotos: InitiativePhoto[] = [
  { src: photo1, alt: "Imagem fictícia provisória de roda de capoeira em espaço comunitário", authorized: false, placeholder: true },
  { src: photo2, alt: "Imagem fictícia provisória de pastas de arquivo e fotografias antigas", authorized: false, placeholder: true },
  { src: photo3, alt: "Imagem fictícia provisória de instrumentos em encontro cultural", authorized: false, placeholder: true },
  { src: photo4, alt: "Imagem fictícia provisória de encontro comunitário", authorized: false, placeholder: true },
  { src: photo5, alt: "Imagem fictícia provisória de apresentação cultural", authorized: false, placeholder: true },
  { src: photo6, alt: "Imagem fictícia provisória de organização de fotografias e arquivos", authorized: false, placeholder: true },
];
export const memoryHero = photo2;