import { useEffect, useState } from "react";
import { Cookie, Accessibility, MessageCircle, X, Plus, Minus, Contrast, Palette, Link as LinkIcon, Type, Pause, RotateCcw } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/* ---------------- WhatsApp ---------------- */
export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-4 md:right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-ouro focus-visible:ring-offset-2"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M20.52 3.449C18.24 1.196 15.24 0 12.045 0 5.463 0 .105 5.334.104 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12 12 0 005.71 1.447h.005c6.581 0 11.938-5.335 11.94-11.894 0-3.18-1.24-6.167-3.47-8.452zm-8.475 18.297h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.977 1.001-3.64-.235-.373a9.86 9.86 0 01-1.51-5.26c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.821 9.821 0 012.893 6.994c-.003 5.45-4.437 9.88-9.888 9.88z"/>
      </svg>
    </a>
  );
}

/* ---------------- VLibras ---------------- */
export function VLibrasIntegration() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("vlibras-script")) return;
    const script = document.createElement("script");
    script.id = "vlibras-script";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      try {
        // @ts-ignore
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      } catch (e) {}
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="enabled"
      ref={(el) => {
        if (el && !el.hasAttribute("vw")) {
          el.setAttribute("vw", "");
          const btn = document.createElement("div");
          btn.setAttribute("vw-access-button", "");
          btn.className = "active";
          const wrap = document.createElement("div");
          wrap.setAttribute("vw-plugin-wrapper", "");
          const top = document.createElement("div");
          top.className = "vw-plugin-top-wrapper";
          wrap.appendChild(top);
          el.appendChild(btn);
          el.appendChild(wrap);
        }
      }}
    />
  );
}

/* ---------------- Accessibility ---------------- */
type A11yState = {
  fontStep: number;
  contrast: boolean;
  grayscale: boolean;
  highlight: boolean;
  legibleFont: boolean;
  pauseAnim: boolean;
};
const A11Y_KEY = "a11y-prefs";
const DEFAULT_A11Y: A11yState = { fontStep: 0, contrast: false, grayscale: false, highlight: false, legibleFont: false, pauseAnim: false };

function applyA11y(s: A11yState) {
  const html = document.documentElement;
  html.style.fontSize = `${100 + s.fontStep * 10}%`;
  html.classList.toggle("a11y-contrast", s.contrast);
  html.classList.toggle("a11y-grayscale", s.grayscale);
  html.classList.toggle("a11y-highlight-links", s.highlight);
  html.classList.toggle("a11y-legible-font", s.legibleFont);
  html.classList.toggle("a11y-pause-anim", s.pauseAnim);
}

/* ---------------- Cookie context via localStorage ---------------- */
type CookiePrefs = {
  necessary: true;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
  consented: boolean;
};
const COOKIE_KEY = "cookie-prefs";
const DEFAULT_COOKIES: CookiePrefs = { necessary: true, preferences: false, statistics: false, marketing: false, consented: false };

