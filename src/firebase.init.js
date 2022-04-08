// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0bEP56Kx4WDFQDbQcl1P2WaqzQIc-bDo",
    authDomain: "first-firebase-project-17be8.firebaseapp.com",
    projectId: "first-firebase-project-17be8",
    storageBucket: "first-firebase-project-17be8.appspot.com",
    messagingSenderId: "50792003355",
    appId: "1:50792003355:web:2125355a1dc9780ae685be",
    measurementId: "G-DNPZV0DFTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;