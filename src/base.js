import firebase from "@firebase/app";
import '@firebase/storage';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyBaavMDxETnanqEsNhdeU1Uw1lWPvByxYI",
  authDomain: "dibujando-9b19b.firebaseapp.com",
  databaseURL: "https://dibujando-9b19b.firebaseio.com",
  projectId: "dibujando-9b19b",
  storageBucket: "dibujando-9b19b.appspot.com",
  messagingSenderId: "995704846160",
  appId: "1:995704846160:web:d6288a25f32e90bf145e55",
  measurementId: "G-RPQ8TZEC2N"
};
  
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

const storage = firebase.storage();
const firestore = firebase.firestore();
  
export { storage, firestore, analytics, firebase as default };