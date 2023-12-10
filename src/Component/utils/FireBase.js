// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpviwj7FuQSmxYEAq4FMHFFSYBPueULvQ",
  authDomain: "netflix-test-cc1ee.firebaseapp.com",
  projectId: "netflix-test-cc1ee",
  storageBucket: "netflix-test-cc1ee.appspot.com",
  messagingSenderId: "95724085252",
  appId: "1:95724085252:web:62cd29a0817eaf1929d551",
  measurementId: "G-FJDM17Q76N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();