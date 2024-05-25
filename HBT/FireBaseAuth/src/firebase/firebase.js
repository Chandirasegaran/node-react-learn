import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1eMj6OVo2OKWXNKKpLL7tED0fI7XFnfU",
  authDomain: "hbt-test-db623.firebaseapp.com",
  projectId: "hbt-test-db623",
  storageBucket: "hbt-test-db623.appspot.com",
  messagingSenderId: "699171830367",
  appId: "1:699171830367:web:b5d47efdc42b70a91939ea",
  measurementId: "G-LNXPCNJ70M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
