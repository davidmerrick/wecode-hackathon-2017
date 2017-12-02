import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

var firebase = require("firebase");
var admin = require("firebase-admin");
require("firebase/auth");
require("firebase/database");

var serviceAccount = require("servicekey.json");

var config = {
    apiKey: "AIzaSyAYpF022ZdJdaparUNIiYscYJQExmlDcKo",
    authDomain: "hello-world-8a89f.firebaseapp.com",
    databaseURL: "https://hello-world-8a89f.firebaseio.com",
    projectId: "hello-world-8a89f",
    storageBucket: "hello-world-8a89f.appspot.com",
    messagingSenderId: "735912752935"
};
firebase.initializeApp(config);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hello-world-8a89f.firebaseio.com"
});


