import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from 'src/database/entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  public createUserInDB(createUserDto: CreateUserDto) {
    const entitiy = this.mapDtoToEntitiy(createUserDto);
    return this.repository.save(entitiy);
  }

  private mapDtoToEntitiy(createUserDto: CreateUserDto): User {
    const user = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return user;
  }
}
