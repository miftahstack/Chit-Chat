import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMKp8IHHWAPO0exBd7KGJOzS3CHY-b1mU",
  authDomain: "chitchat-893f1.firebaseapp.com",
  projectId: "chitchat-893f1",
  storageBucket: "chitchat-893f1.firebasestorage.app",
  messagingSenderId: "542791872603",
  appId: "1:542791872603:web:92b68d328eb78648a34f7e",
  measurementId: "G-V9RKJY0HRV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;