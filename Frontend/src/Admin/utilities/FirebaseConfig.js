import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxO0Z492NwoTk5uZTovHEcUCCiH_YCQ-E",
  authDomain: "bakery-mern.firebaseapp.com",
  projectId: "bakery-mern",
  storageBucket: "bakery-mern.appspot.com",
  messagingSenderId: "449047113597",
  appId: "1:449047113597:web:8875129efa0b3fed77e614"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)