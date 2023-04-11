import { z } from "astro:content";

export const blogSchema = z
  .object({
    title: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    tags: z.array(z.string()).default(["others"]),
    description: z.string().optional().default(""),
    author: z.string().optional(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    heroImage: z.boolean().optional().default(true),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
