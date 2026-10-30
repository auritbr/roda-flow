import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
      { title: "Ponto de Cultura Capoeira — Memória, movimento e território" },
      { name: "description", content: "Ponto de Cultura dedicado à valorização da Capoeira, da cultura afro-brasileira, da educação e do fortalecimento comunitário." },
      { property: "og:site_name", content: "Ponto de Cultura Capoeira" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Ponto de Cultura Capoeira" },
      { property: "og:description", content: "Capoeira que preserva histórias e transforma territórios." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0E3B47" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/favicon.png", sizes: "64x64" },
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
