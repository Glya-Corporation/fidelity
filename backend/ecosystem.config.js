module.exports = {
  apps : [{
    name: 'parejas',
    script: './src/server.js',
    watch: true,
    env_file: ".env.custom",
    autorestart: true
  }]
};
