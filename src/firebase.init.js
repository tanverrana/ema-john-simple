// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdpUlzD_hjJxEQM99KU-jIAOyxkG6PZ28",
    authDomain: "ema-john-simple-99ea1.firebaseapp.com",
    projectId: "ema-john-simple-99ea1",
    storageBucket: "ema-john-simple-99ea1.appspot.com",
    messagingSenderId: "943755313968",
    appId: "1:943755313968:web:9c554bff151f78251fbef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;