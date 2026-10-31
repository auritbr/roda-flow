import { useState } from "react";
import { Landmark, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Paragraphs({ items, className }: { items: string[]; className?: string }) {
  return <div className={cn("space-y-4 text-muted-foreground leading-relaxed", className)}>{items.map(text => <p key={text}>{text}</p>)}</div>;
}

export function MovementMark({ className }: { className?: string }) {
  return <svg viewBox="0 0 180 90" className={cn("h-16 w-32 text-ouro", className)} aria-hidden="true">
    <path d="M10 75 Q90 -15 170 75" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M30 80 Q90 15 150 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 7" />
    <rect x="84" y="48" width="12" height="12" transform="rotate(45 90 54)" fill="currentColor" />
  </svg>;
}

const tones = ["border-azul/30 bg-azul/5 text-azul", "border-vermelho/30 bg-vermelho/5 text-vermelho", "border-ouro/40 bg-ouro/10 text-primary", "border-verde/30 bg-verde/5 text-verde"];
export function CompactCard({ title, text, icon: Icon, index = 0 }: { title: string; text?: string; icon: LucideIcon; index?: number }) {
  return <article className={cn("rounded-xl border p-5", tones[index % tones.length])}>
    <Icon className="mb-3 h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
    <h3 className="font-display text-base font-bold leading-snug text-foreground">{title}</h3>
    {text && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>}
  </article>;
}

export function AboutPhoto({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return <div className={cn("relative overflow-hidden rounded-2xl bg-muted aspect-[4/3]", className)}>
    {failed ? <div className="flex h-full min-h-48 flex-col items-center justify-center text-primary" role="img" aria-label={alt}><MovementMark /><Landmark className="h-8 w-8" aria-hidden="true" /></div> : <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" onError={() => setFailed(true)} />}
  </div>;
}