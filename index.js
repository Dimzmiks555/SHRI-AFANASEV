const express = require('express');
const port = 8080;
const app = express();
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/build/index.html');
});
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});