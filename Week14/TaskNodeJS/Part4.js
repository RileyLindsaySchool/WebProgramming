const http = require("http");

const os = require('os');
const username = os.userInfo().username;

const server = http.createServer((req, res) => {
    res.write(`Hello ${username}!`);
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});