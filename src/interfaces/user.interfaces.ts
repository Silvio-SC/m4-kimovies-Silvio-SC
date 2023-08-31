import { Repository } from "typeorm"
import { userCreateSchema, userReturnArrSchema, userReturnSchema, userUpadeteSchema } from "../schemas"
import { z } from "zod"
import { User } from "../entities"

type UserCreate = z.infer<typeof userCreateSchema> 
type UserReturn = z.infer<typeof userReturnSchema> 
type UserReturnArr = z.infer<typeof userReturnArrSchema>
type UserUpdate = z.infer<typeof userUpadeteSchema>

type UserRepo = Repository<User>

export { UserCreate, UserRepo, UserReturn, UserReturnArr, UserUpdate }