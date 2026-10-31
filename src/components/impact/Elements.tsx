import { useState, type ReactNode } from "react";
import { CircleDot, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImpactParagraphs({ items, className }: { items: string[]; className?: string }) {
  return <div className={cn("space-y-4 leading-relaxed text-muted-foreground", className)}>{items.map((text) => <p key={text}>{text}</p>)}</div>;
}

export function ImpactPhoto({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
    {failed ? <div role="img" aria-label={alt} className="flex h-full items-center justify-center text-primary"><CircleDot className="size-12" aria-hidden="true" /></div> : <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" onError={() => setFailed(true)} />}
  </div>;
}

const contributionTones = ["border-primary/20 bg-primary/5 text-primary", "border-vermelho/20 bg-vermelho/5 text-vermelho", "border-ouro/30 bg-ouro/10 text-primary", "border-verde/20 bg-verde/5 text-verde"];
export function ContributionCard({ title, text, icon: Icon, index }: { title: string; text: string; icon: LucideIcon; index: number }) {
  return <article className={cn("rounded-xl border p-5", contributionTones[index % contributionTones.length])}>
    <Icon className="mb-3 size-5" strokeWidth={1.6} aria-hidden="true" />
    <h3 className="font-display text-base font-bold leading-snug text-foreground">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
  </article>;
}

export function ImpactWords({ items, inverse = false }: { items: { title: string; icon?: LucideIcon }[]; inverse?: boolean }) {
  return <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4">{items.map(({ title, icon: Icon }) => <li key={title} className={cn("inline-flex items-center gap-2 text-sm font-semibold", inverse ? "text-primary-foreground" : "text-primary")}>
    {Icon && <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />}{title}
  </li>)}</ul>;
}

export function ImpactSection({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("relative overflow-hidden py-16", className)}>{children}</section>;
}