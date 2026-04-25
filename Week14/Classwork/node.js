// -------------------------
// Part 1: First Node.js Program
// -------------------------
console.log("Hello, Node.js!");

// -------------------------
// Part 2: Using Built-in Module
// -------------------------
const os = require('os');
console.log("Operating System:", os.platform());

// -------------------------
// Part 3: File System Task
// -------------------------
const fs = require('fs');

fs.writeFileSync('C:\\Users\\dnimma\\Desktop\\message.txt', 'Hello from Node.js!');
console.log("File created successfully!");

// -------------------------
// Part 4 & 5: Creating a Server 
// -------------------------
const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
  const username = os.userInfo().username;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // output
  res.end(`Welcome to Node.js Server\nHello ${username}!`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Error handling
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is already in use. Try another port.`);
  } else {
    console.error('Server error:', err);
  }
});

// -------------------------
// Part 6: Non-blocking example
// -------------------------
console.log('Start');

fs.readFile('C:\\Users\\dnimma\\Desktop\\message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file');
    return;
  }
  console.log('File contents:', data);
});

console.log('End');

// -------------------------
// To stop a Node.js server:
// In the terminal where the server is running:
// Ctrl + C
// This immediately stops the server.
// -------------------------