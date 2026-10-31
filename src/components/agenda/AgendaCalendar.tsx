import { useEffect, useState } from "react";
import { format } from "date-fns";
import { CalendarDays, ChevronLeft, ChevronRight, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SectionTitle } from "@/components/site/InternalHero";
import { calendarDays, categories, categoryStyles, dateLabel, demonstrationEvents, filterEvents, monthLabel, officialEvents, upcomingEvents, weekDays, weekLabel, movePeriod, defaultPeriodMode, type PeriodMode, type AgendaEvent, type Category } from "./content";
import { EventCard, EventDetails } from "./EventViews";

const weekdays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
export function AgendaCalendar() {
  const [today, setToday] = useState("2026-10-31");
  const [anchor, setAnchor] = useState("2026-10-31");
  const [mode, setMode] = useState<PeriodMode>(defaultPeriodMode);
  const [category, setCategory] = useState<Category | "Todas">("Todas");
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [demo, setDemo] = useState(false);
  const [selected, setSelected] = useState<AgendaEvent | null>(null);
  const [selectedDay, setSelectedDay] = useState("2026-10-31");
  const [dayDialog, setDayDialog] = useState<string | null>(null);
  useEffect(() => { const now = format(new Date(), "yyyy-MM-dd"); setToday(now); setAnchor(now); setSelectedDay(now); }, []);
  const source = demo ? demonstrationEvents : officialEvents;
  const filtered = filterEvents(source, category);
  const days = mode === "week" ? weekDays(anchor) : calendarDays(anchor);
  const events = filtered.filter(event => mode === "week" ? days.includes(event.date) : event.date.slice(0, 7) === anchor.slice(0, 7));
  const next = upcomingEvents(filtered, today);
  const dayEvents = (day: string) => filtered.filter(event => event.date === day);
  const periodName = mode === "week" ? "Semana" : "Mês";
  function navigate(amount: number) { const day = movePeriod(anchor, mode, amount); setAnchor(day); setSelectedDay(day); }
  function selectEvent(event: AgendaEvent) { setDayDialog(null); setSelected(event); }
  function eventChip(event: AgendaEvent) {
    return <Button key={event.id} className={`h-auto min-h-10 w-full items-start justify-start whitespace-normal rounded p-2 text-left text-xs ${categoryStyles[event.category]}`} title={`${event.category}: ${event.title}, ${event.startTime}`} onClick={() => selectEvent(event)}><span className="min-w-0"><span className="block font-semibold leading-snug">{event.title}</span><span className="mt-1 block opacity-90">{event.startTime}{event.endTime && ` – ${event.endTime}`}</span><span className="block opacity-90">{event.category}</span>{event.location?.name && <span className="mt-1 block">{event.location.name}</span>}</span></Button>;
  }
  return <>
    <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex max-w-full gap-2 overflow-x-auto pb-2" aria-label="Categorias">{(["Todas", ...categories] as const).map(item => <Button key={item} size="sm" variant={category === item ? "default" : "outline"} className="shrink-0 rounded-full" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}</div>
        <Button variant="outline" size="sm" aria-pressed={demo} onClick={() => setDemo(!demo)}>{demo ? "Ver programação" : "Explorar exemplos"}</Button>
      </div>
      {demo && <p role="status" className="mb-5 rounded-lg bg-ouro/15 p-3 text-sm text-foreground">Conteúdo demonstrativo. As atividades abaixo não integram a programação real da Motirô.</p>}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto">
          <Button variant="outline" size="icon" aria-label={`${periodName} anterior`} title={`${periodName} anterior`} onClick={() => navigate(-1)}><ChevronLeft /></Button>
          <h2 aria-live="polite" className="min-w-0 flex-1 text-center font-display text-sm font-bold uppercase sm:min-w-52 sm:flex-none sm:text-lg">{mode === "week" ? weekLabel(anchor) : monthLabel(anchor)}</h2>
          <Button variant="outline" size="icon" aria-label={mode === "week" ? "Próxima semana" : "Próximo mês"} title={mode === "week" ? "Próxima semana" : "Próximo mês"} onClick={() => navigate(1)}><ChevronRight /></Button>
          <Button variant="ghost" size="sm" onClick={() => { setAnchor(today); setSelectedDay(today); }}>Hoje</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-1 rounded-lg bg-muted p-1" aria-label="Período">{(["week", "month"] as const).map(item => <Button key={item} size="sm" variant={mode === item ? "default" : "ghost"} aria-pressed={mode === item} onClick={() => setMode(item)}>{item === "week" ? "Semana" : "Mês"}</Button>)}</div>
          <div className="flex gap-1" aria-label="Visualização"><Button size="icon" variant={view === "calendar" ? "default" : "outline"} aria-label="Calendário" title="Calendário" aria-pressed={view === "calendar"} onClick={() => setView("calendar")}><CalendarDays /></Button><Button size="icon" variant={view === "list" ? "default" : "outline"} aria-label="Lista" title="Lista" aria-pressed={view === "list"} onClick={() => setView("list")}><List /></Button></div>
        </div>
      </div>
      {view === "calendar" ? <>
        {mode === "week" ? <>
          <div className="hidden overflow-hidden rounded-xl border border-border bg-card md:grid md:grid-cols-7">{days.map((day, index) => <div key={day} className="min-w-0 border-r border-border last:border-r-0">
            <div className={`flex items-center justify-center gap-2 border-b border-border px-2 py-3 ${today === day ? "bg-primary text-primary-foreground" : "bg-muted/60"}`}><span className="text-xs font-bold">{weekdays[index]}</span><time dateTime={day} className="font-display text-lg font-extrabold">{Number(day.slice(-2))}</time></div>
            <div className="min-h-36 space-y-2 p-2">{dayEvents(day).map(eventChip)}{dayEvents(day).length === 0 && <p className="py-4 text-center text-xs text-muted-foreground">Sem atividades</p>}</div>
          </div>)}</div>
          <div className="md:hidden"><div className="flex gap-2 overflow-x-auto pb-3" aria-label="Dias da semana">{days.map((day, index) => <Button key={day} variant={selectedDay === day ? "default" : "outline"} className="h-16 w-16 shrink-0 flex-col gap-1" aria-label={dateLabel(day)} aria-pressed={selectedDay === day} aria-current={today === day ? "date" : undefined} onClick={() => setSelectedDay(day)}><span className="text-xs">{weekdays[index]}</span><span className="text-lg font-bold">{Number(day.slice(-2))}</span></Button>)}</div></div>
        </> : <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid grid-cols-7 border-b border-border bg-muted/60">{weekdays.map(day => <div key={day} className="py-3 text-center text-[10px] font-bold sm:text-xs">{day}</div>)}</div>
          <div className="grid grid-cols-7">{days.map(day => { const daily = dayEvents(day); return <div key={day} className={`min-w-0 border-b border-r border-border p-1 sm:min-h-28 sm:p-2 ${day.slice(0, 7) !== anchor.slice(0, 7) ? "bg-muted/35 text-muted-foreground" : "bg-card"}`}>
            <Button variant="ghost" className={`h-9 w-full p-0 text-sm sm:w-9 ${today === day ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : selectedDay === day ? "bg-accent text-accent-foreground" : ""}`} aria-current={today === day ? "date" : undefined} aria-label={`${dateLabel(day)}, ${daily.length} atividades`} onClick={() => { setSelectedDay(day); if (window.matchMedia("(min-width: 768px)").matches && daily.length > 0) setDayDialog(day); }}>{Number(day.slice(-2))}</Button>
            <div className="hidden space-y-1 md:block">{daily.slice(0, 2).map(eventChip)}{daily.length > 2 && <Button variant="link" className="h-auto w-full whitespace-normal p-1 text-xs" onClick={() => setDayDialog(day)}>+{daily.length - 2} atividades <ChevronDown /></Button>}</div>
            <div className="flex h-2 justify-center gap-0.5 md:hidden" aria-hidden="true">{daily.slice(0, 3).map(event => <span key={event.id} className={`size-1.5 rounded-full ${categoryStyles[event.category]}`} />)}</div>
          </div>; })}</div>
        </div>}
        <div className="mt-4 md:hidden"><h3 className="mb-3 text-sm font-semibold capitalize">{dateLabel(selectedDay)}</h3><div className="space-y-3">{dayEvents(selectedDay).map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} compact />)}</div>{dayEvents(selectedDay).length === 0 && <p className="text-sm text-muted-foreground">Nenhuma atividade neste dia.</p>}</div>
      </> : <div className="grid gap-3 md:grid-cols-2">{events.map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} compact />)}</div>}
      {events.length === 0 && <div className="py-6 text-center" role="status"><p className="font-semibold">Nenhuma atividade cadastrada para este período.</p><p className="mt-2 text-sm text-muted-foreground">A programação será atualizada em breve.</p></div>}
    </div>
    <section className="bg-muted/40 py-10"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="Em breve" title="Próximas atividades" center /><div className="mt-5 grid gap-3 lg:grid-cols-3">{next.map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} compact />)}</div>{next.length === 0 && <p className="mt-4 text-center text-muted-foreground">A programação será atualizada em breve.</p>}</div></section>
    <Dialog open={dayDialog !== null} onOpenChange={open => { if (!open) setDayDialog(null); }}><DialogContent className="agenda-details max-h-[90dvh] overflow-y-auto"><DialogTitle className="capitalize">{dayDialog && dateLabel(dayDialog)}</DialogTitle><DialogDescription>Atividades do dia</DialogDescription><div className="space-y-3">{dayDialog && dayEvents(dayDialog).map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} compact />)}</div></DialogContent></Dialog>
    <EventDetails event={selected} onClose={() => setSelected(null)} />
  </>;
}
