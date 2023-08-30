import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entities";
import { RealEstate } from "./realEstates.entities";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @CreateDateColumn({ type: "date" })
    date: string;

    @Column({ type: "date" })
    hour: string;
  
    @ManyToOne(() => RealEstate)
    realEstateId: number

    @ManyToOne(() => User, (u) => u.schedules)
    userId: number
    
}