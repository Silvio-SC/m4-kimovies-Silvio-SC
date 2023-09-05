import { 
    userSchema, 
    userCreateSchema, 
    userReturnSchema, 
    userUpadeteSchema,
    userReturnArrSchema 
} from "./user.schema"
import { 
    categorySchema, 
    categoryCreateSchema, 
    categoryReturnSchema, 
    categoryReturnArrSchema
} from "./categories.schema"
import { 
    addressSchema, 
    addressCreateSchema 
} from "./address.schema"
import { 
    schedulesSchema, 
    schedulesCreateSchema, 
    schedulesReciveSchema, 
    schedulesReturnSchema,
    schedulesReturnArrSchema
} from "./schedules.schema"
import { 
    realEstateSchema, 
    realEstateCreateSchema, 
    realEstateArrSchema, 
    realEstateReturn,
    realEstateReturnSchema 
} from "./realEstate.schema"
import { loginSchema } from "./login.schema"

export { userSchema, userCreateSchema, userReturnSchema, userUpadeteSchema, userReturnArrSchema,
    categorySchema, categoryCreateSchema, categoryReturnSchema, categoryReturnArrSchema,
    addressSchema, addressCreateSchema,
    schedulesSchema, schedulesCreateSchema, schedulesReciveSchema,schedulesReturnSchema, schedulesReturnArrSchema,
    realEstateSchema,realEstateCreateSchema, realEstateArrSchema, realEstateReturn, realEstateReturnSchema,
    loginSchema
}