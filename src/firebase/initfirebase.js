import firebaseConfig from "./config"
import { initializeApp } from "firebase/app";

function giveFirebaseApp() {
  return initializeApp(firebaseConfig);
}


const app = giveFirebaseApp();

export default giveFirebaseApp;
