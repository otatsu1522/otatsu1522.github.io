import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = ({ image }: { image: (...args: any[]) => any }) =>
  z.object({
    title: z.string(),
    summary: z.string(),
    date: z
      .string()
      .nullable()
      .optional()
      .transform((value) => value?.trim() || undefined),
    showDate: z.boolean().default(true),
    cover: image().optional(),
    published: z.boolean().default(true),
  });

const makeArticleCollection = (base: string) =>
  defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base,
    }),
    schema: articleSchema,
  });

const journeys = makeArticleCollection('./src/content/journeys');
const posts = makeArticleCollection('./src/content/posts');

export const collections = { journeys, posts };
