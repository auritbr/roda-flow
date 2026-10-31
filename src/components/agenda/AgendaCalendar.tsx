import { useEffect, useState } from "react";
import { addMonths, format } from "date-fns";
import { CalendarDays, ChevronLeft, ChevronRight, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SectionTitle } from "@/components/site/InternalHero";
import { calendarDays, categories, categoryStyles, dateLabel, demonstrationEvents, filterEvents, monthLabel, officialEvents, parseDay, upcomingEvents, type AgendaEvent, type Category } from "./content";
import { EventCard, EventDetails } from "./EventViews";

export function AgendaCalendar() {
  const [today, setToday] = useState("2026-10-31");
  const [month, setMonth] = useState("2026-10-01");
  const [category, setCategory] = useState<Category | "Todas">("Todas");
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [demo, setDemo] = useState(false);
  const [selected, setSelected] = useState<AgendaEvent | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [dayDialog, setDayDialog] = useState<string | null>(null);
  useEffect(() => { const now = format(new Date(), "yyyy-MM-dd"); setToday(now); setMonth(`${now.slice(0, 7)}-01`); }, []);
  const source = demo ? demonstrationEvents : officialEvents;
  const events = filterEvents(source, category, month);
  const days = calendarDays(month);
  const next = upcomingEvents(filterEvents(source, category), today);
  const dayEvents = (day: string) => filterEvents(source, category).filter(e => e.date === day);
  function moveMonth(amount: number) { setMonth(format(addMonths(parseDay(month), amount), "yyyy-MM-01")); setSelectedDay(null); }
  function selectEvent(event: AgendaEvent) { setDayDialog(null); setSelected(event); }
  return <>
    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex max-w-full gap-2 overflow-x-auto pb-2" aria-label="Categorias">
          {(["Todas", ...categories] as const).map(item => <Button key={item} size="sm" variant={category === item ? "default" : "outline"} className="shrink-0 rounded-full" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}
        </div>
        <Button variant="outline" size="sm" aria-pressed={demo} onClick={() => { setDemo(!demo); setSelectedDay(null); }}>{demo ? "Ver programação" : "Explorar exemplos"}</Button>
      </div>
      {demo && <p role="status" className="mb-5 rounded-lg bg-ouro/15 p-4 text-sm text-foreground">Conteúdo demonstrativo. As atividades abaixo não integram a programação real da Motirô.</p>}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Mês anterior" title="Mês anterior" onClick={() => moveMonth(-1)}><ChevronLeft /></Button>
          <h2 aria-live="polite" className="min-w-36 text-center font-display text-base font-bold uppercase sm:min-w-52 sm:text-xl">{monthLabel(month)}</h2>
          <Button variant="outline" size="icon" aria-label="Próximo mês" title="Próximo mês" onClick={() => moveMonth(1)}><ChevronRight /></Button>
          <Button variant="ghost" size="sm" onClick={() => { setMonth(`${today.slice(0, 7)}-01`); setSelectedDay(today); }}>Hoje</Button>
        </div>
        <div className="flex gap-1 rounded-lg bg-muted p-1" aria-label="Visualização">
          <Button size="sm" variant={view === "calendar" ? "default" : "ghost"} aria-pressed={view === "calendar"} onClick={() => setView("calendar")}><CalendarDays />Calendário</Button>
          <Button size="sm" variant={view === "list" ? "default" : "ghost"} aria-pressed={view === "list"} onClick={() => setView("list")}><List />Lista</Button>
        </div>
      </div>
      {view === "calendar" ? <>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid grid-cols-7 border-b border-border bg-muted/60">{["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"].map(day => <div key={day} className="py-3 text-center text-[10px] font-bold sm:text-xs">{day}</div>)}</div>
          <div className="grid grid-cols-7">
            {days.map(day => {
              const daily = dayEvents(day);
              return <div key={day} className={`min-w-0 border-b border-r border-border p-1.5 sm:min-h-36 sm:p-2 ${day.slice(0, 7) !== month.slice(0, 7) ? "bg-muted/35 text-muted-foreground" : "bg-card"}`}>
                <Button variant="ghost" className={`h-9 w-full p-0 text-sm sm:w-9 ${today === day ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : selectedDay === day ? "bg-accent text-accent-foreground" : ""}`} aria-current={today === day ? "date" : undefined} aria-label={`${dateLabel(day)}, ${daily.length} atividades`} onClick={() => { setSelectedDay(day); if (window.matchMedia("(min-width: 640px)").matches && daily.length > 0) setDayDialog(day); }}>{Number(day.slice(-2))}</Button>
                <div className="hidden space-y-1 sm:block">{daily.slice(0, 2).map(event => <Button key={event.id} className={`h-auto min-h-10 w-full items-start justify-start whitespace-normal rounded p-1.5 text-left text-xs ${categoryStyles[event.category]}`} title={`${event.category}: ${event.title}, ${event.startTime}`} onClick={() => selectEvent(event)}><span className="min-w-0"><span className="block line-clamp-2 font-semibold">{event.title}</span><span className="block opacity-90">{event.startTime} · {event.category}</span></span></Button>)}
                  {daily.length > 2 && <Button variant="link" className="h-auto w-full whitespace-normal p-1 text-xs" onClick={() => setDayDialog(day)}>+{daily.length - 2} atividades <ChevronDown /></Button>}
                </div>
                <div className="flex h-2 justify-center gap-0.5 sm:hidden" aria-hidden="true">{daily.slice(0, 3).map(e => <span key={e.id} className={`size-1.5 rounded-full ${categoryStyles[e.category]}`} />)}</div>
              </div>;
            })}
          </div>
        </div>
        {selectedDay && <div className="mt-5 sm:hidden"><h3 className="mb-3 font-semibold capitalize">{dateLabel(selectedDay)}</h3><div className="space-y-3">{dayEvents(selectedDay).map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} />)}</div>{dayEvents(selectedDay).length === 0 && <p className="text-sm text-muted-foreground">Nenhuma atividade neste dia.</p>}</div>}
      </> : <div className="grid gap-4 md:grid-cols-2">{events.map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} />)}</div>}
      {events.length === 0 && <div className="py-8 text-center" role="status"><p className="font-semibold">Nenhuma atividade cadastrada para este período.</p><p className="mt-2 text-sm text-muted-foreground">Consulte outros meses para acompanhar a programação da Motirô.</p></div>}
    </div>
    <section className="bg-muted/40 py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="Em breve" title="Próximas atividades" center /><div className="mt-6 grid gap-4 lg:grid-cols-3">{next.map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} />)}</div>{next.length === 0 && <p className="mt-4 text-center text-muted-foreground">A programação será atualizada em breve.</p>}</div></section>
    <Dialog open={dayDialog !== null} onOpenChange={open => { if (!open) setDayDialog(null); }}><DialogContent className="agenda-details max-h-[90dvh] overflow-y-auto"><DialogTitle className="capitalize">{dayDialog && dateLabel(dayDialog)}</DialogTitle><DialogDescription>Atividades do dia</DialogDescription><div className="space-y-3">{dayDialog && dayEvents(dayDialog).map(event => <EventCard key={event.id} event={event} onSelect={selectEvent} />)}</div></DialogContent></Dialog>
    <EventDetails event={selected} onClose={() => setSelected(null)} />
  </>;
}