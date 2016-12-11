// @flow

const { join } = require('path');
const express = require('express');
const { Router } = express;

const persons = require('./persons');

persons.init(join(__dirname, 'db', 'persons.json')).catch((err) => {
  console.error(err);
  process.exit(1);
});

const prt: number = +process.env.PORT || 8000;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const api = new Router();

api.get('/', (req, res) => {
  const list = persons.getAll();
  res.json(list);
});

app.use('/api', api);

app.listen(prt, () => {
  console.log(`Server running on ${prt}`);
});
