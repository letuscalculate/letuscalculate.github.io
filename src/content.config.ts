import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per episode. The file name is the URL: who-said-this.md → /episodes/who-said-this/.
// The body is the transcript. Only `published` episodes get a page; `forthcoming` ones are listed by title only.
const episodes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/episodes' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    status: z.enum(['forthcoming', 'published']),
    date: z.coerce.date().optional(),
    youtubeId: z.string().optional(),
    summary: z.string().optional(),
    question: z.string().optional(),
    sources: z
      .array(z.object({ cite: z.string(), url: z.string().url().optional() }))
      .default([]),
  }),
});

export const collections = { episodes };
