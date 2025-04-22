import { Knex } from 'knex';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class BillService {
  constructor(@inject('db') private db: Knex) {}

  async getBills() {
    // return await this.db('table_bill').select('*');
    return { data: 'hello world' };
  }
}
