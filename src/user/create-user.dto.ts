import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { IsMd5HashConstraint } from 'src/util/validator/Is-Md5-hash-constraint';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Validate(IsMd5HashConstraint)
  password: string;
}
