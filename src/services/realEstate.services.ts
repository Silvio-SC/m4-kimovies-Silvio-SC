import { Address, RealEstate } from "../entities"
import { AppError } from "../errors"
import { RealEstateCreate } from "../interfaces"
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories"
import { realEstateArrSchema, realEstateReturn } from "../schemas"

const create = async (payload: RealEstateCreate) => {
    const findCategory = await categoryRepo.findOneBy({ id: payload.categoryId })

    if(!findCategory) throw new AppError("Category not exists.", 404)
    const findAddress: Address | null = await addressRepo.findOneBy(payload.address)

    if(findAddress) throw new AppError("Address already exists", 409)

    const realEstate: RealEstate = realEstateRepo.create({...payload, category: findCategory!})  
    const realEstateReturn = await realEstateRepo.save(realEstate)
    
    const address = await addressRepo.save({...payload.address, realEstate: realEstateReturn})
    return {...realEstateReturn, address: { 
        number: address.number,
        street: address.street,
        zipCode: address.zipCode,
        city: address.city,
        state: address.state, 
        id: address.id
    }}
}

const read = async () => {
    const realEstates: RealEstate[] = await realEstateRepo.find({ 
        relations: { address: true }
    }) 
    const responseRE = realEstates.map(elem => {
        return {...elem, value: `${elem.value}`}
    })
    // return realEstateArrSchema.parse(responseRE)
    return responseRE
}

export default { read, create }