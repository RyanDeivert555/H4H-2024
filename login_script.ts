import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { app } from "./config.ts"

const googleSignInButton = document.getElementById("google-signin");
const signOutButton = document.getElementById("signout");

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

googleSignInButton?.addEventListener("click", signInWithGoogle);
signOutButton?.addEventListener("click", signOutPress);

function signInWithGoogle() {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        document.getElementById("user-data")!.innerText = user.uid;
    })
}

function signOutPress() {
    auth.signOut();
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        // ...
    } else {
        // User is signed out
        // ...
        console.log("Signed Out");
    }
});