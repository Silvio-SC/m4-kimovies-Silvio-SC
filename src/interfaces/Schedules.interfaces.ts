import { Schedule } from './../entities/schedules.entities';
import { Repository } from "typeorm"
import { z } from "zod"
import { RealEstate } from "../entities"
import { realEstateArrSchema, realEstateCreateSchema, schedulesCreateSchema, schedulesReciveSchema } from "../schemas"

type SchedulesCreate = z.infer<typeof schedulesCreateSchema> 
// type RealEstateReturn = z.infer<typeof RealEstateReturnSchema> 
// type RealEstateReturnArr = z.infer<typeof RealEstateReturnArrSchema>
type SchedulesRecive = z.infer<typeof schedulesReciveSchema>

type ScheduleRepo = Repository<Schedule>

export { SchedulesRecive, ScheduleRepo, SchedulesCreate }