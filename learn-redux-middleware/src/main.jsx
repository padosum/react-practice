import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "@redux-saga/core";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware,
      logger
    )
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
