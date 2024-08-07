import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class UF extends Model {
  @Column
  name: string;

  @Column
  acronym: string;

  @Column
  interest_rate: number;
}
