const express = require('express');
const port = 8080;
const app = express();
const fs = require('fs');
let jsonData = require('./data/data.json');
let value = JSON.parse(jsonData);
app.set("view engine", "pug");
app.use(express.static(__dirname + '/build'));
app.use("/", function(request, response){
    response.render("index", value);
}); 

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
