import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";
import { ptBR } from "date-fns/locale";

export const categories = ["Capoeira", "Teatro", "Cinema", "Oficinas", "Esporte", "Comunidade"] as const;
export type Category = typeof categories[number];
export interface AgendaEvent {
  id: string; title: string; slug: string; category: Category; date: string;
  startTime: string; endTime?: string; description: string;
  location?: { name?: string; address?: string; city?: string; reference?: string; mapUrl?: string };
  image?: string; relatedProject?: string; link?: string; featured?: boolean;
  demonstration: boolean;
}
// Replace with confirmed CMS records only. Demonstrations never enter the official feed.
export const officialEvents: AgendaEvent[] = [];
export const demonstrationEvents: AgendaEvent[] = [
  { id: "demo-1", slug: "exemplo-capoeira", title: "Exemplo · Roda de capoeira", category: "Capoeira", date: "2026-10-31", startTime: "18:00", endTime: "19:00", description: "Atividade demonstrativa para visualizar as informações de uma roda. Não integra a programação real da Motirô.", demonstration: true },
  { id: "demo-2", slug: "exemplo-teatro", title: "Exemplo · Oficina de teatro", category: "Teatro", date: "2026-11-07", startTime: "14:00", description: "Exemplo de atividade teatral. Data e horário servem somente à demonstração do calendário.", demonstration: true },
  { id: "demo-3", slug: "exemplo-cinema", title: "Exemplo · Sessão de cinema", category: "Cinema", date: "2026-11-07", startTime: "17:00", description: "Sessão demonstrativa, sem filme, local ou realização confirmados.", demonstration: true },
  { id: "demo-4", slug: "exemplo-oficina", title: "Exemplo · Oficina cultural", category: "Oficinas", date: "2026-11-07", startTime: "10:00", description: "Exemplo de oficina para demonstrar a seleção de atividades em um mesmo dia.", demonstration: true },
  { id: "demo-5", slug: "exemplo-esporte", title: "Exemplo · Encontro esportivo", category: "Esporte", date: "2026-11-07", startTime: "09:00", description: "Atividade esportiva demonstrativa. Não representa campeonato ou resultado real.", demonstration: true },
  { id: "demo-6", slug: "exemplo-comunidade", title: "Exemplo · Encontro comunitário", category: "Comunidade", date: "2026-11-14", startTime: "15:00", description: "Exemplo de encontro comunitário, sem programação institucional confirmada.", demonstration: true },
];
export const categoryStyles: Record<Category, string> = {
  Capoeira: "bg-primary text-primary-foreground", Teatro: "bg-vermelho text-vermelho-foreground",
  Cinema: "bg-azul text-azul-foreground", Oficinas: "bg-ouro text-ouro-foreground",
  Esporte: "bg-verde text-verde-foreground", Comunidade: "bg-laranja text-laranja-foreground",
};
export function parseDay(day: string) { return new Date(`${day}T12:00:00`); }
export function dateLabel(day: string) { return format(parseDay(day), "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR }); }
export function monthLabel(day: string) { return format(parseDay(day), "MMMM yyyy", { locale: ptBR }); }
export function calendarDays(month: string) {
  const start = startOfWeek(startOfMonth(parseDay(month)), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(parseDay(month)), { weekStartsOn: 0 });
  const days: string[] = [];
  for (let day = start; day <= end; day = addDays(day, 1)) days.push(format(day, "yyyy-MM-dd"));
  return days;
}
export function filterEvents(events: AgendaEvent[], category: Category | "Todas" = "Todas", month?: string) {
  return events.filter(e => (category === "Todas" || e.category === category) && (!month || e.date.slice(0, 7) === month.slice(0, 7)))
    .sort((a, b) => `${a.date} ${a.startTime}`.localeCompare(`${b.date} ${b.startTime}`));
}
export function upcomingEvents(events: AgendaEvent[], today: string, limit = 3) {
  return filterEvents(events).filter(e => e.date >= today).slice(0, limit);
}