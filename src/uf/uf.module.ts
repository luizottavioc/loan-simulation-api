import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UF } from './uf.model';
import { UFService } from './uf.service';
import { UFController } from './uf.controller';

@Module({
  imports: [SequelizeModule.forFeature([UF])],
  controllers: [UFController],
  providers: [UFService],
})
export class UfModule {}
