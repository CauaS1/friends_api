import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  photo: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, user => user.posts)
  user: User;
}