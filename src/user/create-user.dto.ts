import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';
import { IsMd5Hash, IsMd5HashConstraint } from 'src/util/validator/Is-Md5-hash-constraint';
import { fieldUnique } from './field-unique.validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @fieldUnique()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @fieldUnique()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsMd5Hash()
  password: string;
}
