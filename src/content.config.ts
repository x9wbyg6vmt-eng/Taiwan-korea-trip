import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const blog = defineCollection({
    // Loader prohledá složku blog a najde všechny .md soubory
    loader: glob({ 
        pattern: '**/[^_]*.{md,markdown}', 
        base: "./src/content/blog" 
    }),
    schema: z.object({
        // Povinná pole
        title: z.string().default("Bez názvu"),
        location_name: z.string().default("Neznámé místo"),
        image_main: z.string(),
        
        // Volitelná pole pro galerii (toto opraví to nezobrazování druhé fotky)
        image_sub1: z.string().optional(),
        image_sub2: z.string().optional(),
    }),
});

// Exportování kolekce, aby s ní Astro mohlo pracovat
export const collections = { blog };
