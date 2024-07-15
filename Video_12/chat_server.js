const net = require('net');
let server = net.createServer((socket) => {
    socket.end("Ram Ram bhai sarane\n");
}).on('error', (err) => {
    console.error("Error occured:", err.message);
});
server.listen(() => {
    const address = server.address();
    console.log("Server opened on", address);
});