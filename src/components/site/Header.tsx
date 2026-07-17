import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";

const NAV = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Apresentação", to: "/quem-somos" },
      { label: "Equipe", to: "/quem-somos/equipe" },
      { label: "Transparência", to: "/quem-somos/transparencia" },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos",
    children: [
      { label: "Capoeira para Todos", to: "/projetos/capoeira-para-todos" },
      { label: "Ritmos da Ancestralidade", to: "/projetos/ritmos-da-ancestralidade" },
      { label: "Roda, Memória e Território", to: "/projetos/roda-memoria-e-territorio" },
    ],
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Pular para o conteúdo
      </a>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all",
          scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-background/80 backdrop-blur"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 group" aria-label={SITE.name}>
            <LogoMark />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-[13px] font-extrabold tracking-tight text-primary">PONTO DE CULTURA</span>
              <span className="text-[10px] eyebrow text-laranja">Capoeira · Memória · Território</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary [&_span]:after:scale-x-100" }}
                  inactiveProps={{ className: "text-foreground/80" }}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-ouro after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    {item.label}
                  </span>
                  {"children" in item && item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                </Link>
                {"children" in item && item.children && (
                  <div
                    className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                    role="menu"
                  >
                    <div className="min-w-[240px] rounded-lg border border-border bg-card shadow-lg overflow-hidden">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          activeProps={{ className: "bg-muted text-primary" }}
                          className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contato"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Fale conosco
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1" aria-label="Menu mobile">
              {NAV.map((item) => (
                <div key={item.label}>
                  {"children" in item && item.children ? (
                    <>
                      <button
                        onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium hover:bg-muted"
                        aria-expanded={openSub === item.label}
                      >
                        {item.label}
                        <ChevronDown className={cn("h-4 w-4 transition", openSub === item.label && "rotate-180")} />
                      </button>
                      {openSub === item.label && (
                        <div className="pl-4 py-1 space-y-1 border-l-2 border-ouro ml-3">
                          {item.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "bg-muted text-primary" }}
                      className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Fale conosco
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={cn("h-10 w-10", className)} aria-hidden="true">
      <circle cx="22" cy="22" r="20" fill="var(--primary)" />
      <path d="M8 22a14 14 0 0 1 28 0" stroke="var(--ouro)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M12 26 L22 14 L32 26" stroke="var(--creme)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="22" cy="30" r="2.2" fill="var(--laranja)" />
    </svg>
  );
}
