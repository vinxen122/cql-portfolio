import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    status: z.enum(['active', 'in-progress']),
    order: z.number(),
    tech: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = { blog, projects };
