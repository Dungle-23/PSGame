import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBCmb3cOtchrblbQXBKcSAeLS_-B1384Oo",
    authDomain: "pepsigame-91417.firebaseapp.com",
    databaseURL: "https://pepsigame-91417-default-rtdb.firebaseio.com",
    projectId: "pepsigame-91417",
    storageBucket: "pepsigame-91417.appspot.com",
    messagingSenderId: "442685734868",
    appId: "1:442685734868:web:00fac4fc4818807add6041",
    measurementId: "G-4FC0LS31B7"
  };

  export const app = initializeApp(firebaseConfig);