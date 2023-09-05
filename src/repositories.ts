import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { CategoryRepo, RealEstateRepo, UserRepo } from "./interfaces";

const userRepo: UserRepo = AppDataSource.getRepository(User)
const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
const addressRepo = AppDataSource.getRepository(Address)
const ScheduleRepo = AppDataSource.getRepository(Schedule)

export { userRepo, categoryRepo, realEstateRepo, addressRepo, ScheduleRepo}