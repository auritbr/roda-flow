import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { SITE } from "@/lib/site-data";
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Ponto de Cultura Capoeira" },
      { name: "description", content: "Entre em contato com o Ponto de Cultura. Telefone, WhatsApp, e-mail, endereço e formulário." },
    ],
  }),
  component: Contato,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(120),
  email: z.string().trim().email("E-mail inválido").max(200),
  telefone: z.string().trim().max(40).optional().or(z.literal("")),
  assunto: z.string().trim().min(2, "Informe o assunto").max(120),
  mensagem: z.string().trim().min(10, "Mensagem muito curta").max(2000),
  aceite: z.literal(true, { errorMap: () => ({ message: "É necessário aceitar a política" }) }),
  // honeypot
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

function Contato() {
  const [form, setForm] = useState<Partial<FormValues>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof FormValues, v: any) => setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse({ ...form, aceite: form.aceite || false });
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const iss of res.error.issues) errs[iss.path.join(".")] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <InternalHero
        eyebrow="Fale conosco"
        title="Contato"
        description="Conte com nossa escuta. Estamos disponíveis para conversas, parcerias, oportunidades e visitas."
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=80"
        imageAlt=""
        variant="azul"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <div className="eyebrow text-laranja">Informações</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold">Canais de contato</h2>
              <p className="mt-3 text-muted-foreground">Nossa equipe responderá o mais breve possível.</p>
            </div>
            <ul className="space-y-4">
              <Contact icon={MapPin} label="Endereço" value={SITE.address} />
              <Contact icon={Phone} label="Telefone" value={SITE.phone} />
              <Contact icon={MessageCircle} label="WhatsApp" value="Clique no botão flutuante para conversar" />
              <Contact icon={Mail} label="E-mail" value={SITE.email} />
              <Contact icon={Clock} label="Atendimento" value={SITE.hours} />
            </ul>
            <div className="flex items-center gap-3">
              <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"><Instagram className="h-4 w-4" /></a>
              <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"><Facebook className="h-4 w-4" /></a>
              <a href={SITE.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"><Youtube className="h-4 w-4" /></a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                title="Mapa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.65%2C-23.56%2C-46.63%2C-23.55&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            {sent ? (
              <div className="rounded-2xl border border-verde/40 bg-verde/10 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-verde mx-auto" />
                <h3 className="mt-4 font-display text-xl font-bold">Mensagem enviada</h3>
                <p className="mt-2 text-muted-foreground">Recebemos sua mensagem e retornaremos em breve.</p>
                <button onClick={() => { setSent(false); setForm({}); }} className="mt-6 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">Enviar outra mensagem</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
                <h3 className="font-display text-xl font-bold">Envie uma mensagem</h3>
                <div className="hidden" aria-hidden><input tabIndex={-1} autoComplete="off" name="website" value={form.website || ""} onChange={(e) => set("website", e.target.value)} /></div>
                <Field label="Nome" name="nome" error={errors.nome}>
                  <input type="text" required className="input" value={form.nome || ""} onChange={(e) => set("nome", e.target.value)} />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="E-mail" name="email" error={errors.email}>
                    <input type="email" required className="input" value={form.email || ""} onChange={(e) => set("email", e.target.value)} />
                  </Field>
                  <Field label="Telefone" name="telefone" error={errors.telefone}>
                    <input type="tel" className="input" value={form.telefone || ""} onChange={(e) => set("telefone", e.target.value)} />
                  </Field>
                </div>
                <Field label="Assunto" name="assunto" error={errors.assunto}>
                  <input type="text" required className="input" value={form.assunto || ""} onChange={(e) => set("assunto", e.target.value)} />
                </Field>
                <Field label="Mensagem" name="mensagem" error={errors.mensagem}>
                  <textarea required rows={5} className="input" value={form.mensagem || ""} onChange={(e) => set("mensagem", e.target.value)} />
                </Field>
                <label className="flex items-start gap-2 text-sm">
                  <input type="checkbox" checked={!!form.aceite} onChange={(e) => set("aceite", e.target.checked)} className="mt-1" />
                  <span className="text-muted-foreground">Li e aceito a <a href="/politica-de-privacidade" className="underline text-primary">Política de Privacidade</a>.</span>
                </label>
                {errors.aceite && <p className="text-xs text-destructive">{errors.aceite}</p>}
                <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold hover:bg-primary/90">
                  Enviar mensagem
                </button>
                <style>{`.input{width:100%;border-radius:0.5rem;border:1px solid var(--color-border);background:var(--color-background);padding:0.55rem 0.75rem;font-size:0.875rem} .input:focus{outline:none;border-color:var(--color-primary);box-shadow:0 0 0 3px oklch(from var(--color-primary) l c h / 0.2)}`}</style>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Contact({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ouro/20 text-primary shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="eyebrow text-vermelho">{label}</div>
        <div className="mt-0.5 text-sm font-semibold">{value}</div>
      </div>
    </li>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-foreground mb-1.5">{label}</label>
      <div>{children}</div>
      {error && <p className="mt-1 text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}
