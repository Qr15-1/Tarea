import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuZxJEW0OcPW1-gx_ijTK0e1nr5YBN1Ak",
  authDomain: "tarea-1-81edb.firebaseapp.com",
  projectId: "tarea-1-81edb",
  storageBucket: "tarea-1-81edb.firebasestorage.app",
  messagingSenderId: "600258909963",
  appId: "1:600258909963:web:a869c0195ca85dcc89f40e",
  measurementId: "G-LLHWVL5E47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();