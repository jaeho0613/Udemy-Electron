import db from "../db/firestore";
import firebase from "firebase/app";
import "firebase/auth";

export const createUserProfile = (userProfile) =>
  db.collection("profiles").doc(userProfile.uid).set(userProfile);

export const getUserProfile = (uid) =>
  db
    .collection("profiles")
    .doc(uid)
    .get()
    .then((snapshot) => snapshot.data());

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

export const login = ({ email, password }) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const logout = () => firebase.auth().signOut();

export const onAuthStateChanges = (onAuth) =>
  firebase.auth().onAuthStateChanged(onAuth);
