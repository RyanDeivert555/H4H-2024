import Chart from 'chart.js/auto';
import { getFirestore, getDoc, doc, getDocs, collection, addDoc, setDoc, deleteDoc, DocumentData } from "firebase/firestore";
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

const app = initializeApp(firebaseConfig)

const reference = doc(getFirestore(), "reviews", "y8Zn7NjRwZyj0fvFQhkv");
const docSnap = await getDoc(reference);
const taste = docSnap.get("taste");
const location = docSnap.get("location");
const accessibility = docSnap.get("accessibility");
const health = docSnap.get("health");
const pressure = docSnap.get("pressure");

const ctx = <HTMLCanvasElement>document.getElementById('myChart');

const chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Taste', 'Location', 'Accesibility', 'Cleanliness', 'Water Pressure'],
      datasets: [{
        label: 'Drinking Fountain Rating',
        //data: [1.0, 3.5, 2.7, 4.2, 5],
        data: [taste, location, accessibility, health, pressure],
        borderWidth: 1,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
        //size: {width: '80%', height: '90%'}
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
            maxTicksLimit:6,
          } 
        }
      }
    }
  });

