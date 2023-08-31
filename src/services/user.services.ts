import { User } from "../entities";
import { UserCreate, UserReturnArr } from "../interfaces";
import { userRepo } from "../repositories";
import { userReturnSchema } from "../schemas";


const create = async (payload: UserCreate) => {
    const user: User = userRepo.create(payload)  
    await userRepo.save(user)

    return userReturnSchema.parse(user)
}

const read = async () => {
    const users: UserReturnArr = await userRepo.find()
    return users
}

const update = async () => {
    const users: UserReturnArr = await userRepo.find()
    return users
}

const destroy = async (payload: User) => {
    return await userRepo.softRemove(payload)
}

export default { create, read, update, destroy }