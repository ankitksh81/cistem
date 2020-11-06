import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7IwWJ5HCpmrE2obgrBYR8jYDJ1XYYJH4",
  authDomain: "cistemreva.firebaseapp.com",
  databaseURL: "https://cistemreva.firebaseio.com",
  projectId: "cistemreva",
  storageBucket: "cistemreva.appspot.com",
  messagingSenderId: "234605689829",
  appId: "1:234605689829:web:d1acf2d05975af86e78d0c"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, firebase };