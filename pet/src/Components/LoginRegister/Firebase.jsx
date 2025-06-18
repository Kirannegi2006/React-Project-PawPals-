

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD594F9cj2lBzfYF_02yTbljJIOfnFHEXY",
  authDomain: "caring-4d5d3.firebaseapp.com",
  projectId: "caring-4d5d3",
  storageBucket: "caring-4d5d3.appspot.com",
  messagingSenderId: "870925227770",
  appId: "1:870925227770:web:b7287dd0f8797920519b43",
   measurementId: "G-5Q548RDCRG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const provider = new GoogleAuthProvider();

export { auth, provider }; 
