import knex from 'knex';
import { container } from 'tsyringe';

const db = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'database_bill',
    port: 3306,
  },
});

container.register('db', { useValue: db });
