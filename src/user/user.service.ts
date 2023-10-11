
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { User } from "src/database/entities/user.entity";

@Injectable()
export class UserService {

    public createUserInDB(createUserDto: CreateUserDto){
        const entitiy = this.mapDtoToEntitiy(createUserDto);
        //manda salvar;
        return entitiy;
        
    }

    private mapDtoToEntitiy(createUserDto: CreateUserDto): User{
        const user = new User();
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        return user;
    }

}
  