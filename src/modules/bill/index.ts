import { container } from 'tsyringe';
import BillController from './bill.controller';
import BillService from './bill.service';
import BillRoutes from './bill.routes';

// 注册为单例
container.registerSingleton(BillController);
container.registerSingleton(BillService);

export { BillRoutes, BillController, BillService };
