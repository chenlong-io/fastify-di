module.exports = {
  apps: [
    {
      name: 'bill',
      script: './dist/app.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_type: 'json',
      log_file: '/www/wwwroot/fastify-starter/logs/error.log',
      time: true, // 自动日志轮转
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
