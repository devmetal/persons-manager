import persons from '../PersonReducer';

const datas = [
  { "name": "Foo", "job": "", "age": "34", "nick": "", "employee": true, "id": 1 },
  { "name": "Bar", "job": "", "age": "34", "nick": "", "employee": true, "id": 2 },
];

describe('Person reducer', () => {
  it('PERSONS_FETCHED', () => {
    const action = { type: 'PERSONS_FETCHED', persons: datas };
    expect(persons([], action).map(p => p.name)).toEqual(['Foo', 'Bar']);
  });

  it('ADD_PERSON', () => {
    const person = { "name": "Baz", "job": "", "age": "34", "nick": "", "employee": true };
    const action = { type: 'ADD_PERSON', person };
    expect(persons(datas, action).map(p => p.name)).toEqual([
      'Baz', 'Foo', 'Bar'
    ])
  });

  it('UPDATE_PERSON', () => {
    const person = { "name": "Baz", "job": "", "age": "34", "nick": "", "employee": true };
    const action = { type: 'UPDATE_PERSON', id: 1, person };
    expect(persons(datas, action)).toEqual([
      { "name": "Baz", "job": "", "age": "34", "nick": "", "employee": true, "id":1 },
      { "name": "Bar", "job": "", "age": "34", "nick": "", "employee": true, "id":2 },
    ]);
  });

  it('REMOVE_PERSON', () => {
    const action = { type: 'REMOVE_PERSON', id: 1 };
    expect(persons(datas, action)).toEqual([
      { "name": "Bar", "job": "", "age": "34", "nick": "", "employee": true, "id":2 },
    ]);
  });
});
