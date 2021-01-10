// Dependencies
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server, {cors:{origin:'*'}});

// Port number
const PORT = 3000 || process.env.PORT;

// Services
const SessionService = require('./services/session.service');
const sessionService = new SessionService();

const RoomService = require('./services/room.service');
const roomService = new RoomService();

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

  // adds a userName to user session
  socket.on('userName', function (payload) {
    sessionService.nameUserSession(payload.token, payload.data);
  });

  socket.on('createRoom', function(payload){
    let roomId = roomService.createRoom(payload.token);
    socket.join(roomId);
    payload.data = roomId;
    io.to(socket.id).emit('roomId', payload);
  });

  socket.on('joinRoom', function(payload) {
    let roomId = payload.data;
    let roomAccess = roomService.exists(parseInt(roomId));
    payload.data = roomAccess;
    io.to(socket.id).emit('roomAccess', payload);
    if(roomAccess){
      roomService.joinRoom(roomId,payload.token);
      socket.join(roomId);
      payload.data = roomId;
      io.to(socket.id).emit('roomId', payload);
    }
  });

  socket.on('disconnect', function () {
  });

  socket.on('test', function (payload) {
    console.log(sessionService.getSession(payload.token));
  });

});

// Server listener
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
