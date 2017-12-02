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


// Get a single item
var database = firebase.database();
// database.ref('/v3/resource/resource/-L-NO1Nn90N91IyBZ2Bd').once('value').then(function(snapshot) {
//     var resource = snapshot.val();
// });

var resourcesRef = firebase.database().ref('/v3/resource/resource').orderByChild('title');
ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
    });
});