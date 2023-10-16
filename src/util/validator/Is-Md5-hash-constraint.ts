import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'isMd5Hash', async: false })
@Injectable()
export class IsMd5HashConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (typeof value !== 'string') {
      return false;
    }
    return /^[a-f0-9]{32}$/.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} deve ser um hash MD5 válido.`;
  }
}

export function IsMd5Hash(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsMd5Hash',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsMd5HashConstraint,
    });
  };
}
