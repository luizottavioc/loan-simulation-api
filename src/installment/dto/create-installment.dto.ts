import { IsInt, IsDateString, IsPositive } from 'class-validator';
import { InstallmentEntity } from '../entity/installment.entity';

export class CreateInstallmentDto extends InstallmentEntity {
  @IsInt()
  @IsPositive()
  balanceDue: number;

  @IsInt()
  @IsPositive()
  interest: number;

  @IsInt()
  @IsPositive()
  value: number;

  @IsDateString()
  dueDate: Date;
}
