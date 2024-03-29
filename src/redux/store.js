import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/users";
import { watcherSaga } from "../sagas/rootSagas";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
