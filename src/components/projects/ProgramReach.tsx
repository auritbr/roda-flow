import { MapPin } from "lucide-react";
import { programReach } from "./detail-content";

export function ProgramReach({ overview = false }: { overview?: boolean }) {
  return <section className="bg-primary py-7 text-primary-foreground">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-start gap-3"><MapPin className="size-6 shrink-0 text-ouro" strokeWidth={1.5} aria-hidden="true" /><div><h2 className="font-display text-xl font-bold">Uma atuação presente em diferentes núcleos</h2><p className="mt-2 max-w-4xl text-sm leading-relaxed text-primary-foreground/90">{overview ? "O Além da Ginga" : "O programa"} já funcionou em diferentes núcleos de José de Freitas. Em registros de 2026, foram mencionados quatro núcleos e mais de 150 participantes, com períodos em que o atendimento foi descrito como próximo de 190 pessoas.</p></div></div>
      <dl className="mt-5 grid gap-4 sm:grid-cols-3 sm:pl-9">{programReach.map((item, index) => <div key={item.value}><dt className="font-display text-lg font-bold text-ouro">{item.value}</dt><dd className="mt-1 text-xs leading-5 text-primary-foreground/85">{overview ? item.context : index === 1 ? "Registros de 2026" : index === 2 ? "Determinados períodos de funcionamento" : item.context}</dd></div>)}</dl>
    </div>
  </section>;
}