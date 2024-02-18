import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { getFirestore, getDoc, doc, getDocs, collection, addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBZ-Mqa6xxDKLxK3vxHEfdjPaaAzXMoLDs",
    authDomain: "test-project-df70f.firebaseapp.com",
    projectId: "test-project-df70f",
    storageBucket: "test-project-df70f.appspot.com",
    messagingSenderId: "124174617130",
    appId: "1:124174617130:web:c14a4ad8ce25ce6e7a9153",
    measurementId: "G-R5CJCVW322"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const googleSignInButton = document.getElementById("google-signin");
const readDataButton = document.getElementById("read-data-button");

const auth = getAuth();

const provider = new GoogleAuthProvider();

googleSignInButton?.addEventListener("click", signInWithGoogle);

function signInWithGoogle() {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        document.getElementById("user-data")!.innerText = user.uid;
    })
}