import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';
import { loadState, saveState } from '../utils/storage';

const initialData = loadState();

const store = createStore(
  rootReducer,
  initialData,
  composeWithDevTools(applyMiddleware(promise, thunk)),
);

store.subscribe(function() {
  saveState(store.getState());
});

export default store;