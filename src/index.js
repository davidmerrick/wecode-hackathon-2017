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

var submitButton = document.querySelector('#submit');
var titleText = document.querySelector('#title');
var bodyText = document.querySelector('#description');

submitButton.addEventListener('click', function(event) {
    console.log("button clicked");
    event.preventDefault();
    var title = titleText.value;
    var body = bodyText.value;
    var resourceRef = 'v3/resource/';
    var resourceData = {
        title: title,
        description: body,
        date_edited: firebase.database.ServerValue.TIMESTAMP,
        slug_name: title.replace(/\s/g, '-')
    };
    var key = firebase.database().ref(resourceRef + 'resource').push().key;
    var updates = {};
    updates[resourceRef + 'resource/' + key] = resourceData;

    return firebase.database().ref().update(updates).catch(function(error) {
        console.log(error);
        alert(error.message)
    });
});