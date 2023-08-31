import { Category } from "../entities";
import { CategoryCreate } from "../interfaces";
import { categoryRepo } from "../repositories";
import { categoryCreateSchema } from "../schemas";

const create = async (payload: CategoryCreate ) => {
    const category: Category = categoryRepo.create(payload)
    await categoryRepo.save(category)

    return categoryCreateSchema.parse(category) 
}

const read = async () => {
    const categories: Category[] = await categoryRepo.find()

    return categoryCreateSchema.parse(categories) 
}

const readBycategory = async (payload: CategoryCreate ) => {
    const categories: Category[] = await categoryRepo.findBy(payload)

    return categoryCreateSchema.parse(categories) 
}

export { create }