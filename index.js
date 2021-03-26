const express = require('express');
const port = 8080;
const app = express();
let jsonData = require('./data/data.json');
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/build'));
app.get("/", function(request, response){
    response.render("index", {jsonData: JSON.stringify(jsonData)} );
}); 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
