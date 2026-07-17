import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  variant?: "azul" | "ouro" | "laranja" | "vermelho" | "verde" | "primary";
  children?: ReactNode;
}

const overlay: Record<string, string> = {
  azul: "from-azul/85 via-primary/70 to-primary/40",
  ouro: "from-ouro/80 via-vermelho/60 to-primary/50",
  laranja: "from-laranja/85 via-vermelho/60 to-primary/40",
  vermelho: "from-vermelho/85 via-primary/60 to-primary/40",
  verde: "from-verde/80 via-primary/70 to-primary/40",
  primary: "from-primary/85 via-primary/70 to-primary/40",
};

export function InternalHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  variant = "primary",
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className={cn("absolute inset-0 bg-gradient-to-br", overlay[variant])} />
      {/* Graphic elements */}
      <svg className="absolute -right-10 -top-10 h-64 w-64 opacity-30" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeDasharray="4 8" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="var(--creme)" strokeWidth="1.5" />
      </svg>
      <svg className="absolute -left-16 bottom-0 h-56 w-56 opacity-25" viewBox="0 0 200 200" aria-hidden>
        <path d="M20 180 Q 100 20 180 180" fill="none" stroke="var(--ouro)" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {eyebrow && <div className="eyebrow text-ouro mb-3">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  as?: "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <div className="eyebrow text-laranja mb-3">{eyebrow}</div>}
      <As className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
        {title}
      </As>
      {description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
