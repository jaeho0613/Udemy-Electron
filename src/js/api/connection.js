import firebase from "firebase/app";
import "firebase/database";
import db from "../db/firestore";

const getOnlineStatus = (isOnline) => ({
  state: isOnline ? "online" : "offline",
  lastChanged: firebase.firestore.FieldValue.serverTimestamp(),
});
export const setUserOnlineStatus = (uid, isOnline) => {
  const useRef = db.doc(`/profiles/${uid}`);
  const updateData = getOnlineStatus(isOnline);
  return useRef.update(updateData);
};

export const onConnectionChanged = (onConnection) =>
  firebase
    .database()
    .ref(".info/connected")
    .on("value", (snapshot) => onConnection(snapshot?.val() ?? false));
