// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJFBdSiARm7PATmFMgLrMtrIGlt-NIr0E",
  authDomain: "netflix-clone-99fa3.firebaseapp.com",
  projectId: "netflix-clone-99fa3",
  storageBucket: "netflix-clone-99fa3.appspot.com",
  messagingSenderId: "73230338564",
  appId: "1:73230338564:web:69b24bf43c1a73cd4dc351",
  measurementId: "G-WKLVXBL3D3",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//firestore is the real time database
const auth = firebase.auth();

export { auth };
export default db;