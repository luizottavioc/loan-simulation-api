import { Controller, Get } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { Installment } from '../../database/models/installment.model';

@Controller('installment')
export class InstallmentController {
  constructor(private readonly installmentService: InstallmentService) {}

  @Get()
  findAll(): Promise<Installment[]> {
    return this.installmentService.findAll();
  }
}
