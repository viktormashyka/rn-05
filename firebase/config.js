// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6BGGoP7Wt2FqGdI2kfEFRhpt6sm8Jlqw",
  authDomain: "rn-social-c8ef4.firebaseapp.com",
  projectId: "rn-social-c8ef4",
  storageBucket: "rn-social-c8ef4.appspot.com",
  messagingSenderId: "946258985419",
  appId: "1:946258985419:web:d1f7c0e0c7ef289723b64e",
  measurementId: "G-T9M6S6500Y",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export
export default firebase.initializeApp(firebaseConfig);

// example from compendium

// import * as firebase from "firebase";
// import "firebase/auth";

// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDFauNPYaTGMGWKEvyHdTh8m_kfhKDiQuU",
//   authDomain: "rn-social-391ec.firebaseapp.com",
//   databaseURL: "https://rn-social-391ec.firebaseio.com",
//   projectId: "rn-social-391ec",
//   storageBucket: "rn-social-391ec.appspot.com",
//   messagingSenderId: "974670373504",
//   appId: "1:974670373504:web:fe01e1286f5ad11ff0fc65",
// };
// // Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);
