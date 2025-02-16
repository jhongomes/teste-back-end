import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import  uuid from "uuid";
@Entity("users")
class User{

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({
    unique: true
  })
  nickname: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column({
    unique: true
  })
  cpf: string;

  @Column()
  birth_date: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  bio: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;



}
export { User }
