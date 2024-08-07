import { Controller, Get } from '@nestjs/common';
import { UFService } from './uf.service';
import { UF } from './uf.model';

@Controller()
export class UFController {
  constructor(private readonly ufService: UFService) {}

  @Get('/ufs')
  findAll(): Promise<UF[]> {
    return this.ufService.findAll();
  }
}
