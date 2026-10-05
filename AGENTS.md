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

- Keep the public Palestine impact report as a single anchor-navigated route because its sections form one cohesive dashboard.
- Keep impact records in one typed client-side dataset and derive all filtered map and summary views from it so every displayed total stays synchronized.
- Load MapLibre after hydration because it is browser-only while TanStack Start renders routes on the server.