// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: String(process.env.REACT_APP_API_KEY),
    authDomain: String(process.env.REACT_AUTH_DOMAIN),
    projectId: String(process.env.REACT_PROJECT_ID),
    storageBucket: String(process.env.REACT_STORAGE_BUCKET),
    messagingSenderId: String(process.env.REACT_MESSAGING_SENDER),
    appId: String(process.env.REACT_APP_ID),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()