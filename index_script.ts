import { app } from "./config.ts"
import { getAuth } from "firebase/auth"

const auth = getAuth(app);

auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("userid")!.innerText = user.uid;
    } else {
        document.getElementById("userid")!.innerText = "Signed Out";
    }
});
