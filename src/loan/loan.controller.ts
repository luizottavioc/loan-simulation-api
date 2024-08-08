import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from '../../database/models/loan.model';
import { CreateLoanDto } from './dto/create-loan.dto';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  findAll(): Promise<Loan[]> {
    return this.loanService.findAll();
  }

  @Post()
  create(@Body() createLoanDto: CreateLoanDto): Promise<Loan> {
    return this.loanService.create(createLoanDto);
  }
}
