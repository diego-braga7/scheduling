import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntityAbstract } from './base-entity.abstract';

@Entity()
export class User extends BaseEntityAbstract{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true, type: 'varchar', length: 100, nullable: false})
  username: string;

  @Column({unique: true, type: 'varchar', length: 255, nullable: false})
  email: string;
}