export function FloatingWidgets() {
  const [a11yOpen, setA11yOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [a11y, setA11y] = useState<A11yState>(DEFAULT_A11Y);
  const [cookies, setCookies] = useState<CookiePrefs>(DEFAULT_COOKIES);

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(A11Y_KEY) || "null");
      if (s) { setA11y(s); applyA11y(s); }
      const c = JSON.parse(localStorage.getItem(COOKIE_KEY) || "null");
      if (c) setCookies(c);
      else setBannerOpen(true);
    } catch {}
  }, []);

  const updateA11y = (patch: Partial<A11yState>) => {
    const next = { ...a11y, ...patch };
    setA11y(next);
    applyA11y(next);
    try { localStorage.setItem(A11Y_KEY, JSON.stringify(next)); } catch {}
  };
  const resetA11y = () => {
    setA11y(DEFAULT_A11Y);
    applyA11y(DEFAULT_A11Y);
    try { localStorage.removeItem(A11Y_KEY); } catch {}
  };

  const saveCookies = (c: CookiePrefs) => {
    const next = { ...c, consented: true };
    setCookies(next);
    try { localStorage.setItem(COOKIE_KEY, JSON.stringify(next)); } catch {}
    setBannerOpen(false);
    setCookieOpen(false);
  };

  return (
    <>
      {/* bottom-left group */}
      <div className="fixed bottom-5 left-4 md:left-6 z-40 flex flex-col gap-2">
        <button
          onClick={() => setCookieOpen(true)}
          aria-label="Preferências de cookies"
          title="Preferências de cookies"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-foreground shadow hover:bg-muted transition"
        >
          <Cookie className="h-5 w-5" />
        </button>
        <button
          onClick={() => setA11yOpen(true)}
          aria-label="Recursos de acessibilidade"
          title="Acessibilidade"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90 transition"
        >
          <Accessibility className="h-5 w-5" />
        </button>
      </div>

      {/* Accessibility panel */}
      {a11yOpen && (
        <div role="dialog" aria-modal="true" aria-label="Painel de acessibilidade" className="fixed inset-0 z-[70] flex items-end md:items-center md:justify-start">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setA11yOpen(false)} />
          <div className="relative m-3 md:ml-6 w-full md:w-96 rounded-2xl bg-card border border-border shadow-2xl p-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="eyebrow text-laranja">Acessibilidade</div>
                <h2 className="font-display text-xl font-bold">Recursos disponíveis</h2>
              </div>
              <button aria-label="Fechar" onClick={() => setA11yOpen(false)} className="rounded-full p-1.5 hover:bg-muted">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="flex items-center gap-2"><Type className="h-4 w-4" /> Tamanho do texto</span>
                <div className="flex items-center gap-1">
                  <button aria-label="Diminuir texto" onClick={() => updateA11y({ fontStep: Math.max(-2, a11y.fontStep - 1) })} className="h-8 w-8 rounded-md border hover:bg-muted"><Minus className="h-4 w-4 mx-auto" /></button>
                  <span className="w-8 text-center font-semibold">{a11y.fontStep >= 0 ? `+${a11y.fontStep}` : a11y.fontStep}</span>
                  <button aria-label="Aumentar texto" onClick={() => updateA11y({ fontStep: Math.min(4, a11y.fontStep + 1) })} className="h-8 w-8 rounded-md border hover:bg-muted"><Plus className="h-4 w-4 mx-auto" /></button>
                </div>
              </div>
              <A11yToggle label="Alto contraste" icon={<Contrast className="h-4 w-4" />} on={a11y.contrast} onChange={(v) => updateA11y({ contrast: v })} />
              <A11yToggle label="Tons de cinza" icon={<Palette className="h-4 w-4" />} on={a11y.grayscale} onChange={(v) => updateA11y({ grayscale: v })} />
              <A11yToggle label="Destacar links" icon={<LinkIcon className="h-4 w-4" />} on={a11y.highlight} onChange={(v) => updateA11y({ highlight: v })} />
              <A11yToggle label="Fonte legível" icon={<Type className="h-4 w-4" />} on={a11y.legibleFont} onChange={(v) => updateA11y({ legibleFont: v })} />
              <A11yToggle label="Pausar animações" icon={<Pause className="h-4 w-4" />} on={a11y.pauseAnim} onChange={(v) => updateA11y({ pauseAnim: v })} />
            </div>
            <button onClick={resetA11y} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              <RotateCcw className="h-4 w-4" /> Restaurar configurações
            </button>
          </div>
        </div>
      )}

      {/* Cookie banner */}
      {bannerOpen && !cookieOpen && (
        <div role="dialog" aria-label="Aviso de cookies" className="fixed bottom-4 left-4 right-4 md:left-auto md:right-24 md:bottom-6 md:max-w-md z-30 rounded-xl bg-card border border-border shadow-2xl p-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-ouro shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-foreground leading-relaxed">
                Utilizamos cookies para melhorar sua experiência. Você pode aceitar todos, recusar não essenciais ou personalizar as opções.{" "}
                <Link to="/politica-de-privacidade" className="text-primary underline">Política de Privacidade</Link>.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={() => saveCookies({ necessary: true, preferences: true, statistics: true, marketing: true, consented: true })} className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90">Aceitar todos</button>
                <button onClick={() => saveCookies({ necessary: true, preferences: false, statistics: false, marketing: false, consented: true })} className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted">Recusar não essenciais</button>
                <button onClick={() => setCookieOpen(true)} className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted">Personalizar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie preferences modal */}
      {cookieOpen && (
        <div role="dialog" aria-modal="true" aria-label="Preferências de cookies" className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setCookieOpen(false)} />
          <div className="relative w-full max-w-lg rounded-2xl bg-card border border-border shadow-2xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="eyebrow text-laranja">Cookies</div>
                <h2 className="font-display text-xl font-bold">Preferências</h2>
              </div>
              <button aria-label="Fechar" onClick={() => setCookieOpen(false)} className="rounded-full p-1.5 hover:bg-muted"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-2 text-sm">
              <CookieRow title="Necessários" description="Essenciais para o funcionamento do site." locked value={true} onChange={() => {}} />
              <CookieRow title="Preferências" description="Salvam configurações de acessibilidade e navegação." value={cookies.preferences} onChange={(v) => setCookies({ ...cookies, preferences: v })} />
              <CookieRow title="Estatísticas" description="Ajudam a entender como o site é utilizado, de forma anonimizada." value={cookies.statistics} onChange={(v) => setCookies({ ...cookies, statistics: v })} />
              <CookieRow title="Marketing" description="Permitem conteúdo e comunicação mais relevantes." value={cookies.marketing} onChange={(v) => setCookies({ ...cookies, marketing: v })} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2 justify-end">
              <button onClick={() => saveCookies({ necessary: true, preferences: false, statistics: false, marketing: false, consented: true })} className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted">Recusar não essenciais</button>
              <button onClick={() => saveCookies({ ...cookies, consented: true })} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Salvar preferências</button>
            </div>
          </div>
        </div>
      )}

      <WhatsAppButton />
      <VLibrasIntegration />
    </>
  );
}

