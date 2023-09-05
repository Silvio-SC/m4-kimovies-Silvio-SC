import { Repository } from "typeorm"
import { z } from "zod"
import { RealEstate } from "../entities"
import { realEstateArrSchema, realEstateCreateSchema } from "../schemas"

type RealEstateCreate = z.infer<typeof realEstateCreateSchema> 
// type RealEstateReturn = z.infer<typeof RealEstateReturnSchema> 
// type RealEstateReturnArr = z.infer<typeof RealEstateReturnArrSchema>
type RealEstateArr= z.infer<typeof realEstateArrSchema>

type RealEstateRepo = Repository<RealEstate>

export { RealEstateCreate, RealEstateRepo, RealEstateArr }