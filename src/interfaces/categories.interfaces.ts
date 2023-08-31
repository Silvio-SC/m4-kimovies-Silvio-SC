import { Repository } from "typeorm"
import { categoryCreateSchema, userCreateSchema } from "../schemas"
import { z } from "zod"
import { Category } from "../entities"

type CategoryCreate = z.infer<typeof categoryCreateSchema> 
type CategoryReturnArr = CategoryCreate[]

type CategoryRepo = Repository<Category>

export { CategoryCreate, CategoryRepo, CategoryReturnArr }