import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import PostEntity from './entities/post.entity';
import { CreatePost1696790865492 } from './migrations/1696790865492-CreatePost';
import { PostCreationDate1696791422079 } from './migrations/1696791422079-PostCreationDate';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get<string>('DB_EXTERNAL_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_DATABASE_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [PostEntity],
  migrations: [CreatePost1696790865492, PostCreationDate1696791422079]
});