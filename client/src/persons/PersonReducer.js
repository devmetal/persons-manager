// @flow

import type { Person, Persons, Action } from './flowtypes';
import shortid from 'shortid';

const persons = (state: Persons = [], action: Action): Persons => {
  switch (action.type) {
    case 'PERSONS_FETCHED': {
      return [...state, ...action.persons.map((p) => {
        return {...p, id: shortid.generate() }
      })];
    }
    case 'ADD_PERSON': {
      return [{...action.person, id: shortid.generate()}, ...state];
    }
    case 'UPDATE_PERSON': {
      const { id, person } = action;
      return state.map((p: Person): Person => {
        if (p.id !== id) return p;
        return Object.assign({}, p, person);
      });
    }
    case 'REMOVE_PERSON': {
      const { id } = action;
      return state.filter((p: Person): boolean => p.id !== id);
    }
    default: {
      return state;
    }
  }
}

export default persons;