// @flow

const { readFile } = require('fs');

let persons: Array<Person>;
let rawDump: Buffer;

const parseBff = (buffer: Buffer): Array<Object> => 
  JSON.parse(buffer.toString());

const convert = (datas: Array<Object>): Array<Person> => 
  datas.map(cast);

const cast = (raw: Object): Person => ({
  name: raw.name,
  nick: raw.nick,
  age: +raw.age,
  job: raw.job,
  employee: raw.employee || false,
});

const init = (source: string): Promise<> => {
  return new Promise((resolve, reject) => {
    readFile(source, (err, buff) => {
      if (err) return reject(err);
      rawDump = buff; // maybe copy
      const rawList = parseBff(buff);
      persons = convert(rawList);
      resolve();
    });
  });
};

const getAll = (): Array<Person> => [...persons];

const getRaw = (): Buffer => rawDump;

exports.init = init;
exports.getAll = getAll;
exports.getRaw = getRaw;