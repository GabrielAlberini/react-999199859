import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// colocar las credencias propias a cada uno
const firebaseConfig = {
  apiKey: "AIzaSyDwHR_Gcv9QCiHRtFP5mmDnRcPghtMrODQ",
  authDomain: "productos-utn.firebaseapp.com",
  projectId: "productos-utn",
  storageBucket: "productos-utn.firebasestorage.app",
  messagingSenderId: "692029493149",
  appId: "1:692029493149:web:ce135f7072d2997be46974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }