import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { categoryStyles, dateLabel, parseDay, type AgendaEvent } from "./content";

export function EventCard({ event, onSelect, compact = false }: { event: AgendaEvent; onSelect: (event: AgendaEvent) => void; compact?: boolean }) {
  return <article className={`flex rounded-xl border border-border bg-card shadow-sm ${compact ? "gap-3 p-3.5" : "gap-4 p-5"}`}>
    <time dateTime={event.date} aria-label={dateLabel(event.date)} className={`flex shrink-0 flex-col items-center justify-center rounded-lg ${compact ? "h-16 w-14" : "h-20 w-16"} ${categoryStyles[event.category]}`}>
      <span className={`font-display font-extrabold ${compact ? "text-2xl" : "text-3xl"}`}>{format(parseDay(event.date), "dd")}</span>
      <span className="text-xs font-semibold uppercase">{format(parseDay(event.date), "MMM", { locale: ptBR })}</span>
    </time>
    <div className="min-w-0 flex-1"><p className="text-xs font-semibold text-muted-foreground">{event.category}</p>
      <h3 className={`mt-1 font-display font-bold leading-snug ${compact ? "text-base" : "text-lg"}`}>{event.title}</h3>
      <p className={`${compact ? "mt-1" : "mt-2"} flex items-center gap-2 text-sm text-muted-foreground`}><Clock className="size-4 shrink-0" />{event.startTime}{event.endTime && ` – ${event.endTime}`}</p>
      {event.location?.name && <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 shrink-0" />{event.location.name}</p>}
      <Button variant="link" className="mt-2 h-auto p-0" onClick={() => onSelect(event)}>Ver atividade <ArrowRight /></Button>
    </div>
  </article>;
}
export function EventDetails({ event, onClose }: { event: AgendaEvent | null; onClose: () => void }) {
  return <Dialog open={event !== null} onOpenChange={open => { if (!open) onClose(); }}>
    <DialogContent className="agenda-details max-h-[90dvh] overflow-y-auto sm:max-w-xl">
      {event && <>
        <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[event.category]}`}>{event.category}</span>
        <DialogTitle className="pr-6 font-display text-2xl leading-tight">{event.title}</DialogTitle>
        <DialogDescription>{event.description}</DialogDescription>
        {event.demonstration && <p className="rounded-lg bg-muted p-3 text-sm font-semibold">Conteúdo demonstrativo — não é programação real da Motirô.</p>}
        {event.image && <img src={event.image} alt="" className="aspect-video w-full rounded-lg object-cover" />}
        <dl className="space-y-3 text-sm"><div><dt className="font-semibold">Data</dt><dd className="mt-1 capitalize">{dateLabel(event.date)}</dd></div>
          <div><dt className="font-semibold">Horário</dt><dd className="mt-1">{event.startTime}{event.endTime && ` – ${event.endTime}`}</dd></div>
          {event.location && <div><dt className="font-semibold">Local</dt><dd className="mt-1 space-y-1">{[event.location.name, event.location.address, event.location.city, event.location.reference].filter(Boolean).map(value => <p key={value}>{value}</p>)}</dd></div>}
          {event.relatedProject && <div><dt className="font-semibold">Iniciativa relacionada</dt><dd>{event.relatedProject}</dd></div>}
        </dl>
        <div className="flex flex-wrap gap-2">
          {event.link && <Button asChild><a href={event.link}>Saiba mais <ArrowRight /></a></Button>}
          {event.location?.mapUrl && <Button variant="outline" asChild><a href={event.location.mapUrl} target="_blank" rel="noopener noreferrer">Ver mapa <MapPin /></a></Button>}
        </div>
      </>}
    </DialogContent>
  </Dialog>;
}