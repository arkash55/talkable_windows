
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA0vDkwuLDW1j4fXVltAmHZPY6-M3gPx8k",
  authDomain: "talka-c5df4.firebaseapp.com",
  projectId: "talka-c5df4",
  storageBucket: "talka-c5df4.firebasestorage.app",
  messagingSenderId: "750480431215",
  appId: "1:750480431215:web:b2cd4d2e7c130bf931d59a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);