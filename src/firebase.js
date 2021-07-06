// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3qoHqw3JdCSnnaSAbVYVzuT1GAvZ7axU",
    authDomain: "twitter-clone-e7db2.firebaseapp.com",
    projectId: "twitter-clone-e7db2",
    storageBucket: "twitter-clone-e7db2.appspot.com",
    messagingSenderId: "469139362397",
    appId: "1:469139362397:web:c178e09179e66d26ef73b4",
    measurementId: "G-ESFLFN2DZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;