import { GALLERY } from "@/lib/site-data";

export type GalleryPhoto = { src: string; alt: string; caption?: string };
export type EventGallery = { year: string; title: string; date?: string; images: GalleryPhoto[] };

export function groupEventGalleries(records: typeof GALLERY): EventGallery[] {
  const groups: EventGallery[] = [];
  for (const record of records) {
    let group = groups.find((item) => item.year === record.year && item.title === record.title);
    if (!group) {
      group = { year: record.year, title: record.title, images: [] };
      groups.push(group);
    }
    group.images.push({ src: record.image, alt: record.alt });
  }
  return groups;
}

export const eventGalleries = groupEventGalleries(GALLERY);
export const galleryYears = Array.from(new Set(eventGalleries.map((g) => g.year))).sort((a, b) => b.localeCompare(a));
export function galleriesForYear(year: string) {
  return eventGalleries.filter((g) => g.year === year);
}