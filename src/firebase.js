import firebase from "firebase/compat/app";
import database from 'firebase/compat/database'

const settings = {timestampsInSnapshots: true};

const config  = {
  apiKey: "AIzaSyBk2-uLaRbisARgFguKKIDGUm5426qnOWE5JmZg",
  authDomain: "react-1c77bHuuh.firebaseapp.com",
  databaseURL: "https://react-1c77bHuuH-default-rtdb.firebaseio.com",
  projectId: "react-1c77bHuuh",
  storageBucket: "react-1c77bnaon.appspot.com",
  messagingSenderId: "920955117187555",
  appId: "1:920955117187:web:11cea16495fb8fe75745b6777",
  measurementId: "G-P8XD7Q9B0RAA"
};

firebase.initializeApp(config);

export default firebase;

