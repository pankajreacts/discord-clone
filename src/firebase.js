import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpEYzSep3bVwM-Iq1T1cIT7IdAHozwKhM",
  authDomain: "discord-clone-15550.firebaseapp.com",
  projectId: "discord-clone-15550",
  storageBucket: "discord-clone-15550.appspot.com",
  messagingSenderId: "940044846126",
  appId: "1:940044846126:web:c88969b279bb37c6f3cbbf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
