# Let Us Calculate

Website for the Let Us Calculate channel (YouTube channel UCd8KoaPjNkYtP5seQEBjV0Q, linked by ID so a handle change never breaks it; the name translates Leibniz’s *calculemus*). Astro, deployed to GitHub Pages on push to `main`.

```bash
pnpm install
pnpm dev
```

## Adding an episode

Each episode is one file in `src/content/episodes/`. The file name becomes the URL (`who-said-this.md` → `/episodes/who-said-this/`).

- `status: forthcoming` lists the title on the home page without a link.
- `status: published` builds the episode page. Fill in `date`, `youtubeId`, `summary`, `question` and `sources`, and paste the final narration as the body (it is shown as the transcript).

## Privacy

The site sets no cookies and loads nothing from third parties: fonts are self-hosted, and a YouTube video only loads (from youtube-nocookie.com) after the viewer presses play.
