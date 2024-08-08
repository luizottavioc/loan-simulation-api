import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Loan } from 'database/models/loan.model';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Installment } from 'database/models/installment.model';

@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan)
    private loanModel: typeof Loan,
    @InjectModel(Installment)
    private installmentModel: typeof Installment,
  ) {}

  async findAll(): Promise<Loan[]> {
    return this.loanModel.findAll();
  }

  async create(createLoanDto: CreateLoanDto): Promise<Loan> {
    const {
      clientCPF,
      clientDateOfBirth,
      ufId,
      amount,
      percentMonthInterest,
      wantToPayPerMonth,
      totalInterest,
      installments,
    } = createLoanDto;

    const loan = await this.loanModel.create({
      clientCPF,
      clientDateOfBirth,
      ufId,
      amount,
      percentMonthInterest,
      wantToPayPerMonth,
      totalInterest,
    });

    const installmentsWithLoanId = installments.map((installment) => ({
      ...installment,
      loanId: loan.dataValues.id,
    }));

    await this.installmentModel.bulkCreate(installmentsWithLoanId);

    return loan;
  }
}
