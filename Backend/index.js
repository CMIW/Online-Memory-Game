// Dependencies
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server, {cors:{origin:'*'}});

// Port number
const PORT = 3000 || process.env.PORT;

var sessions = new Map();

// Run when client connects
io.on('connection', function(socket) {
  io.to(socket.id).emit('welcome', {});

  // assigns the new socket id to the user token
  socket.on('welcome', function (data) {
    sessions[data.token] = socket.id;
  });

  socket.on('handshake', function (data) {
     data.token = socket.id;
     sessions[socket.id] = socket.id;
     io.to(socket.id).emit('handshake', data);
  });

  socket.on('userName', function (data) {
    //console.log(data);
  });

  socket.on('test', function (data) {
    console.log(data);
  });

  socket.on('disconnect', function () {
      //console.log('A user disconnected');
   });
});

// Server listener
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
