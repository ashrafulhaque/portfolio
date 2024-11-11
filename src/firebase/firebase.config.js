import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBSN8K7jE0ILvQpApXsYJ1q26zMAPH6jo",
  authDomain: "ahd-portfolio.firebaseapp.com",
  projectId: "ahd-portfolio",
  storageBucket: "ahd-portfolio.firebasestorage.app",
  messagingSenderId: "350600980226",
  appId: "1:350600980226:web:1010ba2c9a08cd069e841b",
};

const app = initializeApp(firebaseConfig);
export default app;
