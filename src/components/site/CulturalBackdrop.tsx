export function CulturalBackdrop({ variant = "arcs" }: { variant?: "arcs" | "connections" }) {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <svg className="absolute -left-20 -top-12 size-52 text-ouro opacity-20 md:size-72" viewBox="0 0 240 240">
      <path d="M38 195 A98 98 0 1 1 214 92" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M58 181 A75 75 0 1 1 190 85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 9" />
    </svg>
    <svg className="absolute -bottom-8 -right-10 h-32 w-52 text-vermelho opacity-15 md:h-44 md:w-72" viewBox="0 0 280 160">
      {variant === "connections" ? <><path d="M10 145 Q92 12 161 82 T280 35" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="100" cy="67" r="5" fill="currentColor" /><circle cx="228" cy="69" r="4" fill="currentColor" /></> : <><path d="M10 152 A120 120 0 0 1 250 152" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M38 152 A92 92 0 0 1 222 152" fill="none" stroke="currentColor" strokeWidth="1.5" /></>}
    </svg>
  </div>;
}