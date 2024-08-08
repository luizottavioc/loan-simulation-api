import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UF } from '../../database/models/uf.model';
import { UFService } from './uf.service';
import { UFController } from './uf.controller';
import { UFSeeder } from '../../database/seeds/uf.seeder';
import { SeederModule } from 'nestjs-sequelize-seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([UF]),
    SeederModule.forFeature([UFSeeder]),
  ],
  controllers: [UFController],
  providers: [UFService],
})
export class UfModule {}
