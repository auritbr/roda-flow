import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  variant?: "azul" | "ouro" | "laranja" | "vermelho" | "verde" | "primary";
  pattern?: "roda" | "ginga" | "berimbau" | "ritmo" | "territorio" | "encontro";
  compact?: boolean;
  children?: ReactNode;
}

const overlay: Record<string, string> = {
  azul: "from-azul/85 via-primary/70 to-primary/30",
  ouro: "from-ouro/75 via-vermelho/55 to-primary/40",
  laranja: "from-laranja/85 via-vermelho/60 to-primary/35",
  vermelho: "from-vermelho/85 via-primary/60 to-primary/35",
  verde: "from-verde/80 via-primary/70 to-primary/35",
  primary: "from-primary/85 via-primary/70 to-primary/35",
};

/**
 * Capoeira-inspired graphic layers. Each pattern varies composition
 * (arcs of roda, ginga curves, berimbau strings, rhythmic diamonds)
 * without covering the subject's face — elements are pushed to the edges.
 */
function Graphics({ pattern = "roda" }: { pattern?: Props["pattern"] }) {
  return (
    <>
      {/* Top-right: incomplete circle (roda) */}
      <svg
        className="absolute -right-16 -top-16 h-72 w-72 opacity-40"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="var(--ouro)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
        <circle
          cx="100"
          cy="100"
          r="55"
          fill="none"
          stroke="var(--creme)"
          strokeWidth="1.5"
          strokeDasharray={pattern === "ritmo" ? "2 6" : undefined}
        />
        {pattern === "roda" && (
          <circle cx="100" cy="100" r="32" fill="none" stroke="var(--ouro)" strokeWidth="1" />
        )}
      </svg>

      {/* Bottom-left: ginga arc / curve */}
      <svg
        className="absolute -left-20 -bottom-4 h-60 w-72 opacity-30"
        viewBox="0 0 300 200"
        aria-hidden
      >
        {pattern === "ginga" ? (
          <>
            <path
              d="M0 160 Q 80 40 160 120 T 300 80"
              fill="none"
              stroke="var(--ouro)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M0 190 Q 100 90 200 150 T 300 130"
              fill="none"
              stroke="var(--creme)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M20 180 Q 150 20 280 180"
            fill="none"
            stroke="var(--ouro)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
      </svg>

      {/* Berimbau vertical strings (right side, subtle) */}
      {pattern === "berimbau" && (
        <svg
          className="absolute right-6 top-6 bottom-6 w-24 opacity-25 hidden md:block"
          viewBox="0 0 40 400"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line x1="10" y1="0" x2="10" y2="400" stroke="var(--ouro)" strokeWidth="1" />
          <line x1="20" y1="0" x2="20" y2="400" stroke="var(--creme)" strokeWidth="1" />
          <line x1="30" y1="0" x2="30" y2="400" stroke="var(--ouro)" strokeWidth="1" />
          <circle cx="20" cy="60" r="6" fill="var(--ouro)" />
          <circle cx="20" cy="200" r="4" fill="var(--creme)" />
          <circle cx="20" cy="340" r="6" fill="var(--ouro)" />
        </svg>
      )}

      {/* Rhythmic diamonds + triangles cluster */}
      <svg
        className="absolute right-8 bottom-8 h-24 w-40 opacity-40"
        viewBox="0 0 200 100"
        aria-hidden
      >
        <g fill="var(--ouro)">
          <rect x="10" y="45" width="10" height="10" transform="rotate(45 15 50)" />
          <rect x="40" y="35" width="14" height="14" transform="rotate(45 47 42)" />
          <rect x="80" y="50" width="8" height="8" transform="rotate(45 84 54)" />
        </g>
        <polygon points="120,70 140,30 160,70" fill="none" stroke="var(--creme)" strokeWidth="1.5" />
        <polygon points="160,80 175,55 190,80" fill="var(--creme)" opacity="0.6" />
      </svg>

      {/* Top-left brushed dashes (roda territory) */}
      {(pattern === "territorio" || pattern === "encontro") && (
        <svg
          className="absolute left-6 top-6 h-20 w-40 opacity-40"
          viewBox="0 0 200 80"
          aria-hidden
        >
          <line x1="0" y1="20" x2="60" y2="20" stroke="var(--ouro)" strokeWidth="3" strokeLinecap="round" />
          <line x1="10" y1="40" x2="80" y2="40" stroke="var(--creme)" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="60" x2="50" y2="60" stroke="var(--ouro)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}

      {/* Semicircle bottom-right (roda half) */}
      <svg
        className="absolute -bottom-24 right-1/4 h-48 w-96 opacity-25"
        viewBox="0 0 400 200"
        aria-hidden
      >
        <path
          d="M0 200 A 200 200 0 0 1 400 200"
          fill="none"
          stroke="var(--creme)"
          strokeWidth="2"
        />
        <path
          d="M40 200 A 160 160 0 0 1 360 200"
          fill="none"
          stroke="var(--ouro)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
      </svg>
    </>
  );
}

export function InternalHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  variant = "primary",
  pattern = "roda",
  compact = false,
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
      {/* Radial vignette to keep face area readable but not overdrawn */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,transparent_0%,transparent_35%,rgba(0,0,0,0.35)_100%)]" />

      <Graphics pattern={pattern} />

      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          compact ? "py-14 md:py-16" : "py-16 md:py-24",
        )}
      >
        {eyebrow && (
          <div className="eyebrow text-ouro mb-3 inline-flex items-center gap-2">
            <span className="inline-block h-1 w-6 rounded-full bg-ouro" />
            {eyebrow}
          </div>
        )}
        <h1
          className={cn(
            "font-display font-extrabold max-w-3xl leading-[1.05]",
            compact ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-5xl lg:text-6xl",
          )}
        >
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
