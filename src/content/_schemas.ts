import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
