# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

使用 fastify + Typescript + tsyringe 打造一个极简的依赖注入式的开发环境

数据库用 mysql，使用 knex 操作数据库

项目用模块化的方式管理每个业务模块，每个模块都有自己独立的 controller、service、model、router。
Controller 与 Service 都使用 tsyringe 进行依赖注入，方便开发。

## Available Scripts

In the project directory, you can run:

### `npm run start`

To start the app in dev mode.\
Open [http://localhost:3000/api/bill](http://localhost:3000/api/bill) to view it in the browser.

### `npm build`

To build the project. Typescript to js

### `npm run prod`

Use pm2 to start the app in production mode.

## Learn stop

Stop pm2 process
