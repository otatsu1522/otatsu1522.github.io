import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { isValidDateString } from './utils/date';

const articleSchema = ({ image }: { image: (...args: any[]) => any }) =>
  z.object({
    title: z.string(),
    summary: z.string(),
    date: z
      .string()
      .nullable()
      .optional()
      .transform((value) => value?.trim() || undefined)
      .refine((value) => value === undefined || isValidDateString(value), {
        message: 'date は YYYY/MM/DD または YYYY-MM-DD 形式で指定してください（日付なしも可）',
      }),
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
