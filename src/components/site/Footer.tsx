import { Link } from "@tanstack/react-router";
import { TikTokIcon } from "./TikTokIcon";
import type React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";
import { LogoMark } from "./Header";

const EMAIL = "acermotiro@gmail.com";
const PHONE = "(86) 99449-0190";
const WHATSAPP = `https://wa.me/5586994490190?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Motirô.")}`;
const ADDRESS = "Rua Robert Freitas Júnior, 1214, Centro, José de Freitas-PI, CEP 64110-000";

const P = "/projetos/$slug" as const;
const COLUMNS = [
  { title: "Institucional", links: [
    { label: "Quem Somos", to: "/quem-somos" },
    { label: "Equipe", to: "/quem-somos/equipe" },
    { label: "Impacto Social", to: "/impacto-social" },
    { label: "Parcerias e Transparência", to: "/quem-somos/parcerias-e-transparencia" },
    { label: "Memória Institucional", to: "/memoria-institucional" },
  ] },
  { title: "Projetos", links: [
    { label: "Além da Ginga", to: P, slug: "alem-da-ginga" },
    { label: "Capoeira Motirô", to: P, slug: "capoeira-motiro" },
    { label: "Teatro Motirô", to: P, slug: "teatro-motiro" },
    { label: "Oficina da Leitura", to: P, slug: "oficina-da-leitura" },
    { label: "Cine Motirô", to: P, slug: "cine-motiro" },
    { label: "Dança, ritmo e tradição", to: P, slug: "danca" },
    { label: "Handebol Motirô", to: P, slug: "handebol-motiro" },
    { label: "Brincando e Crescendo Juntos", to: P, slug: "brincando-e-crescendo-juntos" },
    { label: "Formação Esportiva e Conquistas", to: "/projetos/formacao-esportiva" },
  ] },
  { title: "Conteúdo", links: [
    { label: "Notícias", to: "/noticias" },
    { label: "Agenda", to: "/agenda" },
    { label: "Galeria", to: "/galeria" },
  ] },
  { title: "Legal", links: [
    { label: "Política de Privacidade", to: "/politica-de-privacidade" },
    { label: "Termos de Uso", to: "/termos-de-uso" },
  ] },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 bg-primary text-primary-foreground">
      {/* graphic arc */}
      <svg
        className="absolute -top-px left-0 right-0 w-full h-10 text-primary"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 40 Q 300 -10 600 20 T 1200 20 V40 Z" fill="currentColor" />
      </svg>
      <div className="absolute top-8 right-6 h-40 w-40 rounded-full border-2 border-ouro/40 opacity-40" aria-hidden />
      <div className="absolute top-20 right-16 h-24 w-24 rounded-full border-2 border-laranja/40 opacity-40" aria-hidden />

      {/* pincelada / brush arc on the left */}
      <svg
        className="absolute -top-1 left-4 h-10 w-56 opacity-40 pointer-events-none"
        viewBox="0 0 300 40"
        aria-hidden
      >
        <path d="M0 30 Q 80 4 150 20 T 300 12" fill="none" stroke="var(--ouro)" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 36 Q 100 20 200 30 T 300 26" fill="none" stroke="var(--laranja)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>

      {/* subtle diamond rhythm */}
      <svg className="absolute bottom-24 left-8 h-6 w-40 opacity-30 pointer-events-none" viewBox="0 0 200 20" aria-hidden>
        <g fill="var(--ouro)">
          <rect x="6" y="6" width="8" height="8" transform="rotate(45 10 10)" />
          <rect x="36" y="6" width="8" height="8" transform="rotate(45 40 10)" />
          <rect x="66" y="6" width="8" height="8" transform="rotate(45 70 10)" />
        </g>
      </svg>

      {/* bottom wavy separator */}
      <svg className="absolute bottom-16 right-0 h-8 w-72 opacity-25 pointer-events-none" viewBox="0 0 400 30" aria-hidden>
        <path d="M0 20 Q 50 4 100 18 T 200 14 T 300 18 T 400 12" fill="none" stroke="var(--ouro)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1fr_repeat(4,auto)] lg:gap-x-14">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/" aria-label="Motirô — início" className="inline-flex"><LogoMark className="h-16" /></Link>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display font-bold text-sm eyebrow text-ouro mb-4">{col.title}</h3>
              <ul className={cn("text-sm text-primary-foreground/85", col.title === "Projetos" ? "space-y-1.5" : "space-y-2")}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} params={"slug" in l ? { slug: l.slug } : undefined} className="hover:text-ouro transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-10 pb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ContactBlock icon={Mail} title="E-mail">
            <a href={`mailto:${EMAIL}`} className="hover:text-ouro transition-colors wrap-anywhere">{EMAIL}</a>
          </ContactBlock>
          <ContactBlock icon={Phone} title="Telefone / WhatsApp">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-ouro transition-colors">{PHONE}</a>
          </ContactBlock>
          <ContactBlock icon={MapPin} title="Endereço">
            <address className="not-italic max-w-[16rem]">{ADDRESS}</address>
          </ContactBlock>
          <div>
            <h3 className="font-display font-bold text-xs eyebrow text-ouro mb-3">Conecte-se</h3>
            <div className="flex items-center gap-3">
              <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-ouro hover:text-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SITE.social.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-ouro hover:text-primary transition">
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10 bg-primary-foreground/5 py-5 text-center text-xs text-primary-foreground/70">
        © 2026 Motirô. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function ContactBlock({ icon: Icon, title, children }: { icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display font-bold text-xs eyebrow text-ouro mb-3">{title}</h3>
      <div className="flex gap-2 text-sm text-primary-foreground/85">
        <Icon className="h-4 w-4 shrink-0 text-ouro mt-0.5" aria-hidden />
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
