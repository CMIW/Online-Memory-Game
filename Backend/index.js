// Dependencies
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server, {cors:{origin:'*'}});

// Port number
const PORT = 3000 || process.env.PORT;

// Run when client connects
io.on('connection', function(socket) {
  console.log("New connection ...",socket.id);

  socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
