import firebase from "firebase/app";
import "firebase/auth";

export const register = async ({ email, password }) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return user;
  } catch (e) {
    return Promise.reject(e.message);
  }
};
