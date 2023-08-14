import { createStore } from "redux";

export const configureStore = () => {
  const store = createStore(() => {
    return {
      message: "Hello World",
      data1: "just1",
      data2: "just1",
    };
  });

  return store;
};
