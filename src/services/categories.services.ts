import { Category } from "../entities";
import { CategoryCreate, CategoryReturnArr } from "../interfaces";
import { categoryRepo } from "../repositories";
import { categoryCreateSchema, categoryReturnSchema, categorySchema } from "../schemas";

const create = async (payload: CategoryCreate ) => {
    const category: Category = categoryRepo.create(payload)
    await categoryRepo.save(category)

    return categoryReturnSchema.parse(category) 
}

const read = async (): Promise<CategoryReturnArr> => {
    const categories: Category[] = await categoryRepo.find()
    categoryReturnSchema.parse(categories)
    return  categories
}

const readByCategory = async (payload: string ) => {
    const categories = await categoryRepo.findBy({ name: payload})

    return categorySchema.parse(categories) 
}

export default { create, read, readByCategory }