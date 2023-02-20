import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV3KkoKNOMyrLiLXWlE55Zx-WZ_RwJ7sI",
    authDomain: "socialmediaapp-8a3d6.firebaseapp.com",
    projectId: "socialmediaapp-8a3d6",
    storageBucket: "socialmediaapp-8a3d6.appspot.com",
    messagingSenderId: "412289152759",
    appId: "1:412289152759:web:829b798512a2a034ab45f2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;