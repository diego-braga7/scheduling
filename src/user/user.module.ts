import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { DatabaseModule } from 'src/database/database.module';
import { User } from 'src/database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
