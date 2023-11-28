const db = require('../utils/database');
const initModels = require('../models/initModels');
const { Categories, Products, Business } = require('../models');
const { categories, pulpoCoin, business } = require('./data.js');

initModels();

db.sync({ force: true })
  .then(() => {
    console.log('Iniciando la plantación de Información');

    business.forEach(business => Business.create(business));

    setTimeout(() => categories.forEach(category => Categories.create(category)), 1000);
    setTimeout(() => pulpoCoin.forEach(product => Products.create(product)), 2500);
  })
  .then(() => console.log('Implantation complete'))
  .catch(error => console.log(error));
