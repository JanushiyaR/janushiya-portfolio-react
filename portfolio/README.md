# Janushiya -- Data Engineer Portfolio

Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion, in the
"Jack -- 3D Creator" dark-theme style, adapted to a Data Engineer's content.

## Run it locally

```
npm install
npm run dev
```

Open the printed localhost URL in your browser.

## Replace the placeholders with your real content

All text content lives in one file: `src/data/content.ts`
(skills, experience, education, projects, dashboards, certifications).
Edit the values there -- the sections pull from it automatically.

### Images to add

Currently these are gradient placeholders. Drop your real files into
`public/images/` and update the matching component:

- **Hero portrait** -- `src/sections/HeroSection.tsx`, inside the `<Magnet>`
  block. Replace the placeholder `<div>` with an `<img src="/images/portrait.png" />`.
- **Project screenshots (3 per project)** -- `src/sections/ProjectsSection.tsx`,
  the three gradient `<div>`s inside `ProjectCard`. Replace with `<img>` tags.
- **Dashboard thumbnails** -- `src/sections/DashboardsSection.tsx`, the
  `h-[140px]` gradient div per card.
- **Marquee tiles** -- `src/sections/MarqueeSection.tsx` currently shows tool
  names on gradient tiles. If you'd rather show real dashboard screenshots
  there instead, swap the `<Tile>` component's content for an `<img>`.

## Deploy to GitHub Pages

This is a React app, so it needs a build step before GitHub Pages can serve
it (unlike your old plain-HTML site, which GitHub Pages could serve directly).

1. In `vite.config.ts`, set `base: '/your-repo-name/'` (replace with your
   actual repository name).
2. Run:
   ```
   npm run build
   npm run deploy
   ```
   (The `deploy` script, powered by `gh-pages`, pushes the `dist/` folder to
   a `gh-pages` branch.)
3. In your GitHub repo settings -> Pages, set the source branch to `gh-pages`.

## Project structure

```
src/
  components/   Reusable pieces: FadeIn, Magnet, AnimatedText, buttons
  sections/     One file per page section
  data/         Your real content (content.ts)
  App.tsx       Section order
```
