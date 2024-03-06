// test.js
const http = require('http');
const assert = require('assert');

const serverUrl = 'http://localhost:3000'; // Update the port if your server runs on a different port

http.get(serverUrl, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    const expectedGreeting = '<h1>Hello, Jenkins!</h1>';
    assert.strictEqual(data, expectedGreeting, 'Response should contain the expected greeting');
  });
}).on('error', (error) => {
  // Handle errors
  console.error('Error:', error.message);
});
