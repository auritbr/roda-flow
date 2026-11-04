import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/InternalHero";
import { ActivityTags } from "./OverviewElements";
import { ProjectImage } from "./ProjectImage";
import { programActivities } from "./activities";
import { initiativeForSlug } from "./detail-content";

export function ProgramMembers({ otherFronts }: { otherFronts: readonly string[] }) {
  return <section className="relative overflow-hidden bg-ouro/10 py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle center eyebrow="O que integra o programa" title="Diferentes linguagens em uma mesma proposta" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programActivities.map(item => <article key={item.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <ProjectImage src={item.image} alt={item.alt} className="aspect-[16/10] w-full object-cover" />
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-xl font-extrabold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{initiativeForSlug(item.slug!)?.subtitle}</p>
            <Button asChild variant="link" className="mt-auto h-auto self-start p-0 pt-4"><Link to="/projetos/$slug" params={{ slug: item.slug! }}>Conhecer<ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </article>)}
      </div>
      <div className="mx-auto mt-10 max-w-3xl text-center text-primary [&_ul]:justify-center"><p className="mb-3 text-sm font-semibold text-foreground">O programa também contempla</p><ActivityTags items={otherFronts} /></div>
    </div>
  </section>;
}
