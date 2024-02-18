import Chart from "chart.js/auto";
import { getFirestore, getDoc, doc, collection, getDocs} from "firebase/firestore";
import { app,getParameterByName } from "./config";

const fountainId = getParameterByName();
const db = getFirestore(app);

console.log("Fountain ID:");
console.log(fountainId);

const docRef = doc(db, "fountains",fountainId);
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
  if(currFountain==fountainId){
    tasteArr.push(doc.get("taste"));
    locationArr.push(doc.get("taste"));
    accessibilityArr.push(doc.get("accessibility"));
    healthArr.push(doc.get("health"));
    pressureArr.push(doc.get("pressure"));
  }
});



const ctx = <HTMLCanvasElement>document.getElementById("myChart");
function average(array) : number {
    if(array.length==0){
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