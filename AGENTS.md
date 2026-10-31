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
- Team cards keep a fixed-size closed portrait and identity area, with independent local disclosure state and natural downward biography expansion; align grid items to the start so opening one card never stretches its neighbors.
- Keep the institutional projects overview content and section compositions local to the projects index and its dedicated modules; do not mutate shared project data or detail pages when adapting the overview.
- Serve projects overview photographs from versioned public/images/projetos files with exact lowercase filenames, rather than Lovable-only asset endpoints, so exports work on external hosts; use route-local image fallbacks.
- Keep Quem Somos institutional content and presentation local to its index and dedicated modules; reuse approved hero, timeline graphics, principle cards and final CTA without changing shared components or other pages. Public image paths ensure external-host portability; unconfirmed certificate links and property contract terms stay unset.
- Compose Quem Somos history blocks from the route-local official paragraph collection, keeping each paragraph in exactly one block to preserve complete content without duplication.
