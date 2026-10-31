import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, SectionTitle } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { CulturalBackdrop } from "@/components/site/CulturalBackdrop";
import { CompactCard } from "@/components/about/Elements";
import { InitiativeGallery } from "@/components/projects/InitiativeGallery";
import { MemoryArchive } from "@/components/memory/MemoryArchive";
import { memoryContent, memoryHighlights } from "@/components/memory/content";
import { memoryHero, memoryPlaceholderPhotos, officialMemoryPhotos } from "@/components/memory/gallery";
import { FileText, Images, Newspaper, Award, CalendarDays, History } from "lucide-react";
export const Route = createFileRoute("/memoria-institucional")({
  head: () => ({ meta: [
    { title: "Memória Institucional — Motirô" },
    { name: "description", content: memoryContent.hero },
    { property: "og:title", content: "Memória Institucional — Motirô" },
    { property: "og:description", content: memoryContent.hero },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: InstitutionalMemory,
});
const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const icons = [FileText, Images, Newspaper, Award, CalendarDays, History];
function InstitutionalMemory() {
  return <>
    <InternalHero eyebrow="Trajetória e memória" title="Memória Institucional" description={memoryContent.hero} image={memoryHero} imageAlt="Imagem fictícia provisória de arquivos e fotografias antigas" variant="azul" pattern="territorio" compact />
    <section className="relative overflow-hidden py-16"><CulturalBackdrop /><div className={`${container} relative`}><SectionTitle center eyebrow="Preservar a trajetória" title="Registros que ajudam a contar a história da Motirô" description={memoryContent.introduction} /></div></section>
    <section className="py-16"><div className={container}><SectionTitle center eyebrow="Acervo de memória" title="Diferentes registros de uma trajetória construída ao longo do tempo" /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{memoryHighlights.map((item, index) => <CompactCard key={item.title} title={item.title} text={item.description} icon={icons[index] ?? FileText} index={index} />)}</div></div></section>
    <MemoryArchive />
    <InitiativeGallery slug="memoria-institucional" photos={officialMemoryPhotos} placeholders={memoryPlaceholderPhotos} eyebrow="Registros visuais" title="Galeria histórica" description={memoryContent.gallery} />
    <section className="relative overflow-hidden bg-muted/40 py-16"><CulturalBackdrop variant="connections" /><div className={`${container} relative`}><SectionTitle center eyebrow="Memória viva" title="Preservar o passado também fortalece o futuro" description={memoryContent.living} /><div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-6 text-center sm:grid-cols-4">{["Identidade", "Trajetória", "Reconhecimento", "Continuidade"].map(word => <div key={word} className="font-display font-bold text-primary">{word}</div>)}</div></div></section>
    <FinalCta variant="azul" eyebrow="Conheça nossa trajetória" title="Cada registro ajuda a contar essa história" description="Explore os projetos, conheça a atuação institucional da Motirô e acompanhe os registros que preservam sua memória." buttons={[{ label: "Conheça os projetos", to: "/projetos" }, { label: "Fale conosco", to: "/contato" }]} />
  </>;
}