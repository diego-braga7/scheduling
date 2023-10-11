import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntityAbstract } from './base-entity.abstract';

@Entity()
export class User extends BaseEntityAbstract{
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({unique: true, type: 'varchar', length: 50, nullable: false})
  username: string;

  @Column({unique: true, type: 'varchar', length: 100, nullable: false})
  email: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  password: string;
}
