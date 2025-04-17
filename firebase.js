// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Add this for authentication
import { getFirestore } from 'firebase/firestore'; // Add this for Firestore
import { getAnalytics } from 'firebase/analytics'; // Keep this if you want analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVPoJ1ryyJCk8MtAeFtX8GH9l564LaIM8",
  authDomain: "focusgalaxy-14fa0.firebaseapp.com",
  projectId: "focusgalaxy-14fa0",
  storageBucket: "focusgalaxy-14fa0.firebasestorage.app", // Fixed typo (was .app, should be .appspot.com)
  messagingSenderId: "983766366742",
  appId: "1:983766366742:web:ec8d0ea9755f85ab659337",
  measurementId: "G-DGFF6H2KBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Keep this if you’re using analytics
export const auth = getAuth(app); // Export auth for authentication
export const db = getFirestore(app); // Export db for Firestore