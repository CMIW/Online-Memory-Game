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

  createRoom(userToken,roomSize){
    let newId = this.createRoomId();
    this.rooms[newId] = {integrants:[userToken], size:roomSize};
    return newId;
  }

  joinRoom(room,userToken){
    this.rooms[room]['integrants'].push(userToken);
  }

  exists(roomId){
    return this.ids.includes(roomId);
  }

  available(roomId){
    return !(this.rooms[roomId]['integrants'].length == this.rooms[roomId]['size']);
  }

  validEntry(roomId){
    if (!this.exists(roomId)) {
      return {access: false, message:"The room not does not exist.", code: 2};
    }
    else if (!this.available(roomId)) {
      return {access: false, message:"The room is full.", code: 3};
    }
    return {access: true, message:"The room is available.", code: 4};
  }

}

module.exports = RoomService;
