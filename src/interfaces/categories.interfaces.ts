import { Repository } from "typeorm"
import { categoryCreateSchema, categoryReturnSchema, userCreateSchema } from "../schemas"
import { z } from "zod"
import { Category } from "../entities"

type CategoryCreate = z.infer<typeof categoryCreateSchema> 
type CategoryReturn = z.infer<typeof categoryReturnSchema> 
type CategoryReturnArr = CategoryReturn[]

type CategoryRepo = Repository<Category>

export { CategoryCreate, CategoryRepo, CategoryReturnArr, CategoryReturn }