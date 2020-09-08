import { createStore } from 'redux';
import { initialState, rootReducer } from '../reducers/reducer';

const store = createStore(rootReducer, initialState);

const saveToLocalStorage = (store: any) => {
  localStorage.removeItem('storage');
  localStorage.setItem('storage', JSON.stringify(store));
};

export default store;

store.subscribe(() => {
  console.log('Saved');
  saveToLocalStorage(store.getState());
});
