import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, ManyToMany, JoinColumn } from 'typeorm';

@Entity('Company')
class Company{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    catchPhase: string;

    @Column()
    bs: string;
}

export default Company;
