import db from "../db/firestore";
import firebase from "firebase/app";
import "firebase/auth";

export const createUserProfile = (userProfile) =>
  db.collection("profiles").doc(userProfile.uid).set(userProfile);

export const register = async ({ email, password, username, avatar }) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await createUserProfile({
      uid: user.uid,
      username,
      email,
      avatar,
      joinedChats: [],
    });

    return user;
  } catch (e) {
    return Promise.reject(e.message);
  }
};
