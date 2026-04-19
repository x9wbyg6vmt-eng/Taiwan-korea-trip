import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const blog = defineCollection({
	// Změna: Hledáme .md i .markdown a zjednodušili jsme cestu
	loader: glob({ pattern: "**/*.{md,markdown}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		location_name: z.string(),
		image_main: z.string(),
		image_sub1: z.string().optional(),
		image_sub2: z.string().optional(),
	}),
});

export const collections = { blog };
