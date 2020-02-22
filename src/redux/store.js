import { createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from './sagas';
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware()
const middleware=[sagaMiddleware]
middleware.push(
  createLogger({
    collapsed: true
  })
);

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
sagaMiddleware.run(rootSaga)


export default store;
