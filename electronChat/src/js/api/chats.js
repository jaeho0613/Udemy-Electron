import db from '../db/firestore';
import firebase from 'firebase/app';

const extractSnapshotData = snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

export const fetchChats = () => db.collection('chats').get().then(extractSnapshotData);

export const createChat = chat =>
  db
    .collection('chats')
    .add(chat)
    .then(docRef => docRef.id);

export const joinChat = async (userId, chatId) => {
  const userRef = db.doc(`profiles/${userId}`);
  const chatRef = db.doc(`chats/${chatId}`);

  await userRef.update({
    joinedChats: firebase.firestore.FieldValue.arrayUnion(chatRef),
  });

  await chatRef.update({
    joinedUsers: firebase.firestore.FieldValue.arrayUnion(userRef),
  });
};

export const subscribeToChat = (chatId, onSubscribe) => {
  db.collection('chats')
    .doc(chatId)
    .onSnapshot(snapshot => {
      const chat = { id: snapshot.id, ...snapshot.data() };
      onSubscribe(chat);
    });
};
