import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: KEY_API,
  authDomain: "cartaovisita-c3d4d.firebaseapp.com",
  projectId: "cartaovisita-c3d4d",
  storageBucket: "cartaovisita-c3d4d.appspot.com",
  messagingSenderId: MESSAGESENDER_ID,
  appId: APP_ID,
  measurementId: MEASURE_ID
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};
