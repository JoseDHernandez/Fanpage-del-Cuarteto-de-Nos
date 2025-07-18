import { defineCollection, z } from "astro:content";

const normalizeText = (str: string) => {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
const albumesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().transform((s) => {
        return normalizeText(s);
      }),
      release_year: z.number(),
      description: z.string(),
      cover_image: image(),
      links: z
        .object({
          spotify_link: z.string().url().optional(),
          youtube_link: z.string().url().optional(),
        })
        .optional(),
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
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      time: z.string(),
      photo: image(),
      priority: z.number(),
    }),
});
export const collections = {
  albumes: albumesCollection,
  integrantes: integrantesCollection,
};
