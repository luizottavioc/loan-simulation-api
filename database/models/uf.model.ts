import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class UF extends Model {
  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  acronym: string;

  @Column({ type: DataTypes.FLOAT })
  interestRate: number;
}
