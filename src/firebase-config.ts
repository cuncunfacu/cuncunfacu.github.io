// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    connectFirestoreEmulator
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig2 = {
    apiKey: "AIzaSyC87Nmkl8V7dYyMOSrq7Zeq8Sp2ludUZso",
    authDomain: "portfolio22-38a55.firebaseapp.com",
    projectId: "portfolio22-38a55",
    storageBucket: "portfolio22-38a55.appspot.com",
    messagingSenderId: "1094762024485",
    appId: "1:1094762024485:web:0b39ef8d6e5de93d4139cc"
};
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if(process.env.REACT_APP_FIREBASE_ENV === 'local') {
    connectFirestoreEmulator(db, "localhost", 8080);
    console.log('Connected to Firestore Emulator');
}
export {db as db};