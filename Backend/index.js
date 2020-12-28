// Dependencies
const express = require('express');
const app = express();

const session = require('cookie-session');
const sessionMiddleware = session({secret:"ssshhhh", signed: true, resave: true, saveUninitialized: true});

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server, {cors:{origin:'*'}});

// Port number
const PORT = 3000 || process.env.PORT;

// Socket Session manager
io.use(function(socket, next){
  sessionMiddleware(socket.request, socket.request.res || {}, next);
});

app.use(sessionMiddleware);

// Run when client connects
io.on('connection', function(socket) {
  console.log("New connection ...",socket.id);
  //console.log(socket.request.session);

  socket.on('userName', function (data) {
      console.log(data);
   });

  socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

// Server listener
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
