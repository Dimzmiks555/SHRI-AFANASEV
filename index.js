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
    <script defer>
        document.addEventListener("DOMContentLoaded", function(event) { 
            const body = document.querySelector('body');
            body.innerHTML = window.renderTemplate(alias, data);
        })
    </script>
    
</body>
</html>`
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/build'));
app.get("/", function(request, response){
    slide = request.query.slide;
    response.send(html);
    app.get("/api", (req, res) => {
        res.send(jsonData[slide - 1]);
    })
}); 


// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
