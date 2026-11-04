import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProjectImage } from "./ProjectImage";
import { ImageAttribution } from "./ImageAttribution";
import { initiativeForSlug } from "./detail-content";
import type { Activity } from "./activities";

/** Compact overview card: image, name, approved short subtitle and link. */
export function CompactProjectCard({ item }: { item: Activity }) {
  const summary = initiativeForSlug(item.slug!)?.subtitle ?? item.eyebrow;
  return <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-md">
    <div className="relative aspect-[16/9] overflow-hidden">
      <ProjectImage src={item.image} alt={item.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      {item.credit && <ImageAttribution {...item.credit} />}
    </div>
    <div className="flex flex-1 flex-col p-5">
      {item.independent && <span className="mb-2 w-fit rounded-full bg-verde/10 px-2.5 py-0.5 text-[11px] font-semibold text-verde">Iniciativa independente</span>}
      <h3 className="font-display text-lg font-bold">{item.title}</h3>
      {summary && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{summary}</p>}
      <Link to="/projetos/$slug" params={{ slug: item.slug! }} className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary hover:underline underline-offset-4">Conhecer<ArrowRight className="size-4" aria-hidden="true" /></Link>
    </div>
  </article>;
}
