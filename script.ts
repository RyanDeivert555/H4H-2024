import { collection, addDoc } from "firebase/firestore";
import db from "./config.ts";

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
    const source = getInnerText("source");
    const comments = getInnerText("comments");

    return {
        taste: Number(taste),
        location: Number(location),
        accessibility: Number(accessibility),
        health: Number(health),
        pressure: Number(pressure),
        fountainId: source,
        comments: comments,
        user: "test user",
    };
}

async function sendData(): Promise<void> {
    const userData = getUserData();
    const reviews = collection(db, "reviews");
    await addDoc(reviews, userData);

    alert("Form was submitted!");
    window.location.reload();
}

document.getElementById("submit")?.addEventListener("click", sendData);
