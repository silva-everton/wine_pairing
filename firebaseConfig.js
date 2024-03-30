// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getReactNativePersistence,initializeAuth} from 'firebase/auth';    // Firebase Auth   
//Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage
import { getFirestore, collection } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZj8E6yReWK5e_gabU9xkqya1P5pYVDBE",
  authDomain: "fir-auth-dea27.firebaseapp.com",
  projectId: "fir-auth-dea27",
  storageBucket: "fir-auth-dea27.appspot.com",
  messagingSenderId: "853013117844",
  appId: "1:853013117844:web:f0bfb71d9a1b9c78e02d81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)

}); 

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');