function A11yToggle({ label, icon, on, onChange }: { label: string; icon: React.ReactNode; on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!on)}
      className={cn(
        "flex w-full items-center justify-between rounded-lg border p-3 text-left transition",
        on ? "border-primary bg-primary/5" : "border-border hover:bg-muted"
      )}
      aria-pressed={on}
    >
      <span className="flex items-center gap-2">{icon} {label}</span>
      <span className={cn("relative inline-flex h-5 w-9 rounded-full transition", on ? "bg-primary" : "bg-muted-foreground/30")}>
        <span className={cn("absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform", on ? "translate-x-4" : "translate-x-0.5")} />
      </span>
    </button>
  );
}

function CookieRow({ title, description, value, onChange, locked }: { title: string; description: string; value: boolean; onChange: (v: boolean) => void; locked?: boolean }) {
  return (
    <div className={cn("flex items-start justify-between gap-4 rounded-lg border p-3", value ? "border-primary/40 bg-primary/5" : "border-border")}>
      <div className="flex-1">
        <div className="font-semibold text-sm">{title}</div>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
      <button
        disabled={locked}
        onClick={() => !locked && onChange(!value)}
        aria-pressed={value}
        aria-label={title}
        className={cn("relative inline-flex h-5 w-9 shrink-0 rounded-full transition", value ? "bg-primary" : "bg-muted-foreground/30", locked && "opacity-70 cursor-not-allowed")}
      >
        <span className={cn("absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform", value ? "translate-x-4" : "translate-x-0.5")} />
      </button>
    </div>
  );
}
