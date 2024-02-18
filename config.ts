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

export const app = initializeApp(firebaseConfig);

export function getParameterByName(name: string, url: string | null): string | null {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, '\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/+/g, ' '));
}
