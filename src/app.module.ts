import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import sqlzconfig from '../sqlzconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UfModule } from './uf/uf.module';

@Module({
  imports: [SequelizeModule.forRoot(sqlzconfig), UfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
