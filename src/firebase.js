// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCajtteMpONMgkCJ2dRleT5lg4asTPwZ8s",
    authDomain: "fun-food-friends-6d655.firebaseapp.com",
    databaseURL: "https://fun-food-friends-6d655.firebaseio.com",
    projectId: "fun-food-friends-6d655",
    storageBucket: "fun-food-friends-6d655.appspot.com",
    messagingSenderId: "485921943800"
};
firebase.initializeApp(config);
export default firebase;