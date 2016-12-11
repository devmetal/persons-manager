// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

export type Person = {
  name: string,
  job: string,
  age: number,
  nick: string,
  employee: boolean,
  id: string,
};

export type Persons = Array<Person>;

export type Action = 
  { type: 'PERSONS_FETCH' } |
  { type: 'PERSONS_FETCHED', persons: Persons } |
  { type: 'PERSONS_FETCH_ERROR', err: any } |
  { type: 'ADD_PERSON', person: Person } |
  { type: 'REMOVE_PERSON', id: string } |
  { type: 'UPDATE_PERSON', id: string, person: Person } |
  { type: 'OPEN_ADD_PERSON' } |
  { type: 'CLOSE_ADD_PERSON' } |
  { type: 'OPEN_GRAPH' } |
  { type: 'CLOSE_GRAPH' }
