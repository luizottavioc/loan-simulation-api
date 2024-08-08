import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UF } from '../../database/models/uf.model';

@Injectable()
export class UFService {
  constructor(
    @InjectModel(UF)
    private ufModel: typeof UF,
  ) {}

  async findAll(): Promise<UF[]> {
    return this.ufModel.findAll();
  }
}
