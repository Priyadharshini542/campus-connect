// Firebase SDK imports
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration (already provided in your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyBOwR4Sa2ycvqRuB0MoEmKXpYe_DAb466U",
  authDomain: "campusconnect-a20a9.firebaseapp.com",
  projectId: "campusconnect-a20a9",
  storageBucket: "campusconnect-a20a9.firebasestorage.app",
  messagingSenderId: "1021370512234",
  appId: "1:1021370512234:web:4a91bd65e480770cc9eb13"
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized
}
