import { InstallmentEntity } from 'src/installment/entity/installment.entity';

export class LoanEntity {
  id?: number;
  clientCPF: string;
  clientDateOfBirth: Date;
  ufId: number;
  amount: number;
  percentMonthInterest: number;
  wantToPayPerMonth: number;
  totalInterest: number;
  installments: InstallmentEntity[];
}
