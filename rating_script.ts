import { collection, addDoc,getFirestore  } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app, getParameterByName } from "./config.ts";

const db = getFirestore(app);
const auth = getAuth(app);
const fountainName = getParameterByName();

auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("user logged in!");
    } else {
        window.location.href = "/login";
    }
});

type Data = {
    taste: number,
    location: number,
    accessibility: number,
    health: number,
    pressure: number,
    fountainId: string,
    comments: string,
    user: string,
};

function getInnerText(id: string): string {
    const result = <HTMLInputElement>document.getElementById(id);

    return result.value;
}

function getUserData(): Data {
    const taste = getInnerText("taste");
    const location = getInnerText("location");
    const accessibility = getInnerText("accessibility");
    const health = getInnerText("health");
    const pressure = getInnerText("pressure");
    const comments = getInnerText("comments");

    return {
        taste: Number(taste),
        location: Number(location),
        accessibility: Number(accessibility),
        health: Number(health),
        pressure: Number(pressure),
        fountainId: fountainName,
        comments: comments,
        user: auth.currentUser!.uid,
    };
}

async function sendData(): Promise<void> {
    const userData = getUserData();
    const reviews = collection(db, "reviews");
    await addDoc(reviews, userData);

    alert("Form was submitted!");
    window.location.href = "/review?fountain="+fountainName;
}

document.getElementById("submit")?.addEventListener("click", sendData);
