<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the institutional team content and optional portrait slots local to the team route, so adapting that page cannot change shared content or other approved pages.
- Team cards use a fixed-height portrait and fully visible institutional biographies in natural flow, without disclosure state or internal scrolling; top-align the responsive grid with content-driven card heights to avoid empty space beneath shorter biographies.
- Keep the institutional projects overview content and section compositions local to the projects index and its dedicated modules; do not mutate shared project data or detail pages when adapting the overview.
- Keep individual initiative records in the dedicated browser-safe detail-content module and render them through the approved detail template; derive sections from confirmed fields and leave shared legacy catalogs untouched to protect other approved pages.
- Resolve canonical initiative slugs in the detail loader; permanently redirect known legacy capoeira links to its institutional page and obsolete template-only project links to the overview rather than inventing corresponding initiatives.
- Render initiative galleries through the shared lightbox with separate official-record and explicitly authorized fictional-placeholder registries; official photos replace placeholder galleries, and placeholders never qualify as institutional records, protecting accuracy and child privacy. Preserve mandatory Creative Commons image attribution through an accessible credit dialog instead of technical captions.
- Paginate only the overview activity collection through its dedicated browser-safe model and list component; keep the overarching program and transversal sections outside it to preserve their distinct institutional scope.
- Serve projects overview photographs from versioned public/images/projetos files with exact lowercase filenames, rather than Lovable-only asset endpoints, so exports work on external hosts; use route-local image fallbacks.
- Keep Quem Somos institutional content and presentation local to its index and dedicated modules; reuse approved hero, timeline graphics, principle cards and final CTA without changing shared components or other pages. Public image paths ensure external-host portability; unconfirmed certificate links and property contract terms stay unset.
- Compose Quem Somos history blocks from the route-local official paragraph collection, keeping each paragraph in exactly one block to preserve complete content without duplication.
- Keep gallery event grouping in its dedicated data module, preserving existing source records and filtering years dynamically so future photos do not require layout changes.
- Keep partnership content, optional official logos, confirmed document metadata and explicitly flagged demonstrations in the dedicated browser-safe module; never mix demonstrations into official records, and limit example downloads to clearly labeled plain-text previews without legal data.
- Preserve the legacy transparency URL with a permanent redirect to the partnerships page so existing inbound links remain valid.
- Keep Impacto Social official paragraphs and context-tagged numeric records in its own content module, with separate tests for each scope, so historical reach cannot be conflated with yearly or period-specific attendance.
- Use the shared CulturalBackdrop only as an aria-hidden, noninteractive background layer; keep approved content spacing and card interiors unchanged when adding cultural identity.
- Keep leadership and headquarters additions in dedicated about-local modules so new sections cannot modify approved institutional paragraphs or team cards.
- Serve sports formation through an explicit static projects child route and browser-safe content/results module, keeping confirmed future results separate from initiative catalogs.
