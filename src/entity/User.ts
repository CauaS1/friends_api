import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Message } from "./Message";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ nullable: true, default: undefined })
  photo: string;

  @Column({ nullable: true, default: undefined })
  about: string;

  @Column({ nullable: true, default: 0 })
  age: number;

  @Column({ nullable: true, default: 0 })
  longitude: number;

  @Column({ nullable: true, default: 0 })
  latitude: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(type => Message)
  @JoinTable()
  messages: Message[];
}
