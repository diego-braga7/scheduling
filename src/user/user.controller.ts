import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly service: UserService){

    }

    @Post()
     public create(@Body() createUserDto: CreateUserDto){
        return this.service.createUserInDB(createUserDto);
    }
}
