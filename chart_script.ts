import Chart from "chart.js/auto";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getParameterByName } from "./config";

const fountainId = getParameterByName();

console.log(fountainId);

document.getElementById("reviewnavigate")?.addEventListener("click", navigateToRating);

function navigateToRating() {
    window.location.href = "/rating?fountain=" + fountainId;
}



// const reference = doc(getFirestore(), "fountains", fountainId!);
// const docSnap = await getDoc(reference);
// const taste = docSnap.get("taste");
// const location = docSnap.get("location");
// const accessibility = docSnap.get("accessibility");
// const health = docSnap.get("health");
// const pressure = docSnap.get("pressure");

const ctx = <HTMLCanvasElement>document.getElementById("chart");

new Chart(ctx, {
    type: "radar",
    data: {
        labels: ["Taste", "Location", "Accesibility", "Cleanliness", "Water Pressure"],
        datasets: [{
            label: "Drinking Fountain Rating",
            //data: [1.0, 3.5, 2.7, 4.2, 5],
            data: [taste, location, accessibility, health, pressure],
            borderWidth: 1,
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)"
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