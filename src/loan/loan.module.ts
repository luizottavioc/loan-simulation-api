import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Loan } from '../../database/models/loan.model';

@Module({
  imports: [SequelizeModule.forFeature([Loan])],
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoanModule {}
