import { z } from "zod"
import { realEstateReturnSchema, realEstateSchema } from "./realEstate.schema"

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    realEstate: realEstateReturnSchema.array()
})

const categoryCreateSchema = categorySchema.omit({ id: true , realEstates: true})
const categoryReturnSchema = categorySchema.omit({ realEstate: true})
const categoryReturnArrSchema = categoryReturnSchema.array()

export { categorySchema, categoryCreateSchema, categoryReturnSchema, categoryReturnArrSchema }