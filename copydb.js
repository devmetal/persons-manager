// Create db directory in build folder
// After copy the persons.json into

// @flow

const {
  mkdirSync, 
  createReadStream, 
  createWriteStream,
} = require('fs');

const { join } = require('path');

mkdirSync(join(__dirname, 'build', 'db'));

const file = join(__dirname, 'src', 'db', 'persons.json');
const targ = join(__dirname, 'build', 'db', 'persons.json');
const istream = createReadStream(file);
const ostream = createWriteStream(targ);

istream.pipe(ostream).on('close', () => {
  console.log('Database copied');
});
