import { getFirestore } from "firebase/firestore";
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
export default db;
