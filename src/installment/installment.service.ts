import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Installment } from './installment.model';

@Injectable()
export class InstallmentService {
  constructor(
    @InjectModel(Installment)
    private installmentModel: typeof Installment,
  ) {}

  async findAll(): Promise<Installment[]> {
    return this.installmentModel.findAll();
  }
}
