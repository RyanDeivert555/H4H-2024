import { app } from "./config.ts"
import { getAuth } from "firebase/auth"

const auth = getAuth(app);

auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("userfield")!.innerText = user.displayName!;
    } else {
        document.getElementById("userfield")!.innerText = "Signed Out";
    }
});
