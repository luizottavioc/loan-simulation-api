import dotenv from 'dotenv';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

import { UF } from 'src/uf/uf.model';

dotenv.config();

const config: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  autoLoadModels: true,
  synchronize: true,
  models: [UF],
};

export default config;
