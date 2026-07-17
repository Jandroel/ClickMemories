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
    cover: z.string().min(1),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
    projectType: z.enum(["Caso completo", "Concepto demostrativo"]).default("Caso completo"),
    services: z.array(z.string()),
    duration: z.string(),
    mood: z.array(z.string()),
    gallery: z
      .array(
        z.object({
          src: z.string().min(1),
          alt: z.string(),
          caption: z.string(),
          orientation: z.enum(["vertical", "horizontal", "square"]).default("vertical")
        })
      )
      .min(1),
    video: z
      .object({
        title: z.string(),
        description: z.string(),
        poster: z.string().min(1),
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
