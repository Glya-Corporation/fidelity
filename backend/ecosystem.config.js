module.exports = {
  apps : [{
    name: 'fidelity',
    script: './src/server.js',
    watch: true,
    env_file: ".env.custom",
    autorestart: true
  }]
};
