// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARzD-hKgF0a0ZjNsRLfx9oxUYp_VKqP1c",
    authDomain: "ofrendavirtualutfv.firebaseapp.com",
    projectId: "ofrendavirtualutfv",
    storageBucket: "ofrendavirtualutfv.appspot.com",
    messagingSenderId: "536071219553",
    appId: "1:536071219553:web:c93e664a28819acf067d20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };