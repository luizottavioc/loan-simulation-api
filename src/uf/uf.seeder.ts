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
        interestRate: 0.01,
      },
      {
        name: 'São Paulo',
        acronym: 'SP',
        interestRate: 0.008,
      },
      {
        name: 'Rio de Janeiro',
        acronym: 'RJ',
        interestRate: 0.009,
      },
      {
        name: 'Espírito Santo',
        acronym: 'ES',
        interestRate: 0.0111,
      },
    ];
    return data;
  }
}
