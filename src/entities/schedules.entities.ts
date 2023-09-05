import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entities";
import { RealEstate } from "./realEstates.entities";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @CreateDateColumn({ type: "date" })
    date: string;

    @Column({ type: "time" })
    hour: string;
  
    @ManyToOne(() => RealEstate, (re) => re.schedules)
    @JoinColumn()
    realEstate: RealEstate

    @ManyToOne(() => User, (u) => u.schedules)
    @JoinColumn()
    user: User
}