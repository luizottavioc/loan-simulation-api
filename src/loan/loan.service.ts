import { BadRequestException, Injectable } from '@nestjs/common';
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

  public static MIN_LOAN_AMOUNT = 5000000;

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

    if (amount < LoanService.MIN_LOAN_AMOUNT) {
      throw new BadRequestException(
        `Loan amount is too small. Please check your data.`,
      );
    }

    const totalInterestByInstallments = installments.reduce((acc, curr) => {
      return acc + curr.interest;
    }, 0);

    if (totalInterestByInstallments != totalInterest) {
      throw new BadRequestException(
        'Total interest by installments is malformed. Please check your data.',
      );
    }

    const totalLoanValue = amount + totalInterest;
    const totalAmountByInstallments = installments.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);

    if (totalAmountByInstallments != totalLoanValue) {
      throw new BadRequestException(
        'Total amount by installments is malformed. Please check your data.',
      );
    }

    const wantToPayPercentOfAmount = wantToPayPerMonth / amount;
    if (wantToPayPercentOfAmount < 0.01) {
      throw new BadRequestException(
        'Want to pay percent of amount is malformed. Please check your data.',
      );
    }

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
