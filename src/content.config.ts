import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// image は astro:content が渡す SchemaContext['image'] をそのまま受け取る
const articleSchema = ({ image }: { image: (...args: any[]) => any }) =>
  z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().optional(),
    cover: image().optional(),
    // 削除はせず一覧・カルーセルから外したいだけの記事は false にする(デフォルトは公開=true)
    published: z.boolean().default(true),
  });

const makeArticleCollection = (base: string) =>
  defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base,
      generateId: ({ entry }) => entry.replace(/\/index\.md$/, '').replace(/\.md$/, ''),
    }),
    schema: articleSchema,
  });

const journeys = makeArticleCollection('./src/content/journeys');
const posts = makeArticleCollection('./src/content/posts');

export const collections = { journeys, posts };
