import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { LogoMark } from "./Header";

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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LogoMark />
              <div>
                <div className="font-display font-extrabold text-sm tracking-tight">PONTO DE CULTURA</div>
                <div className="eyebrow text-ouro text-[10px]">Capoeira · Memória · Território</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Organização cultural dedicada à valorização da Capoeira, da cultura afro-brasileira e do fortalecimento comunitário.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-ouro hover:text-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-ouro hover:text-primary transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SITE.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-ouro hover:text-primary transition">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm eyebrow text-ouro mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ouro">Início</Link></li>
              <li><Link to="/quem-somos" className="hover:text-ouro">Quem Somos</Link></li>
              <li><Link to="/quem-somos/equipe" className="hover:text-ouro">Equipe</Link></li>
              <li><Link to="/quem-somos/transparencia" className="hover:text-ouro">Transparência</Link></li>
              <li><Link to="/noticias" className="hover:text-ouro">Notícias</Link></li>
              <li><Link to="/galeria" className="hover:text-ouro">Galeria</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm eyebrow text-ouro mb-4">Projetos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/projetos" className="hover:text-ouro">Todos os projetos</Link></li>
              <li><Link to="/projetos/capoeira-para-todos" className="hover:text-ouro">Capoeira para Todos</Link></li>
              <li><Link to="/projetos/ritmos-da-ancestralidade" className="hover:text-ouro">Ritmos da Ancestralidade</Link></li>
              <li><Link to="/projetos/roda-memoria-e-territorio" className="hover:text-ouro">Roda, Memória e Território</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm eyebrow text-ouro mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-ouro mt-0.5" /><span>{SITE.address}</span></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-ouro mt-0.5" /><span>{SITE.phone}</span></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-ouro mt-0.5" /><span>{SITE.email}</span></li>
            </ul>
            <Link to="/contato" className="mt-5 inline-flex items-center rounded-full bg-ouro px-4 py-2 text-sm font-semibold text-primary hover:brightness-95">
              Fale conosco
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-ouro">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-ouro">Termos de Uso</Link>
            <Link to="/quem-somos/transparencia" className="hover:text-ouro">Transparência</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
