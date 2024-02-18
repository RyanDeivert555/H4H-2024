import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import {app} from "./config.ts"

const googleSignInButton = document.getElementById("google-signin");
const readDataButton = document.getElementById("read-data-button");

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

googleSignInButton?.addEventListener("click", signInWithGoogle);

function signInWithGoogle() {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        document.getElementById("user-data")!.innerText = user.uid;
    })
}