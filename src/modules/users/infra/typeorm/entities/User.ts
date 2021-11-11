import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, ManyToMany, JoinColumn } from 'typeorm';

import Address from './Address';
import Company from './Company';

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userNumber: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    addressId: string;

    @ManyToMany(() => Address)
    @JoinColumn({name: 'addres_id'})
    address: Address;

    @Column()
    phone: string;

    @Column()
    website: string;

    @Column()
    companyId: string;

    @ManyToMany(() => Company)
    @JoinColumn({name: 'companyId'})
    company: Company;
}

export default User;
