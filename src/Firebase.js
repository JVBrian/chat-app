import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCfZZTkxZLsYBMT7h8-sPd-p7gF9rZzx1o",
  authDomain: "chat-react-and-firebase-1e1a3.firebaseapp.com",
  databaseURL:
    "https://chat-react-and-firebase-1e1a3-default-rtdb.firebaseio.com",
  projectId: "chat-react-and-firebase-1e1a3",
  storageBucket: "chat-react-and-firebase-1e1a3.appspot.com",
  messagingSenderId: "911506916733",
  appId: "1:911506916733:web:f822e37cc244d226a1b814",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
