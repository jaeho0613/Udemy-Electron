import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { chatReducer } from "../reducers/chats";

export const configureStore = () => {
  const middlewares = [thunkMiddleware];

  const store = createStore(
    combineReducers({
      chats: chatReducer,
    }),
    applyMiddleware(...middlewares),
  );

  return store;
};
