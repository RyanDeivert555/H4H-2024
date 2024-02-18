import { doc,getFirestore, setDoc  } from "firebase/firestore";
import { app } from "./config.ts";

const db = getFirestore(app)

type Data = {
    taste: number,
    location: number,
    accessibility: number,
    health: number,
    pressure: number,
    name: string,
};

const namesArr : string[] = ["Graham, 2nd Floor","Graham, 2D Kitchen Refrigerator","La Parilla, Soda Machine","The Slice, Soda Machine","SCDI, 3rd Floor North Wing","Finn, 3rd Floor Kitchen Refrigerator","Finn, 2nd Floor Kitchen Refrigerator"];
const keyArr : string[] = ["grahamf2","graham2D","sodaLP","sodaTS","scdi3N","finnk3","finnk2"];

for (let i = 0; i < namesArr.length; i++) {
    const userdata: Data = {
        taste: 1,
        location: 1,
        accessibility: 1,
        health: 1,
        pressure: 1,
        name: namesArr[i],
    }
    
    const fountains = doc(db, "fountains",keyArr[i]);
    await setDoc(fountains, userdata);
}

