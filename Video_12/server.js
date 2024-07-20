import * as http from 'http';

const server = http.createServer((req, res) => {

    // res.write(req.url)

    res.writeHead(200, { "Content-Type": "text/html"});
    res.end("<h1>Jai Shree Ram!</h1>");

})
let port = 55324;
server.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})