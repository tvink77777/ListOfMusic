import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../store";

export default function configureStore(initialState) {
  const logger = createLogger();

  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));

  if (module.hot) {
    module.hot.accept("../store", () => {
      const nextRootReducer = require("../store");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
