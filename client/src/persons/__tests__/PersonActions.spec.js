import * as actions from '../PersonActions';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

const persons = [
  { "name": "Foo", "job": "", "age": "34", "nick": "", "employee": true },
  { "name": "Bar", "job": "", "age": "34", "nick": "", "employee": true },
];

describe('Person Actions', () => {
  describe('Async actions', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('Dispatch PERSONS_FETCHED when datas loaded', () => {
      fetchMock.get('*', persons);

      const expectedActions = [
        { type: 'PERSONS_FETCH' },
        { type: 'PERSONS_FETCHED', persons },
      ];

      const store = mockStore([]);

      return store.dispatch(actions.fetchPersons())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });
  });

  describe('Actions', () => {
    it('Dispatch ADD_PERSON', () => {
      const person = { "name": "Foo", "job": "", "age": "34", "nick": "", "employee": true };
      const expectedAction = { type: 'ADD_PERSON', person };

      const store = mockStore([]);

      store.dispatch(actions.addPerson(person));

      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  it('Dispatch UPDATE_PERSON', () => {
    const person = { "name": "Foo", "job": "", "age": "34", "nick": "", "employee": true };
    const expectedAction = { type: 'UPDATE_PERSON', name: 'Foo', person };

    const store = mockStore([]);

    store.dispatch(actions.updatePerson('Foo', person));

    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('Dispatch REMOVE_PERSON', () => {
    const expectedAction = { type: 'REMOVE_PERSON', name: 'Foo' };

    const store = mockStore([]);

    store.dispatch(actions.removePerson('Foo'));

    expect(store.getActions()).toEqual([expectedAction]);
  });

});
