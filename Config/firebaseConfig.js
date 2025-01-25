import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0bcYUw4RIKcSUWb3kCai7i31O6UpuMeI",
  authDomain: "gestion-stock-c2f15.firebaseapp.com",
  projectId: "gestion-stock-c2f15",
  storageBucket: "gestion-stock-c2f15.firebasestorage.app",
  messagingSenderId: "380457595587",
  appId: "1:380457595587:web:22b98f5ac744e288e7e876",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Exporter Firestore
export const db = getFirestore(app);
