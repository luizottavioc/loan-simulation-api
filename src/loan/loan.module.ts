import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Loan } from 'database/models/loan.model';
import { Installment } from 'database/models/installment.model';

@Module({
  imports: [SequelizeModule.forFeature([Loan, Installment])],
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoanModule {}
