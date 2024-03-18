// Import required modules
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const port = process.env.PORT || 3000;


// Create a new Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a WebSocket server by passing the HTTP server
const wss = new WebSocket.Server({ server });

// WebSocket connection event handler
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Event handler for messages received from clients
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Echo the received message back to the client
    ws.send(`Echo: ${message}`);
  });

  // Event handler for when the client closes the connection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Define a route for handling HTTP requests
app.get('/', (req, res) => {
  res.send('Hello World Lakshay!');
});

// Start the server on port 3000
server.listen(port, () => {
  console.log('Server listening on http://localhost:3000');
});
