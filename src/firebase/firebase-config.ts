// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
    API_KEY_FIREBASE,
    APP_ID_FIREBASE,
    MEASUREMENT_ID_FIREBASE,
    MESSAGINGSENDER_ID_FIREBASE,
    PROJECT_ID_FIREBASE,
} from "../config";

const firebaseConfig = {
    apiKey: API_KEY_FIREBASE,
    authDomain: "movie-app-af5c7.firebaseapp.com",
    projectId: PROJECT_ID_FIREBASE,
    storageBucket: "movie-app-af5c7.appspot.com",
    messagingSenderId: MESSAGINGSENDER_ID_FIREBASE,
    appId: APP_ID_FIREBASE,
    measurementId: MEASUREMENT_ID_FIREBASE,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
