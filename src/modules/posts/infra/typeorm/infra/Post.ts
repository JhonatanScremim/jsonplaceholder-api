import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, ManyToMany, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('post')
export default class Post{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    postNumber: string;

    @Column()
    title: string;

    @Column()
    body: string;
}


