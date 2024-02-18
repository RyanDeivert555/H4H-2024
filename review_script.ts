import Chart from "chart.js/auto";
import { getFirestore, getDoc, doc, collection, getDocs, setDoc, } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { app, getParameterByName } from "./config";

const fountainId = getParameterByName();
const db = getFirestore(app);

console.log("Fountain ID:");
console.log(fountainId);

const docRef = doc(db, "fountains", fountainId);
const docSnap = await getDoc(docRef);
document.getElementById("titlefield")!.innerText = docSnap.get("name");


document.getElementById("reviewnavigate")?.addEventListener("click", navigateToRating);

function navigateToRating() {
    window.location.href = "/rating?fountain=" + fountainId;
}

var tasteArr: number[] = [];
var locationArr: number[] = [];
var accessibilityArr: number[] = [];
var healthArr: number[] = [];
var pressureArr: number[] = [];

const querySnapshotReviews = await getDocs(collection(db, "reviews"));

querySnapshotReviews.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const currFountain = doc.get("fountainId");
    if (currFountain == fountainId) {
        tasteArr.push(doc.get("taste"));
        locationArr.push(doc.get("taste"));
        accessibilityArr.push(doc.get("accessibility"));
        healthArr.push(doc.get("health"));
        pressureArr.push(doc.get("pressure"));
    }
});

type Data = {
    taste: number,
    location: number,
    accessibility: number,
    health: number,
    pressure: number,
};


const userdata: Data = {
    taste: average(tasteArr),
    location: average(locationArr),
    accessibility: average(accessibilityArr),
    health: average(healthArr),
    pressure: average(pressureArr),
}

const fountain = doc(db, "fountains", fountainId);
await setDoc(fountain, userdata, { merge: true });



const ctx = <HTMLCanvasElement>document.getElementById("myChart");
function average(array): number {
    if (array.length == 0) {
        return 0;
    }
    else {
        return array.reduce((a, b) => a + b) / array.length;
    }
}

new Chart(ctx, {
    type: "radar",
    data: {
        labels: ["Taste", "Location", "Accessibility", "Cleanliness", "Water Pressure"],
        datasets: [{
            label: "Drinking Fountain Rating",
            //data: [1.0, 3.5, 2.7, 4.2, 5],
            data: [average(tasteArr), average(locationArr), average(accessibilityArr), average(healthArr), average(pressureArr)],
            borderWidth: 1,
            fill: true,
            backgroundColor: "rgba(47, 127, 241, 0.2)",
            borderColor: "rgb(47, 127, 241)"
            //size: {width: "80%", height: "90%"}
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    maxTicksLimit: 6,
                }
            }
        }
    }
});


const auth = getAuth(app);

auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("userfield")!.innerText = user.displayName!;
    } else {
        document.getElementById("userfield")!.innerText = "Signed Out";
    }
});