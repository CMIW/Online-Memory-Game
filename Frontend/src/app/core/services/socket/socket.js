const io = require('socket.io');

function test(url){
  return io(url);
}

export default { test };
