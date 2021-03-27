const express = require('express');
const port = 8080;
const app = express();
let jsonData = require('./data/data.json');
let html = `<html>
<head>
    <link rel="stylesheet" href="stories.css">
</head>
<body class="theme_light">
    <script type="text/javascript" src="stories.js"></script>
    <script>
        const body = document.querySelector('body');
        body.innerHTML = window.renderTemplate();
    </script>
    
</body>
</html>`
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/build'));
app.get("/", function(request, response){
    let slide = request.query.slide;
    sendSlide = jsonData[slide - 1];
    JSON.stringify(sendSlide);
    response.write(sendSlide);
    response.write(html);
    response.end();
}); 

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
