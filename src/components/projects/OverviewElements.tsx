import type { LucideIcon } from "lucide-react";

export function Paragraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">{paragraphs.map((text) => <p key={text}>{text}</p>)}</div>;
}

export function MovementMark({ className = "" }: { className?: string }) {
  return <svg className={`pointer-events-none ${className}`} viewBox="0 0 120 60" aria-hidden="true"><path d="M2 42 Q30 4 60 32 T118 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M78 7 L84 13 L78 19 L72 13Z" fill="currentColor" /></svg>;
}

export function ActivityTags({ items }: { items: readonly string[] }) {
  return <ul className="flex flex-wrap gap-2">{items.map((item) => <li key={item} className="rounded-full border border-current/20 px-3 py-1 text-xs font-medium">{item}</li>)}</ul>;
}

export function InformationCard({ title, text, color, accent, icon: Icon }: { title: string; text: string; color: string; accent: string; icon: LucideIcon }) {
  return <article className={`relative overflow-hidden rounded-xl p-5 ${color}`}><Icon className={`mb-4 size-7 ${accent}`} strokeWidth={1.5} aria-hidden="true" /><h3 className="font-display text-base font-bold leading-snug">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>;
}
