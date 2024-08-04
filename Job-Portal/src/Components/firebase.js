// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4DX0AJoeKB8dqc25YDesUPUing_OwPu4",
  authDomain: "job-portal-website-fe05f.firebaseapp.com",
  projectId: "job-portal-website-fe05f",
  storageBucket: "job-portal-website-fe05f.appspot.com",
  messagingSenderId: "152240489486",
  appId: "1:152240489486:web:12108b29499005774d685f",
  measurementId: "G-CV5J9QMZWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;