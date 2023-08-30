import { User } from "../entities";
import { UserCreate } from "../interfaces";
import { userRepo } from "../repositories";
import { userReturnSchema } from "../schemas";


const create = async (payload: UserCreate) => {
    const user: User = userRepo.create(payload)  
    await userRepo.save(user)

    return userReturnSchema.parse(user)
}

export default { create }