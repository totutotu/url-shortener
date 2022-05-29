import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from 'typeorm';
import Url from './Url'; 


@Entity()
export default class Click {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdTimeStamp: Date;

    @ManyToOne(type => Url, url => url.clicks)
    url: Url;

    @Column()
    urlId: number

}