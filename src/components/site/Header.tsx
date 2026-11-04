import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";

const NAV = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Quem Somos", to: "/quem-somos" },
      { label: "Equipe", to: "/quem-somos/equipe" },
      { label: "Memória Institucional", to: "/memoria-institucional" },
      { label: "Parcerias e Transparência", to: "/quem-somos/parcerias-e-transparencia" },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos",
    children: [
      { label: "Além da Ginga", to: "/projetos/$slug", params: { slug: "alem-da-ginga" }, primary: true },
      { label: "Handebol Motirô", to: "/projetos/$slug", params: { slug: "handebol-motiro" } },
      { label: "Brincando e Crescendo Juntos", to: "/projetos/$slug", params: { slug: "brincando-e-crescendo-juntos" } },
      { label: "Formação Esportiva e Conquistas", to: "/projetos/formacao-esportiva" },
    ],
  },
  { label: "Impacto Social", to: "/impacto-social" },
  { label: "Agenda", to: "/agenda" },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
] as const;

const PROGRAM_CHILDREN = [
  { label: "Capoeira Motirô", slug: "capoeira-motiro" },
  { label: "Teatro Motirô", slug: "teatro-motiro" },
  { label: "Oficina da Leitura", slug: "oficina-da-leitura" },
  { label: "Cine Motirô", slug: "cine-motiro" },
  { label: "Dança, ritmo e tradição", slug: "danca" },
] as const;

/** Desktop "Além da Ginga" row with a lateral flyout that flips left when there is no room. */
function ProgramFlyout() {
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    const r = ref.current?.getBoundingClientRect();
    if (r) setLeft(r.right + 260 > window.innerWidth);
    setOpen(true);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 250);
  };
  return (
    <div
      ref={ref}
      className="relative flex items-stretch"
      onMouseEnter={show}
      onMouseLeave={hide}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(false);
          ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}
      onBlur={(e) => { if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false); }}
    >
      <Link
        to="/projetos/$slug"
        params={{ slug: "alem-da-ginga" }}
        activeProps={{ className: "bg-muted" }}
        className="flex-1 block px-4 py-2.5 text-sm font-bold text-primary hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ouro"
      >
        Além da Ginga
      </Link>
      <button
        type="button"
        aria-label="Abrir projetos do Além da Ginga"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={(e) => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); show(); setTimeout(() => ref.current?.querySelector<HTMLAnchorElement>("[data-flyout] a")?.focus(), 0); } }}
        className="px-3 text-primary/70 hover:bg-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ouro"
      >
        <ChevronRight className={cn("h-4 w-4 transition-transform", open && left && "rotate-180")} />
      </button>
      <div
        data-flyout
        className={cn(
          "absolute top-0 z-10 transition duration-200",
          left ? "right-full pr-1" : "left-full pl-1",
          open ? "visible opacity-100 translate-x-0" : "invisible opacity-0 pointer-events-none",
          !open && (left ? "translate-x-1" : "-translate-x-1")
        )}
        role="menu"
        onMouseEnter={show}
      >
        <div className="w-[240px] rounded-lg border border-border bg-card shadow-lg overflow-hidden py-1">
          {PROGRAM_CHILDREN.map((c) => (
            <Link
              key={c.slug}
              to="/projetos/$slug"
              params={{ slug: c.slug }}
              tabIndex={open ? 0 : -1}
              activeProps={{ className: "bg-muted text-primary" }}
              className="block px-4 py-2 text-sm text-foreground/85 hover:bg-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ouro"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [programOpen, setProgramOpen] = useState(false);

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
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
            {NAV.map((item) => (
              <div key={item.label} className="relative group" onKeyDown={(e) => { if (e.key === "Escape") (document.activeElement as HTMLElement | null)?.blur(); }}>
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
                    className={cn("invisible absolute top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100", item.label === "Projetos" ? "left-1/2 -translate-x-1/2" : "left-0")}
                    role="menu"
                  >
                    <div className={cn("rounded-lg border border-border bg-card shadow-lg", item.label === "Projetos" ? "w-[300px] max-w-[calc(100vw-2rem)] py-1" : "min-w-[240px] overflow-hidden")}>
                      <>
                      {item.children.map((c) => "primary" in c ? <ProgramFlyout key={c.label} /> : (
                        <Link
                          key={c.label}
                          to={c.to}
                          params={"params" in c ? c.params : undefined}
                          activeProps={{ className: "bg-muted text-primary" }}
                          className={cn("block px-4 text-sm hover:bg-muted transition-colors", "py-2.5", c.label === "Handebol Motirô" && "border-t border-border")}
                        >
                          {c.label}
                        </Link>
                      ))}
                      {item.label === "Projetos" && <Link to="/projetos" className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-muted transition-colors">Ver todos os projetos</Link>}
                      </>
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
          <div className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background">
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
                          {item.children.map((c) => "primary" in c ? (
                            <div key={c.label}>
                              <div className="flex items-center">
                                <Link to="/projetos/$slug" params={{ slug: "alem-da-ginga" }} onClick={() => setOpen(false)} className="flex-1 block px-3 py-2 text-sm font-bold text-primary">Além da Ginga</Link>
                                <button type="button" onClick={() => setProgramOpen(!programOpen)} aria-expanded={programOpen} aria-label="Mostrar projetos do Além da Ginga" className="inline-flex h-9 w-9 items-center justify-center rounded-md text-primary hover:bg-muted">
                                  <ChevronDown className={cn("h-4 w-4 transition", programOpen && "rotate-180")} />
                                </button>
                              </div>
                              {programOpen && (
                                <div className="ml-3 space-y-0.5">
                                  {PROGRAM_CHILDREN.map((p) => (
                                    <Link key={p.slug} to="/projetos/$slug" params={{ slug: p.slug }} onClick={() => setOpen(false)} className="block border-l border-ouro/60 py-1.5 pl-3 text-[13px] text-foreground/80 hover:text-primary">{p.label}</Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={c.label}
                              to={c.to}
                              params={"params" in c ? c.params : undefined}
                              onClick={() => setOpen(false)}
                              className={cn("block px-3 py-2 text-sm text-foreground/80 hover:text-primary", )}
                            >
                              {c.label}
                            </Link>
                          ))}
                          {item.label === "Projetos" && <Link to="/projetos" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-semibold text-primary">Ver todos os projetos</Link>}
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
  return <img src="/images/logo-motiro.png" alt="Logo da Motirô" width={458} height={600} className={cn("h-11 w-auto object-contain", className)} />;
}
