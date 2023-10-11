import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntityAbstract } from './base-entity.abstract';
import { User } from './user.entity';

@Entity()
export class Address extends BaseEntityAbstract {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  road: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  number: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  district: string;

  @Column({type: 'int', nullable: false})
  user_id: number;

  @OneToOne(() => User, {cascade: false, eager: true})
  @JoinColumn()
  user: User;
}
