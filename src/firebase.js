import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCs_mU8O7wh_mZg6BnmaAqlqoD_4X4NKgU",
    authDomain: "college-os-17afc.firebaseapp.com",
    projectId: "college-os-17afc",
    storageBucket: "college-os-17afc.firebasestorage.app",
    messagingSenderId: "496660076155",
    appId: "1:496660076155:web:a008d97e67c1e0c4efb4de",
    measurementId: "G-7WPM1P8EZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Initialize Firestore
const provider = new GoogleAuthProvider();

export { auth, provider, db };
