export type InitiativePhoto = {
  src: string;
  alt: string;
  caption?: string;
  authorized: boolean;
};

// Only verified institutional records belong here. Reference images are not records.
export const initiativeGalleries: Record<string, InitiativePhoto[]> = {};

export function authorizedPhotos(photos: readonly InitiativePhoto[]) {
  return photos.filter(photo => photo.authorized);
}

export function galleryIndex(index: number, offset: number, count: number) {
  return count > 0 ? ((index + offset) % count + count) % count : 0;
}