import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlHu5fUpf0YtMR-sVVGABWesvA2uSKV2k",
  authDomain: "medicare-4a30e.firebaseapp.com",
  projectId: "medicare-4a30e",
  storageBucket: "medicare-4a30e.appspot.com",
  messagingSenderId: "679369863149",
  appId: "1:679369863149:web:e77cf8887b9f59fc81c1e4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const authentication = app.auth();
const firestore = app.firestore();
const storage = app.storage();

firestore.settings({ timestampsInSnapshots: true, merge: true });

export { authentication, firestore, storage }