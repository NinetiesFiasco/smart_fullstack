import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import tst from './tst';

let reducers = combineReducers({
  tst
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;