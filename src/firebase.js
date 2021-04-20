import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXDjDEtQl2nsvSwebPUFpfsq1zYnLN-X8",
  authDomain: "discord-clone-6f593.firebaseapp.com",
  projectId: "discord-clone-6f593",
  storageBucket: "discord-clone-6f593.appspot.com",
  messagingSenderId: "553370130361",
  appId: "1:553370130361:web:ba1f255b89d7117b358868",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
