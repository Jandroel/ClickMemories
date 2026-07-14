import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const trabajos = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/trabajos" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    cover: z.url(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
    services: z.array(z.string()),
    duration: z.string(),
    mood: z.array(z.string()),
    gallery: z
      .array(
        z.object({
          src: z.url(),
          alt: z.string(),
          caption: z.string(),
          orientation: z.enum(["vertical", "horizontal", "square"]).default("vertical")
        })
      )
      .min(3),
    video: z
      .object({
        title: z.string(),
        description: z.string(),
        poster: z.url(),
        duration: z.string()
      })
      .optional(),
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        context: z.string()
      })
      .optional()
  })
});

export const collections = {
  trabajos
};
