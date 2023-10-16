import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import { UserRepository } from './user.repository';



@ValidatorConstraint({ name: 'fieldUnique', async: true })
@Injectable()
export class fieldUniqueConstraint implements ValidatorConstraintInterface {

  constructor(private readonly repository: UserRepository){

  }
  validate(value: string, args: ValidationArguments) {
    
    const user  = this.repository.findByField(args.property, value);
    return !user;
  }

  defaultMessage(args: ValidationArguments) {
    return `O ${args.property} já está cadastrado.`;
  }
}

export function fieldUnique(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'fieldUnique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: fieldUniqueConstraint,
    });
  };
}
