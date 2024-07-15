const net = require('net');
const client = net.connect({port: 55375}, () => {
        console.log("connected to server");
        client.write("Jai Shree Ram Server bhaiya");
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log("disconnected from server")
});