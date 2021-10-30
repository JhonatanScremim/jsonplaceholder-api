import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, ManyToMany, JoinColumn } from 'typeorm';

import Address from './Address';
import Company from './Company';

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    numberUser: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @ManyToMany(() => Address)
    @JoinColumn({ name: 'addressId'})
    addressId: string;

    @Column()
    phone: string;

    @Column()
    website: string;

    @ManyToMany(() => Company)
    @JoinColumn({name: 'companyId'})
    companyId: string;
}

export default User;
