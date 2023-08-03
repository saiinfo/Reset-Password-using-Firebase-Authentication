import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoLyrOghXQp9po4uR4U-WNojrGHhBvJCU",
  authDomain: "test-b8e54.firebaseapp.com",
  projectId: "test-b8e54",
  storageBucket: "test-b8e54.appspot.com",
  messagingSenderId: "30071907773",
  appId: "1:30071907773:web:c0ffc7b83f83f436e9ded4",
  measurementId: "G-PRZWJTB4YM"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
