import { defineCollection, z } from "astro:content";
import { sheetsLoader } from "./loaders/sheets";

const sheetsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  folderName: z.string(),
  baseName: z.string(),
  pdfUrl: z.string(),
  midiUrl: z.string().optional(),
  pngUrls: z.array(z.string()),
});

export const collections = {
  sheets: defineCollection({
    loader: sheetsLoader(),
    schema: sheetsSchema,
  }),
};
