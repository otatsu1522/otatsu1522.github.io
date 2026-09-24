import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journeys = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/journeys' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().optional(),
    cover: image().optional(),
    featured: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().optional(),
    cover: image().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { journeys, posts };
