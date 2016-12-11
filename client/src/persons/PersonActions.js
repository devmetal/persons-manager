// @flow

import type { Person, Persons, Action } from './flowtypes';

function fetchStart(): Action {
  return { type: 'PERSONS_FETCH' };
}

function fetchComplete(persons: Persons): Action {
  return { type: 'PERSONS_FETCHED', persons };
}

function fetchError(err): Action {
  console.log(err);
  return { type: 'PERSONS_FETCH_ERROR', err };
}

export function fetchPersons(): Function {
  return (dispatch: Function) => {
    dispatch(fetchStart());
    return fetch('/api')
      .then((response) => response.json())
      .then((response) => dispatch(fetchComplete(response)))
      .catch((err) => dispatch(fetchError(err)));
  }
}

export function addPerson(p: Person): Action {
  return { type: 'ADD_PERSON', person: p };
}

export function removePerson(id: string): Action {
  return { type: 'REMOVE_PERSON', id };
}

export function updatePerson(id: string, p: Person): Action {
  return { type: 'UPDATE_PERSON', person: p, id };
}
