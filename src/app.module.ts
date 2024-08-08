import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';

import sqlzconfig from '../database/sqlzconfig';
import seedconfig from '../database/seedconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UfModule } from './uf/uf.module';
import { LoanModule } from './loan/loan.module';
import { InstallmentModule } from './installment/installment.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sqlzconfig),
    SeederModule.forRoot(seedconfig),
    UfModule,
    LoanModule,
    InstallmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
