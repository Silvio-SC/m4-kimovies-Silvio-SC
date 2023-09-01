import { 
    userSchema, 
    userCreateSchema, 
    userReturnSchema, 
    userUpadeteSchema,
    userReturnArrSchema 
} from "./user.schema"
import { categorySchema, categoryCreateSchema , categoryReturnSchema} from "./categories.schema"
import { addressSchema } from "./address.schema"
import { schedulesSchema } from "./schedules.schema"
import { realEstateSchema } from "./realEstate.schema"
import { loginSchema } from "./login.schema"

export { userSchema, userCreateSchema, userReturnSchema, userUpadeteSchema, userReturnArrSchema,
    categorySchema, categoryCreateSchema, categoryReturnSchema,
    addressSchema,
    schedulesSchema,
    realEstateSchema,
    loginSchema
}