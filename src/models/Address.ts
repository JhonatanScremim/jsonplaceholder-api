import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, ManyToMany, JoinColumn, OneToMany } from 'typeorm';

import Geo from './Geo';

@Entity('address')
class Address{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    street: string;

    @Column()
    suite: string;

    @Column()
    city: string;

    @Column()
    zipcode: string;

    @ManyToMany(() => Geo)
    @JoinColumn({name: 'geoId'})
    geoId: string;
}

export default Address;
