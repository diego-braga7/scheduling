import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import PostEntity from './entities/post.entity';
import { CreatePost1696790865492 } from './migrations/1696790865492-CreatePost';
import { PostCreationDate1696791422079 } from './migrations/1696791422079-PostCreationDate';
import { AddCollumnPost1696906804320 } from './migrations/1696906804320-addCollumnPost';
import { User } from './entities/user.entity';
import { CreateUser1696906891062 } from './migrations/1696906891062-CreateUser';
import { Address } from './entities/address.entity';
import { CreateAddress1697047962416 } from './migrations/1697047962416-CreateAddress';
import { AddressRelationsUser1697048894061 } from './migrations/1697048894061-AddressRelationsUser';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get<string>('DB_EXTERNAL_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_DATABASE_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [PostEntity, User, Address],
  migrations: [
    CreatePost1696790865492,
    PostCreationDate1696791422079,
    AddCollumnPost1696906804320,
    CreateUser1696906891062,
    CreateAddress1697047962416,
    AddressRelationsUser1697048894061
  ],
});
