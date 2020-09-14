import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";
import allReducers from "../reducers";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
  const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
