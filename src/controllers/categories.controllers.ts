import { categoryRepo } from "../repositories"

const create = async (req: Request, res: Response) => {
    const name = req.body
    const category = categoryRepo.findBy({ name: name })
    
    const user: UserReturn = await userServices.create(verifyReq)

    return res.status(201).json(user)
}

const read = async (req: Request, res: Response) => {
    const users: UserReturnArr = await userServices.read()
    return res.status(200).json(users)
}