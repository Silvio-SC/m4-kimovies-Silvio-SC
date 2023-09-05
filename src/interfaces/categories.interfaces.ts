import { Repository } from "typeorm"
import { categoryCreateSchema, categoryReturnSchema, categorySchema, userCreateSchema } from "../schemas"
import { z } from "zod"
import { Category } from "../entities"

type CategorySchema = z.infer<typeof categorySchema> 
type CategoryCreate = z.infer<typeof categoryCreateSchema> 
type CategoryReturn = z.infer<typeof categoryReturnSchema> 
type CategoryReturnArr = CategoryReturn[]

type CategoryRepo = Repository<Category>

export { CategoryCreate, CategoryRepo, CategoryReturnArr, CategoryReturn, CategorySchema }