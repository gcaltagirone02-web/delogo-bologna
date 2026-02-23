import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
    type: 'data', // JSON/YAML files
    schema: z.object({
        title: z.string(), // Category title (e.g., "Antipasti")
        titleEn: z.string().optional(), // Expected English Translation (e.g., "Starters")
        order: z.number().optional(), // For sorting categories
        items: z.array(z.object({
            id: z.string(),
            name: z.string(),
            description: z.string().optional(),
            price: z.number(),
            isStar: z.boolean().default(false),
        }))
    })
});

export const collections = {
    'menu': menuCollection,
};
