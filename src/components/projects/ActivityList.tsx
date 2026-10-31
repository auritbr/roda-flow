import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Drama, Film, Footprints, HeartHandshake, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/InternalHero";
import { ActivityTags, MovementMark, Paragraphs } from "./OverviewElements";
import { ProjectImage } from "./ProjectImage";
import { ImageAttribution } from "./ImageAttribution";
import { ACTIVITIES_PER_PAGE, activitiesForPage, activityPageCount } from "./activities";

const icons = [Footprints, Drama, BookOpen, Film, Music, Users, HeartHandshake];

export function ActivityList() {
  const [page, setPage] = useState(1);
  const heading = useRef<HTMLDivElement>(null);
  function changePage(next: number) {
    if (next < 1 || next > activityPageCount || next === page) return;
    setPage(next);
    const target = heading.current;
    if (!target) return;
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section className="py-16" aria-labelledby="activities-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div ref={heading} tabIndex={-1} id="activities-title" className="scroll-mt-28 outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <SectionTitle center eyebrow="Projetos e atividades" title="Múltiplas linguagens para ampliar oportunidades" description="A Motirô desenvolve atividades que articulam cultura, esporte, educação, criatividade, expressão, inclusão e convivência comunitária." />
      </div>
      <div className="mt-10 space-y-8" id="activity-results">
        {activitiesForPage(page).map((activity, index) => {
          const globalIndex = (page - 1) * ACTIVITIES_PER_PAGE + index;
          const flip = globalIndex % 2 === 1;
          const Icon = icons[globalIndex] ?? Users;
          return <article key={activity.key} className={`grid items-center overflow-hidden rounded-2xl border border-border ${activity.color} ${flip ? "md:grid-cols-[1.3fr_0.7fr] lg:grid-cols-[1.15fr_0.85fr]" : "md:grid-cols-[0.7fr_1.3fr] lg:grid-cols-[0.85fr_1.15fr]"}`}>
            <figure className={`relative flex h-full min-w-0 flex-col ${flip ? "md:order-2" : ""}`}>
              <div className="relative h-56 overflow-hidden md:h-auto md:min-h-80 md:flex-1">
                <ProjectImage src={activity.image} alt={activity.alt} className="h-full w-full object-cover md:absolute md:inset-0" icon={Icon} />
                <MovementMark className="absolute bottom-2 right-4 h-12 w-24 text-ouro" />
                {activity.credit && <ImageAttribution {...activity.credit} />}
              </div>
            </figure>
            <div className="min-w-0 p-6 lg:p-8">
              {activity.eyebrow && <div className={`eyebrow ${activity.accent}`}>{activity.eyebrow}</div>}
              <div className="mb-4 mt-2 flex items-center gap-3"><Icon className={`size-7 shrink-0 ${activity.accent}`} strokeWidth={1.5} aria-hidden="true" /><h3 className="font-display text-2xl font-extrabold">{activity.title}</h3></div>
              {activity.independent && <p className="mb-4 inline-flex rounded-full bg-verde/10 px-3 py-1 text-xs font-semibold text-verde">Iniciativa independente</p>}
              <Paragraphs paragraphs={activity.paragraphs} />
              {activity.highlights && <div className="mt-5 space-y-4 border-t border-border pt-4">{activity.highlights.map((highlight) => <div key={highlight.text}>{highlight.title && <h4 className={`font-display text-sm font-bold ${activity.accent}`}>{highlight.title}</h4>}<p className="mt-1 text-sm leading-relaxed text-muted-foreground">{highlight.text}</p></div>)}</div>}
              {activity.audience && <div className="mt-5"><h4 className="text-sm font-semibold">Público atendido</h4><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{activity.audience}</p></div>}
              {activity.tags && <div className={`mt-5 ${activity.accent}`}><ActivityTags items={activity.tags} /></div>}
              {activity.slug && <Button asChild className="mt-5 h-auto whitespace-normal rounded-full px-5 py-2.5"><Link to="/projetos/$slug" params={{ slug: activity.slug }}>Conhecer {activity.title}<ArrowRight aria-hidden="true" /></Link></Button>}
            </div>
          </article>;
        })}
      </div>
      <nav aria-label="Paginação de projetos e atividades" className="mt-10 flex items-center justify-center gap-2">
        <Button variant="outline" size="icon" aria-label="Página anterior" aria-controls="activity-results" disabled={page === 1} onClick={() => changePage(page - 1)}><ChevronLeft aria-hidden="true" /></Button>
        {Array.from({ length: activityPageCount }, (_, index) => index + 1).map((number) => <Button key={number} variant={page === number ? "default" : "outline"} size="icon" aria-label={`Página ${number}`} aria-current={page === number ? "page" : undefined} aria-controls="activity-results" onClick={() => changePage(number)}>{number}</Button>)}
        <Button variant="outline" size="icon" aria-label="Próxima página" aria-controls="activity-results" disabled={page === activityPageCount} onClick={() => changePage(page + 1)}><ChevronRight aria-hidden="true" /></Button>
      </nav>
      <p role="status" className="sr-only">Página {page} de {activityPageCount}</p>
    </div>
  </section>;
}