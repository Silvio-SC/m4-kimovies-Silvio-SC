import { RealEstate } from './../entities/realEstates.entities';
import { z } from "zod";
import { addressCreateSchema, addressSchema } from './address.schema';
import { categoryCreateSchema, categoryReturnSchema } from './categories.schema';
import { Address } from '../entities';

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.any().default(0),
    size: z.number().positive(),
    createdAt: z.string(),
    updatedAt: z.string(),
    categoryId: z.number().positive(),
    address: addressCreateSchema
})

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    address: true
}).extend({ address: addressCreateSchema })

const realEstateReturn = realEstateSchema.omit({
    address: true
}).extend({ address: addressSchema, category: categoryCreateSchema })

const realEstateArrSchema = realEstateReturn.array()

const realEstateReturnSchema = realEstateSchema.omit({
    address: true, categoryId: true
})


export { realEstateSchema, realEstateCreateSchema, realEstateArrSchema, realEstateReturn, realEstateReturnSchema }
