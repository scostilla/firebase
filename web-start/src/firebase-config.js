/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVua-cKYEQ3d6rPVfXhCxWU9ap38eumV8",
  authDomain: "friendlychat-96867.firebaseapp.com",
  projectId: "friendlychat-96867",
  storageBucket: "friendlychat-96867.appspot.com",
  messagingSenderId: "402592492384",
  appId: "1:402592492384:web:c81028eafe3e3f0402cc05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const config = {
  apiKey: "AIzaSyBVua-cKYEQ3d6rPVfXhCxWU9ap38eumV8",
  authDomain: "friendlychat-96867.firebaseapp.com",
  projectId: "friendlychat-96867",
  storageBucket: "friendlychat-96867.appspot.com",
  messagingSenderId: "402592492384",
  appId: "1:402592492384:web:c81028eafe3e3f0402cc05"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}