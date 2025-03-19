// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEQkvfGijL1Ly2EM9sXe7bjDceS-TPVY4",
//   authDomain: "takusani-30590.firebaseapp.com",
//   projectId: "takusani-30590",
//   storageBucket: "takusani-30590.firebasestorage.app",
//   messagingSenderId: "164879958346",
//   appId: "1:164879958346:web:f44d763f5791318f9441b3",
//   measurementId: "G-EHVW22GS6G"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// src/firebase.js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEQkvfGijL1Ly2EM9sXe7bjDceS-TPVY4",
  authDomain: "takusani-30590.firebaseapp.com",
  projectId: "takusani-30590",
  storageBucket: "takusani-30590.firebasestorage.app",
  messagingSenderId: "164879958346",
  appId: "1:164879958346:web:f44d763f5791318f9441b3",
  measurementId: "G-EHVW22GS6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
