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
        document.getElementById("user-data")!.innerText = user.displayName!;
    })
}

function signOutPress() {
    auth.signOut();
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("user-data")!.innerText = user.displayName!;
    } else {
        document.getElementById("user-data")!.innerText = "Signed Out";
    }
});