import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCelqmReB7_w2pmEijlvmU6R-6L0zoQgr0",
  authDomain: "blog-bf777.firebaseapp.com",
  projectId: "blog-bf777",
  storageBucket: "blog-bf777.appspot.com",
  messagingSenderId: "557974602173",
  appId: "1:557974602173:web:94b0c1168ecab6f82612d4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();
const db = getFirestore(app);
provider.addScope("repo");

export { auth, provider, db };