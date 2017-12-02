var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyAYpF022ZdJdaparUNIiYscYJQExmlDcKo",
    authDomain: "hello-world-8a89f.firebaseapp.com",
    databaseURL: "https://hello-world-8a89f.firebaseio.com",
    projectId: "hello-world-8a89f",
    storageBucket: "hello-world-8a89f.appspot.com",
    messagingSenderId: "735912752935"
};
firebase.initializeApp(config);
console.log("hello world");


