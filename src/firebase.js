

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    // appId: process.env.REACT_APP_APP_ID


    apiKey: "AIzaSyDthjlasJ-z24idCRC42JH1wnzv-4Rohos",
    authDomain: "netflix-react-ccdfd.firebaseapp.com",
    projectId: "netflix-react-ccdfd",
    storageBucket: "netflix-react-ccdfd.appspot.com",
    messagingSenderId: "503325316547",
    appId: "1:503325316547:web:899d4bf26200cb51e21976"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


