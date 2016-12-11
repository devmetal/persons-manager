// @flow

import type { Action } from '../flowtypes';

export function openAddPerson(): Action {
  return { type: 'OPEN_ADD_PERSON' };
}

export function closeAddPerson(): Action {
  return { type: 'CLOSE_ADD_PERSON' };
}

export function openGraph(): Action {
  return { type: 'OPEN_GRAPH' };
}

export function closeGraph(): Action {
  return { type: 'CLOSE_GRAPH' };
}
