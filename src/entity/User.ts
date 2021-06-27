import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, JoinColumn } from "typeorm";
import { Post } from "./Post";

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

  @Column({ nullable: true, default: 0, type: 'real' })
  longitude: number;

  @Column({ nullable: true, default: 0, type: 'real' })
  latitude: number;

  @Column({ nullable: true, default: undefined })
  instagram: string;

  @Column({ nullable: true, default: undefined })
  whatsapp: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}
