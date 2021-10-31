import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, ManyToMany, JoinColumn } from 'typeorm';

@Entity('company')
class Company{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    catchPhrase: string;

    @Column()
    bs: string;
}

export default Company;
