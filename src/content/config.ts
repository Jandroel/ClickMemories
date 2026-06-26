import { defineCollection, z } from "astro:content";

const trabajos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    location: z.string(),
    date: z.date(),
    excerpt: z.string(),
    cover: z.string().url(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
    services: z.array(z.string()),
    duration: z.string(),
    mood: z.array(z.string()),
    gallery: z
      .array(
        z.object({
          src: z.string().url(),
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
        poster: z.string().url(),
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
