import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAw9iYJzww_MHdd_B9JQ-dFvPAkzY815_k",
  authDomain: "cartaovisita-c3d4d.firebaseapp.com",
  projectId: "cartaovisita-c3d4d",
  storageBucket: "cartaovisita-c3d4d.appspot.com",
  messagingSenderId: "840991502387",
  appId: "1:840991502387:web:9766f0265d0cefdf26f346",
  measurementId: "G-7GKVRCNFWF"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};
