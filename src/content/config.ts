import { defineCollection, z } from "astro:content";

const normalizeText = (str: string) => {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
const albumesCollection = defineCollection({
  schema: z.object({
    title: z.string().transform((s) => {
      return normalizeText(s);
    }),
    release_year: z.number(),
    description: z.string(),
    cover_image: z.string(),
    links: z.object({
      spotify_link: z.string().url(),
      youtube_link: z.string().url(),
    }),
    songs: z.array(
      z.object({
        title: z.string().transform((s) => {
          return normalizeText(s);
        }),
        duration: z.string(),
        artist: z.string().optional(),
      })
    ),
  }),
});
const integrantesCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    time: z.string(),
    photo: z.string(),
    priority: z.number(),
  }),
});
export const collections = {
  albumes: albumesCollection,
  integrantes: integrantesCollection,
};
