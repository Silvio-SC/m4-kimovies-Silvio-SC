import { Request, Response } from "express"
import { realEstateCreateSchema } from "../schemas/realEstate.schema"
import { RealEstate } from "../entities"
import { realEstateServices } from "../services"


const create = async (req: Request, res: Response) => {
    const verifyReq = realEstateCreateSchema.parse(req.body)
    const realEstate = await realEstateServices.create(verifyReq)

    return res.status(201).json(realEstate)
}

const read = async (req: Request, res: Response) => {
    const realEstate = await realEstateServices.read()

    return res.status(200).json(realEstate)
}

export default { create, read }