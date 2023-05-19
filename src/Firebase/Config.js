import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
//import "firebase/auth";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA-kec0axpr-QtC5fRFhrVCUbneS69PEWY",
    authDomain: "react-native-firebase-ap-873f1.firebaseapp.com",
    projectId: "react-native-firebase-ap-873f1",
    storageBucket: "react-native-firebase-ap-873f1.appspot.com",
    messagingSenderId: "872207824793",
    appId: "1:872207824793:web:c6fddb7b08e800b69b0508"
  };

 firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

 export default firebase;
  export const auth = getAuth(app);