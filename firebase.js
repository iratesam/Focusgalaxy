// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Add this for authentication
import { getFirestore } from 'firebase/firestore'; // Add this for Firestore
import { getAnalytics } from 'firebase/analytics'; // Keep this if you want analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "prodective-planner-xyz.firebaseapp.com",
  projectId: "prodective-planner-xyz",
  ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Keep this if you’re using analytics
export const auth = getAuth(app); // Export auth for authentication
export const db = getFirestore(app); // Export db for Firestore
