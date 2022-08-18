// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM7sFedF61VU21ucf24b3VyLyCCzLPMlc",
  authDomain: "webbox-21d7f.firebaseapp.com",
  projectId: "webbox-21d7f",
  storageBucket: "webbox-21d7f.appspot.com",
  messagingSenderId: "660684560856",
  appId: "1:660684560856:web:88c815280230d505d2baad",
  measurementId: "G-0DQLHE1HZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);