import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import * as crypto from 'crypto';

@ValidatorConstraint({ name: 'isMd5Hash', async: false })
export class IsMd5HashConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
      console.log('ok');
    if (typeof value !== 'string') {
      return false;
    }
    // Verifica se a string é um hash MD5 válido
    return /^[a-f0-9]{32}$/.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} deve ser um hash MD5 válido.`;
  }
}
