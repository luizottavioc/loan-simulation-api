import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Loan } from 'database/models/loan.model';

@Table
export class Installment extends Model {
  @ForeignKey(() => Loan)
  @Column({
    references: {
      model: Loan,
      key: 'id',
    },
  })
  loanId: number;

  @BelongsTo(() => Loan)
  loan: Loan;

  @Column
  balanceDue: number;

  @Column
  interest: number;

  @Column
  value: number;

  @Column
  dueDate: Date;
}
