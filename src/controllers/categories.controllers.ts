import { Request, Response } from "express"
import { AppError } from "../errors"
import { CategoryReturn, CategoryReturnArr } from "../interfaces"
import { categoryRepo } from "../repositories"
import { categoriesServices } from "../services"

const create = async (req: Request, res: Response) => {
    const name = req.body.name
    const verifyReq = await categoryRepo.findOneBy({ name })

    if (!verifyReq) throw new AppError("Name already exists.", 401)
    
    const category: CategoryReturn = await categoriesServices.create(name)

    return res.status(201).json(category)
}

const read = async (req: Request, res: Response) => {
    const categories: CategoryReturnArr = await categoriesServices.read()
    return res.status(200).json(categories)
}

const readByCategory = async (req: Request, res: Response) => {
    const categories = await categoriesServices.readByCategory(req.params.id)
    return res.status(200).json(categories)
}

export default { create, read, readByCategory }