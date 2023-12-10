const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels.js');
const { AuthRoutes, UsersRoutes, ProductsRoutes } = require('./routes/index.js');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
  .then(() => console.log('Authenticate complete'))
  .catch(error => console.log(error));

initModels();

db.sync({ force: true })
  .then(() => console.log('Synchronized database'))
  .catch(error => console.log(error));

app.get('/', (req, res) => {
  res.status(200).json({name: 'fidelity'})
});

app.use('/api/v1', AuthRoutes);
app.use('/api/v1', UsersRoutes);
app.use('/api/v1', ProductsRoutes);

app.use(hendleError);

module.exports = app;
