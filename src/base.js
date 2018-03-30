import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlHtmWOKy8qfXS2XJ8Sk-bf-llkiQ_0Uc",
    authDomain: "catch-of-the-day-b8505.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-b8505.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
