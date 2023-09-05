import { RealEstate, Schedule, User } from "../entities"
import { AppError } from "../errors"
import { SchedulesRecive } from "../interfaces"
import { ScheduleRepo, realEstateRepo, userRepo } from "../repositories"
import { schedulesReturnArrSchema, schedulesReturnSchema } from "../schemas"


const create = async (payload: SchedulesRecive) => {
    const findUser: User | null = await userRepo.findOne({ where:{id: payload.userId} })
    const findRealEstate: RealEstate | null = await realEstateRepo.findOneBy({ id: payload.realEstateId })

    if(!findUser) {
        throw new AppError("User not found", 404)
    }
    if(!findRealEstate) throw new AppError("RealEstate not found", 404)

    const findSchedule: Schedule | null = await ScheduleRepo.findOneBy({ 
        date: payload.date, 
        hour: payload.hour
    })
    const findUserSchedule: Schedule | null = await ScheduleRepo.findOne({ where:{
            user: {id: payload.userId},
            date: payload.date, 
            hour: payload.hour
        },
            
        relations: {
            user:true,
            realEstate: true
        }
    })

    const WeekDay = new Date(payload.date)
    const hour = Number(payload.hour.substring(0,2))
    if(WeekDay.getDay() === (0 || 6) ) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }
    if(!(hour >= 8) || !(hour < 19)) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    if (findUserSchedule) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }
    if(findSchedule) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    const scheduleBody = { 
        ...payload, 
        user: findUser!, 
        realEstate: findRealEstate!
    }

    const schedule: Schedule = ScheduleRepo.create(scheduleBody)  
    const scheduleReturn = await ScheduleRepo.save(schedule)

    return schedulesReturnSchema.parse(scheduleReturn) 
}

const read = async (payload: number) => {
    const findRealEstate = await realEstateRepo.findOne({ where: {
        id: payload!
        }, 
        relations: {
            schedules:{ user: true },
            address:true,
            category:true
        }
    })

    if(!findRealEstate) throw new AppError("RealEstate not found", 404)

    return findRealEstate
}

export default { read, create }