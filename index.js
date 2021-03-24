const express = require('express');
const port = 8080;
const app = express();
app.use(express.static(__dirname + '/build'));
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/build/index.html');
    let slide = request.query.slide;
    let theme = request.query.theme;
    response.send("<h1>theme</h1>");
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
