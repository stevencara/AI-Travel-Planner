// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTwWpDdKYPla2Su0TXoy5jt7_bDMlJgd8",
  authDomain: "ai-planner-trip.firebaseapp.com",
  projectId: "ai-planner-trip",
  storageBucket: "ai-planner-trip.firebasestorage.app",
  messagingSenderId: "514964103282",
  appId: "1:514964103282:web:2007846565fe5f1116a2eb",
  measurementId: "G-X3EL4G80SM"   
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);