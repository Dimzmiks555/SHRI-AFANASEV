const express = require('express');
const port = 8080;
const app = express();
app.use(express.static(__dirname + '/build'));
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/build/index.html');
    const slide = request.query.slide;
    const theme = request.query.theme;
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
