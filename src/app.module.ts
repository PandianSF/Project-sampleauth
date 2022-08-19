import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Authentication,Employees } from './user.entity';

@Module({
  imports: [
        TypeOrmModule.forRoot({
  type:'postgres',
  host:'localhost',
  port:5432,
  username: 'pandianr',
  password: 'root',
  database: 'test',
  entities : [Authentication,Employees],
  synchronize:true,
}),
	TypeOrmModule.forFeature([Authentication,Employees]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
