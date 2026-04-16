import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApv5eJ83rOXXQ8zwQ6ZVmf-NX1Ba7g60s",
  authDomain: "ecoa-o-projeto.firebaseapp.com",
  projectId: "ecoa-o-projeto",
  storageBucket: "ecoa-o-projeto.firebasestorage.app",
  messagingSenderId: "892505052950",
  appId: "1:892505052950:web:d33e4c6b93ced45269e237"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
