import { BillRoutes } from './modules/bill';

export default (fastify, opts, done) => {
  // 账单模块路由
  fastify.register(BillRoutes, { prefix: '/bill' });

  done();
};
