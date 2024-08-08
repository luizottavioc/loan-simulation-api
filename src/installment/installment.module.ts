import { Module } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Installment } from './installment.model';

@Module({
  imports: [SequelizeModule.forFeature([Installment])],
  controllers: [InstallmentController],
  providers: [InstallmentService],
})
export class InstallmentModule {}
