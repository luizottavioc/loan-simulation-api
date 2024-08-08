import { Table, Column, Model } from 'sequelize-typescript';
import { Loan } from 'database/models/loan.model';

@Table
export class Installment extends Model {
  @Column({
    references: {
      model: Loan,
      key: 'id',
    },
  })
  idLoan: number;

  @Column
  balanceDue: number;

  @Column
  interest: number;

  @Column
  value: number;

  @Column
  dueDate: Date;
}
