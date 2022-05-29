import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import Click from './Click';

@Entity()
export default class Url {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 300,
    })
    original_url: string;

    @Column({
        length: 40,
    })
    short_url: string;

    @CreateDateColumn()
    createdTimeStamp: Date;

    @OneToMany(type => Click, click => click.url)
    clicks: Click[];  
}
