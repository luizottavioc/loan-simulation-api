import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Loan } from './loan.model';

@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan)
    private loanModel: typeof Loan,
  ) {}

  async findAll(): Promise<Loan[]> {
    return this.loanModel.findAll();
  }
}
