import { combineReducers } from 'redux';
import persons from './PersonReducer';
import controls from './controls/ControlReducer'

const personsApp = combineReducers({
  persons,
  controls
});

export default personsApp;
