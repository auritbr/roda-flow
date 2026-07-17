import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "azul" | "vermelho" | "ouro" | "laranja" | "verde";

const bgClass: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  azul: "bg-azul text-white",
  vermelho: "bg-vermelho text-white",
  ouro: "bg-ouro text-primary",
  laranja: "bg-laranja text-white",
  verde: "bg-verde text-white",
};

const accentStroke: Record<Variant, string> = {
  primary: "var(--ouro)",
  azul: "var(--ouro)",
  vermelho: "var(--ouro)",
  ouro: "var(--vermelho)",
  laranja: "var(--ouro)",
  verde: "var(--ouro)",
};

export type FinalCtaButton = {
  label: string;
  to?: string;
  href?: string;
  variant?: "solid" | "outline";
};

export function FinalCta({
  eyebrow,
  title,
  description,
  buttons,
  variant = "primary",
  image,
  imageAlt = "",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  buttons?: FinalCtaButton[];
  variant?: Variant;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  const isOuro = variant === "ouro";
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl ${bgClass[variant]} shadow-xl`}>
          {/* Grafismos */}
          <svg
            className="absolute -left-16 -top-16 h-72 w-72 opacity-25 pointer-events-none"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <circle cx="100" cy="100" r="80" fill="none" stroke={accentStroke[variant]} strokeWidth="2" strokeDasharray="6 10" />
            <circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg
            className="absolute -right-10 -bottom-14 h-64 w-64 opacity-25 pointer-events-none"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <path d="M10 170 Q 100 20 190 170" fill="none" stroke={accentStroke[variant]} strokeWidth="3" strokeLinecap="round" />
            <path d="M30 180 Q 100 60 170 180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </svg>
          <svg
            className="absolute right-10 top-8 h-16 w-16 opacity-70 pointer-events-none"
            viewBox="0 0 60 60"
            aria-hidden
          >
            <rect x="22" y="22" width="16" height="16" transform="rotate(45 30 30)" fill={accentStroke[variant]} />
          </svg>
          <svg
            className="absolute left-1/3 bottom-6 h-6 w-24 opacity-70 pointer-events-none"
            viewBox="0 0 120 24"
            aria-hidden
          >
            <path d="M2 18 Q 30 4 60 14 T 118 10" fill="none" stroke={accentStroke[variant]} strokeWidth="3" strokeLinecap="round" />
          </svg>

          <div className={`relative grid gap-8 ${image ? "md:grid-cols-2" : ""} items-center p-8 md:p-12`}>
            <div>
              {eyebrow && (
                <div className={`eyebrow ${isOuro ? "text-vermelho" : "text-ouro"}`}>{eyebrow}</div>
              )}
              <h2 className="mt-2 font-display text-2xl md:text-4xl font-extrabold leading-tight">
                {title}
              </h2>
              {description && (
                <p className={`mt-4 max-w-2xl leading-relaxed ${isOuro ? "text-primary/85" : "text-white/90"}`}>
                  {description}
                </p>
              )}
              {children}
              {buttons && buttons.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {buttons.map((b, i) => {
                    const isSolid = (b.variant ?? (i === 0 ? "solid" : "outline")) === "solid";
                    const cls = isSolid
                      ? isOuro
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-white text-primary hover:bg-white/90"
                      : isOuro
                        ? "border border-primary/40 text-primary hover:bg-primary/10"
                        : "border border-white/60 text-white hover:bg-white/10";
                    const inner = (
                      <>
                        {b.label}
                        {isSolid && <ArrowRight className="h-4 w-4" />}
                      </>
                    );
                    const base = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${cls}`;
                    if (b.href) {
                      return (
                        <a key={i} href={b.href} className={base}>
                          {inner}
                        </a>
                      );
                    }
                    return (
                      <Link key={i} to={b.to ?? "/contato"} className={base}>
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            {image && (
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-lg">
                  <img src={image} alt={imageAlt} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                </div>
                <div className="pointer-events-none absolute -left-3 -bottom-3 h-16 w-16 rounded-full border-2 border-ouro" aria-hidden />
                <div className="pointer-events-none absolute -right-3 -top-3 h-10 w-10 rounded-full bg-ouro/80" aria-hidden />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
