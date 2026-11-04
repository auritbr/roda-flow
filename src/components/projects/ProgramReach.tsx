import { MapPin } from "lucide-react";
import { programReach } from "./detail-content";

export function ProgramReach({ overview = false }: { overview?: boolean }) {
  if (overview) return <section className="py-10" aria-labelledby="program-reach">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card/70 p-6 md:flex md:items-center md:gap-8">
        <div className="flex-1"><div className="flex items-center gap-2 text-primary"><MapPin className="size-4" strokeWidth={1.75} aria-hidden="true" /><h2 id="program-reach" className="font-display text-base font-bold">Uma atuação presente em diferentes núcleos</h2></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">O Além da Ginga já funcionou em diferentes núcleos de José de Freitas. Em registros de 2026, foram mencionados quatro núcleos e mais de 150 participantes, com períodos em que o atendimento foi descrito como próximo de 190 pessoas.</p></div>
        <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-5 md:mt-0 md:w-[28rem] md:shrink-0 md:border-l md:border-t-0 md:pl-8 md:pt-0">{programReach.map(item => <div key={item.value}><dt className="font-display text-base font-bold text-primary">{item.value}</dt><dd className="mt-0.5 text-[11px] leading-4 text-muted-foreground">{item.context}</dd></div>)}</dl>
      </div>
    </div>
  </section>;
  return <section className="bg-primary py-7 text-primary-foreground">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className={overview ? "flex items-start gap-3" : "text-center"}><MapPin className={overview ? "size-6 shrink-0 text-ouro" : "mx-auto mb-3 size-6 text-ouro"} strokeWidth={1.5} aria-hidden="true" /><div>{!overview && <div className="eyebrow mb-3 text-ouro">Núcleos e alcance</div>}<h2 className="font-display text-xl font-bold">Uma atuação presente em diferentes núcleos</h2><p className={`mt-2 max-w-4xl text-sm leading-relaxed text-primary-foreground/90 ${overview ? "" : "mx-auto"}`}>{overview ? "O Além da Ginga" : "O programa"} já funcionou em diferentes núcleos de José de Freitas. Em registros de 2026, foram mencionados quatro núcleos e mais de 150 participantes, com períodos em que o atendimento foi descrito como próximo de 190 pessoas.</p></div></div>
      <dl className="mt-5 grid gap-4 sm:grid-cols-3 sm:pl-9">{programReach.map((item, index) => <div key={item.value}><dt className="font-display text-lg font-bold text-ouro">{item.value}</dt><dd className="mt-1 text-xs leading-5 text-primary-foreground/85">{overview ? item.context : index === 1 ? "Registros de 2026" : index === 2 ? "Determinados períodos de funcionamento" : item.context}</dd></div>)}</dl>
    </div>
  </section>;
}