import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Důležitá novinka v Astro 6

const blog = defineCollection({
	// Loader říká: Hledej všechny soubory ve složce src/content/blog
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		location_name: z.string(),
		image_main: z.string(),
		image_sub1: z.string().optional(),
		image_sub2: z.string().optional(),
	}),
});

export const collections = { blog };
