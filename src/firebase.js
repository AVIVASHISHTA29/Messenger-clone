import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHfO3fvQ0eUNpLvWugTUkiP6SYHlOPrcI",
    authDomain: "facebook-messenger-clone-d221e.firebaseapp.com",
    projectId: "facebook-messenger-clone-d221e",
    storageBucket: "facebook-messenger-clone-d221e.appspot.com",
    messagingSenderId: "82188356339",
    appId: "1:82188356339:web:dd908b49fb273b36ab4586",
    measurementId: "G-760HY0SLZQ"
  });

  const db = firebaseApp.firestore();

  export default db;