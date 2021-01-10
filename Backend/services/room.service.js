class RoomService{
  rooms = new Map();
  ids = [];

  constructor(){}

  createRoomId(){
    let id;
    do{
      id = Math.floor(1000 + Math.random() * 9000);
    }while(this.ids.includes(id));
    this.ids.push(id);
    return id;
  }

  createRoom(userToken){
    let newId = this.createRoomId();
    this.rooms[newId] = {integrants:[userToken]};
    return newId;
  }

  joinRoom(room,userToken){
    this.rooms[room]['integrants'].push(userToken);
  }

  exists(roomId){
    return this.ids.includes(roomId);
  }

}

module.exports = RoomService;
