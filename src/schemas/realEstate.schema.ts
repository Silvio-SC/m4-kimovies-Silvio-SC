import { RealEstate } from './../entities/realEstates.entities';
import { z } from "zod";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().default(0),
    size: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    addressId: z.number().positive(),
    categoryId: z.number().positive()
})

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true
})



export { realEstateSchema }
