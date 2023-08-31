import { User } from "../entities";
import { AppError } from "../errors";
import { UserCreate, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";
import { userReturnArrSchema, userReturnSchema, userUpadeteSchema } from "../schemas";


const create = async (payload: UserCreate) => {
    const find: User | null = await userRepo.findOneBy({email: payload.email})

    if(find) throw new AppError("Email already exists.", 401)

    const user: User = userRepo.create(payload)  
    await userRepo.save(user)

    return userReturnSchema.parse(user)
}

const read = async () => {
    const users: User[] = await userRepo.find()
    return userReturnArrSchema.parse(users)
}

const update = async (user: any, payload: UserUpdate) => {
    const updatedUser = await userRepo.save({...user, ...payload})
    return userReturnSchema.parse(updatedUser) 
}

const destroy = async (payload: User) => {
    return await userRepo.softRemove(payload)
}

export default { create, read, update, destroy }