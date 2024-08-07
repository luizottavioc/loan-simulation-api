import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { UF } from './uf.model';

@Seeder({
  model: UF,
  unique: ['name', 'acronym'],
})
export class UFSeeder implements OnSeederInit {
  run() {
    const data = [
      {
        name: 'Minas Gerais',
        acronym: 'MG',
        interest_rate: 0.01,
      },
      {
        name: 'São Paulo',
        acronym: 'SP',
        interest_rate: 0.008,
      },
      {
        name: 'Rio de Janeiro',
        acronym: 'RJ',
        interest_rate: 0.009,
      },
      {
        name: 'Espírito Santo',
        acronym: 'ES',
        interest_rate: 0.0111,
      },
    ];
    return data;
  }
}
