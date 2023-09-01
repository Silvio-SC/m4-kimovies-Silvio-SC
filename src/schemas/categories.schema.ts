import { z } from "zod"
import { realEstateSchema } from "./realEstate.schema"

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    realEstates: realEstateSchema.array()
})

const categoryCreateSchema = categorySchema.omit({ id: true , realEstates: true})
const categoryReturnSchema = categorySchema.omit({ realEstates: true})

export { categorySchema, categoryCreateSchema, categoryReturnSchema }