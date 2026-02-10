import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Short slug for URL; must match filename without .md/.mdx */
    slug: z.string().optional(),
    /** Optional: featured image path */
    image: z.string().optional(),
    /** Tags for filtering */
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
