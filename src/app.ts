import 'reflect-metadata';
import { join } from 'node:path';
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import Fastify, {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyServerOptions,
} from 'fastify';
import dotEnv from 'dotenv';
import path from 'path';
import fs from 'fs';
import formbody from '@fastify/formbody';
import fastifyJwt from '@fastify/jwt';
import cors from '@fastify/cors';
import { logSetting } from './config/settings';
import routes from './routes';
import './config/db';

dotEnv.config();

export interface AppOptions
  extends FastifyServerOptions,
    Partial<AutoloadPluginOptions> {}

// 解析日志目录路径
const logDir = path.resolve(__dirname, './logs');

// 确保目录存在（同步方式）
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true }); // recursive: true 允许创建多级目录
}

const fastify: FastifyInstance = Fastify({
  logger: logSetting[process.env.NODE_ENV],
});

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  fastify.register(formbody);
  fastify.register(fastifyJwt, { secret: 'your-secret' });
  fastify.register(cors, { origin: '*' }); // 允许跨域

  // 自动加载插件
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: { opts },
  });

  // 注册路由
  fastify.register(routes, { prefix: '/api' });
};

const start = async () => {
  try {
    await fastify.register(app);
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
