import  firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCIzroecmz5VIB6n9XAMifuM070n_jkkI0",
  authDomain: "main--clone.firebaseapp.com",
  projectId: "main--clone",
  storageBucket: "main--clone.appspot.com",
  messagingSenderId: "483265911010",
  appId: "1:483265911010:web:9f942c4b68a3fa6e32e6bb",
  measurementId: "G-82XPZ3LK88",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp)
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
