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

type Data = {
    taste: number,
    location: number,
    accessibility: number,
    health: number,
    tempurature: number,
    fountainId: string,
    comments: string,
    user: string,
};

function getInnerText(id: string): string {
    const result = <HTMLInputElement> document.getElementById(id);

    return result.value;
}

function getUserData(): Data {
    const taste = getInnerText("taste");
    const location = getInnerText("location");
    const accessibility = getInnerText("accessibility");
    const health = getInnerText("health");
    const temperature = getInnerText("temperature");
    const source = getInnerText("source");
    const comments = getInnerText("comments");

    return {
        taste: Number(taste),
        location: Number(location),
        accessibility: Number(accessibility),
        health: Number(health),
        tempurature: Number(temperature),
        fountainId: source,
        comments: comments,
        user: "test user",
    };
}

async function sendData(): Promise<void> {
    console.table(getUserData());
}   

document.getElementById("submit")?.addEventListener("click", sendData);
