import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5qaozJWSNLErqmfSKDDCFFdxDqlmRa24",
  authDomain: "waffle-teamb.firebaseapp.com",
  projectId: "waffle-teamb",
  storageBucket: "waffle-teamb.appspot.com",
  messagingSenderId: "718709761680",
  appId: "1:718709761680:web:20675c6d3ce57c2fecda15"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();
const db = getFirestore(app);
provider.addScope("repo");

export { auth, provider, db };