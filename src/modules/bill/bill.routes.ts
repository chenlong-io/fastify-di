import { BillController } from '../bill';
import { container } from 'tsyringe';

/**
 * 账单路由
 */
export default (fastify, opts, done) => {
  fastify.get('/', async function (request, reply) {
    try {
      const billController = container.resolve(BillController);
      return await billController.getAllBills();
    } catch (error) {
      reply.send(error);
    }
  });

  done();
};
