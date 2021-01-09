// Dependencies
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server, {cors:{origin:'*'}});

const SessionService = require('./services/session.service');
const sessionService = new SessionService();

// Port number
const PORT = 3000 || process.env.PORT;

// Run when client connects
io.on('connection', function(socket) {
  io.to(socket.id).emit('welcome', {});

  // assigns token to new users or assing the new socket id for the  refreshed user token
  socket.on('welcome', function (payload) {
    if(payload.token == null){
      sessionService.addNewSession({socketId:socket.id});
      payload.token = socket.id;
      io.to(socket.id).emit('handshake', payload);
    }
    else {
      sessionService.updateSession(payload.token,socket.id);
    }
  });

  socket.on('userName', function (payload) {
    sessionService.nameUserSession(payload.token, payload.data);
    //console.log(data);
  });

  socket.on('test', function (payload) {
    console.log(sessionService.getSession(payload.token));
  });

  socket.on('disconnect', function () {
      //console.log('A user disconnected');
   });
});

// Server listener
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
