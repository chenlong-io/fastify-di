import { injectable } from 'tsyringe';
import BillService from './bill.service';

@injectable()
export default class BillController {
  constructor(private billService: BillService) {}

  async getAllBills() {
    return await this.billService.getBills();
  }
}
