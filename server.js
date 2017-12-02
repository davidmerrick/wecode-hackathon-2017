var express = require("express");
const app = express();

app.use(express.static("public"));

var port = 8080; 
app.listen(port, function(){
    console.log("Web server started. Listening on http://localhost:" + port);
});
