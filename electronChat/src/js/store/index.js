import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

export const configureStore = () => {
  const middlewares = [thunkMiddleware];

  const store = createStore(
    () => {
      return {
        message: "Hello World",
        data1: "just1",
        data2: "just1",
      };
    },
    applyMiddleware(...middlewares),
  );

  return store;
};
