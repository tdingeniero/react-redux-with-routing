import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import userReducer from "./user";
import counterReducer from "./counter";
import { watcherSaga } from "../sagas/rootSagas";

const sagaMiddleware = createSagaMiddleWare();

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
  middleware: { ...getDefaultMiddleware, sagaMiddleware },
});

sagaMiddleware.run(watcherSaga);

export default store;
