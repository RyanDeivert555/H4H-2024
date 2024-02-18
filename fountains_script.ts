import { app } from "./config.ts"
import { getAuth } from "firebase/auth"
const grahamf2 = document.getElementById("grahamf2");
const graham2D = document.getElementById("graham2D");
const sodaLP = document.getElementById("sodaLP");
const sodaTS = document.getElementById("sodaTS");
const scdi3N = document.getElementById("scdi3N");
const finnk3 = document.getElementById("finnk3");
const finnk2 = document.getElementById("finnk2");

grahamf2?.addEventListener("click", navGrahamf2);
graham2D?.addEventListener("click", navGraham2D);
sodaLP?.addEventListener("click", navSodaLP);
sodaTS?.addEventListener("click", navSodaTS);
scdi3N?.addEventListener("click", navScdi3N);
finnk3?.addEventListener("click", navFinnk3);
finnk2?.addEventListener("click", navFinnk2);

function navGrahamf2() {
    window.location.href = "/review?fountain=grahamf2";
}
function navGraham2D() {
    window.location.href = "/review?fountain=graham2D";
}
function navSodaLP() {
    window.location.href = "/review?fountain=sodaLP";
}
function navSodaTS() {
    window.location.href = "/review?fountain=sodaTS";
}
function navScdi3N() {
    window.location.href = "/review?fountain=scdi3N";
}
function navFinnk3() {
    window.location.href = "/review?fountain=finnk3";
}
function navFinnk2() {
    window.location.href = "/review?fountain=finnk2";
}

const auth = getAuth(app);

auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("userfield")!.innerText = user.displayName!;
    } else {
        document.getElementById("userfield")!.innerText = "Signed Out";
    }
});
