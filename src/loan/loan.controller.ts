import { Controller, Get } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from './loan.model';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  findAll(): Promise<Loan[]> {
    return this.loanService.findAll();
  }
}
