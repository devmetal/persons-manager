// @flow

import type { Action } from '../flowtypes';

type ControlState = {
  addPerson: boolean,
  graph: boolean
};

const defaultState = {addPerson: false, graph: false};

const controls = (state: ControlState = defaultState, action:Action): ControlState =>  {
  switch(action.type) {
    case 'OPEN_ADD_PERSON': return {...state, addPerson: true};
    case 'CLOSE_ADD_PERSON': return {...state, addPerson: false};
    case 'OPEN_GRAPH': return {...state, graph: true};
    case 'CLOSE_GRAPH': return {...state, graph: false};
    default: return state;
  }
}

export default controls;
