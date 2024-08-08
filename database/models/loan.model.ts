import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { UF } from 'database/models/uf.model';
import { Installment } from './installment.model';

@Table
export class Loan extends Model {
  @Column
  clientCPF: string;

  @Column
  clientDateOfBirth: Date;

  @ForeignKey(() => UF)
  @Column({
    references: {
      model: UF,
      key: 'id',
    },
  })
  ufId: number;

  @BelongsTo(() => UF)
  uf: UF;

  @Column
  amount: number;

  @Column({ type: DataTypes.FLOAT })
  percentMonthInterest: number;

  @Column
  wantToPayPerMonth: number;

  @Column
  totalInterest: number;

  @HasMany(() => Installment)
  installments: Installment[];
}
