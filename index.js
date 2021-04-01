const express = require('express');
const port = 8080;
const app = express();
let jsonData = require('./data/data.json');
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/build'));
let slide,theme;
app.get("/", function(request, response){
    slide = request.query.slide;
    if (request.query.theme != 'light'){
        theme = 'theme_dark';
    } else {
        theme = 'theme_light'
    }
    let alias = jsonData[slide-1].alias;
    let data = jsonData[slide-1].data;
    
    alias = JSON.stringify(alias);
    data = JSON.stringify(data);
    let html = `<html>
    <head>
        <link rel="stylesheet" href="stories.css">
    </head>
    <body class="${theme}">
        <script type="text/javascript" src="stories.js"></script>
        <script> 
                const body = document.querySelector('body');
                body.innerHTML = window.renderTemplate(${alias}, ${data});
        </script>
        
    </body>
    </html>`
    response.send(html);
    
}); 
console.log(slide);
app.get("/api", (req, res) => {
    res.send(jsonData[slide - 1]);
})


// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
