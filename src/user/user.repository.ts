import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  public async save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  public async findByField(field: string, value: any){
    return this.repository.createQueryBuilder('user').
    where(`user.${field} = :value`, {value}).getOne();

  }

  
}
