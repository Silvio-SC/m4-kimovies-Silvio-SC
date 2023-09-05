import { z } from "zod";
import { realEstateReturn, realEstateReturnSchema, realEstateSchema } from "./realEstate.schema";
import { userReturnSchema, userSchema } from "./user.schema";

const schedulesSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateReturn,
    user: userReturnSchema
})

const schedulesCreateSchema = schedulesSchema.omit({
    id: true,
    user: true,
    realEstate: true
}).extend({ realEstateId: z.number().positive() })

const schedulesReciveSchema = schedulesSchema.omit({
    id: true,
    realEstate: true,
    user: true
}).extend({
    realEstateId: z.number().positive(), 
    userId: z.number().positive()
})

const schedulesReturnSchema = schedulesSchema.omit({
    realEstate: true
}).extend({realEstate: realEstateReturnSchema})

const schedulesReturnArrSchema = schedulesReturnSchema.array()

export { 
    schedulesSchema, 
    schedulesCreateSchema, 
    schedulesReciveSchema, 
    schedulesReturnSchema, 
    schedulesReturnArrSchema 
}