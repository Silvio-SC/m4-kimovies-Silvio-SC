import { z } from "zod"
import { Schedule } from "../entities"


const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

const userCreateSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
})

const userUpadeteSchema = userSchema.partial().omit({ id: true, admin: true })
const userReturnSchema = userSchema.omit({ password: true })
const userReturnArrSchema = userReturnSchema.array()

export { userSchema, userCreateSchema, userReturnSchema, userUpadeteSchema, userReturnArrSchema }