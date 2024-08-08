import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
import { UF } from 'database/models/uf.model';

@Table
export class Loan extends Model {
  @Column
  clientCPF: string;

  @Column
  clientDateOfBirth: Date;

  @Column({
    references: {
      model: UF,
      key: 'id',
    },
  })
  ufId: number;

  @Column
  amount: number;

  @Column({ type: DataTypes.FLOAT })
  percentMonthInterest: number;

  @Column
  wantToPayPerMonth: number;

  @Column
  totalInterest: number;
}
