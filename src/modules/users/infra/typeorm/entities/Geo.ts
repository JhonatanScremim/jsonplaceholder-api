import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, ManyToMany, JoinColumn, UpdateQueryBuilder } from 'typeorm';

@Entity('geo')
class Geo{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    lat: string;

    @Column()
    lng: string;
}

export default Geo;
