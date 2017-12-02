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

// Order by tags
// Note: Tags must be structured as booleans like:
// tags: foo: true
// https://stackoverflow.com/questions/40656589/firebase-query-if-child-of-child-contains-a-value
var resourcesRef = database.ref('/v3/resource/resource').orderByChild("tags/foo").equalTo(true);
resourcesRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val());
    });
});

