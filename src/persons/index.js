// @flow

const persons = require('./persons');

module.exports = {
  init: persons.init,
  getAll: persons.getAll,
  getRaw: persons.getRaw,
};
