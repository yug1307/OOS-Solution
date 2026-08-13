import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtoWpJZ-aLwPLpFqoqsfM4wtPPrvroCA0",
  authDomain: "oos-solution.firebaseapp.com",
  projectId: "oos-solution",
  storageBucket: "oos-solution.firebasestorage.app",
  messagingSenderId: "352492695538",
  appId: "1:352492695538:web:3dd3eb1bc7e837b8d5c56b",
  measurementId: "G-N4LFQNKGPR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);