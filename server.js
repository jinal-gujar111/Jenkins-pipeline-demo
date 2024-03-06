// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
