import { Repository } from "typeorm"
import { userCreateSchema, userReturnSchema } from "../schemas"
import { z } from "zod"
import { User } from "../entities"

type UserCreate = z.infer<typeof userCreateSchema> 
type UserReturn= z.infer<typeof userReturnSchema> 

type UserRepo = Repository<User>

export { UserCreate, UserRepo, UserReturn }