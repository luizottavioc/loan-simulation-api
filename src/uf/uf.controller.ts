import { Controller, Get } from '@nestjs/common';
import { UFService } from './uf.service';
import { UF } from '../../database/models/uf.model';

@Controller('uf')
export class UFController {
  constructor(private readonly ufService: UFService) {}

  @Get()
  findAll(): Promise<UF[]> {
    return this.ufService.findAll();
  }
}
