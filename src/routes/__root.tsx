import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { FloatingWidgets } from "../components/site/FloatingWidgets";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <main id="conteudo" className="min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <div className="eyebrow text-laranja">Erro 404</div>
          <h1 className="mt-3 font-display text-5xl font-extrabold text-foreground">Página não encontrada</h1>
          <p className="mt-3 text-muted-foreground">
            A página que você tentou acessar não existe ou foi movida.
          </p>
          <Link to="/" className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <>
      <Header />
      <main id="conteudo" className="min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold">Esta página não carregou</h1>
          <p className="mt-2 text-sm text-muted-foreground">Algo deu errado. Tente novamente ou retorne à página inicial.</p>
          <div className="mt-5 flex justify-center gap-2">
            <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Tentar novamente</button>
            <a href="/" className="rounded-full border border-input bg-background px-4 py-2 text-sm font-semibold hover:bg-muted">Ir para o início</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Motirô — Cultura, esporte, educação e comunidade" },
      { name: "description", content: "Motirô, Pontão de Cultura em José de Freitas, Piauí: cultura, esporte, educação e inclusão social." },
      { property: "og:site_name", content: "Motirô" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Motirô" },
      { property: "og:description", content: "Cultura, esporte, educação e inclusão social em José de Freitas, Piauí." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0E3B47" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico?v=motiro-2026" },
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png?v=motiro-2026", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png?v=motiro-2026", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=motiro-2026", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
      <FloatingWidgets />
    </QueryClientProvider>
  );
}
