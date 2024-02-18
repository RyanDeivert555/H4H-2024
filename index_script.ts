import { app } from "./config.ts"
import { getAuth } from "firebase/auth"

const auth = getAuth(app);

auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log(auth.currentUser!.uid);
    } else {
        // No user is signed in.
    }
});
