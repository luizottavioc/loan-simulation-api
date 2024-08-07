import { SeederModuleOptions } from 'nestjs-sequelize-seeder';

const config: SeederModuleOptions = {
  isGlobal: true,
  logging: true,
  disabled: false,
  runOnlyIfTableIsEmpty: false,
  connection: 'default',
  autoIdFieldName: 'id',
  disableEveryOne: false,
  enableAutoId: true,
  foreignDelay: 2000,
};

export default config;
