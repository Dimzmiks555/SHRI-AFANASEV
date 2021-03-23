const http = require('http');
const port = 8080;
const server = http.createServer(function (req, res) {
res.end('Hello Node.js Server!')
});
server.listen(port, (err) => {
if (err) {
return console.log('something bad happened', err)
}
console.log(`server is listening on ${port}`)
})