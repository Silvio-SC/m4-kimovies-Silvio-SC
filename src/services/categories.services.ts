import { Category } from "../entities";
import { AppError } from "../errors";
import { CategoryCreate, CategoryReturnArr } from "../interfaces";
import { CategorySchema } from "../interfaces/categories.interfaces";
import { categoryRepo } from "../repositories";
import { categoryReturnArrSchema, categoryReturnSchema, categorySchema } from "../schemas";

const create = async (payload: CategoryCreate ) => {
    const category: Category = categoryRepo.create(payload)
    await categoryRepo.save(category)

    return categoryReturnSchema.parse(category) 
}

const read = async (): Promise<CategoryReturnArr> => {
    const categories: Category[] = await categoryRepo.find()
    
    return categoryReturnArrSchema.parse(categories)
}

const readByCategory = async (payload: string ) => {
    const categories: CategorySchema | null = await categoryRepo.findOne({ where: {id: Number(payload)},
        relations: { realEstate: true }
    })

    if(!categories) throw new AppError("Category not found", 404)
    
    return categorySchema.parse(categories) 
}

export default { create, read, readByCategory }