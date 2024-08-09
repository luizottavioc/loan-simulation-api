import {
  IsString,
  IsNumber,
  IsInt,
  Min,
  MaxLength,
  IsDateString,
  IsPositive,
  IsArray,
  MinLength,
  ValidateNested,
  ArrayMinSize,
  MaxDate,
} from 'class-validator';
import { LoanEntity } from '../entity/loan.entity';
import { Type } from 'class-transformer';
import { CreateInstallmentDto } from 'src/installment/dto/create-installment.dto';

export class CreateLoanDto extends LoanEntity {
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  clientCPF: string;

  @IsDateString()
  @MaxDate(new Date())
  clientDateOfBirth: Date;

  @IsNumber()
  @IsPositive()
  ufId: number;

  @IsInt()
  @Min(5000000)
  amount: number;

  @IsNumber()
  percentMonthInterest: number;

  @IsInt()
  @IsPositive()
  wantToPayPerMonth: number;

  @IsInt()
  @IsPositive()
  totalInterest: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateInstallmentDto)
  installments: CreateInstallmentDto[];
}
