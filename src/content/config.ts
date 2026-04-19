import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		location_name: z.string(),
		image_main: z.string(),
		image_sub1: z.string().optional(),
		image_sub2: z.string().optional(),
	}),
});

export const collections = { blog };
