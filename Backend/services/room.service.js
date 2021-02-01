class RoomService{
  rooms = new Map();
  ids = [];

  constructor(){}

  // creates generates a new unique ID
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

  // adds the user to the room
  joinRoom(room,userToken){
    this.rooms[room]['integrants'].push(userToken);
  }

  // validates that the room exists
  exists(roomId){
    return this.ids.includes(roomId);
  }

  // validates for room in the room
  available(roomId){
    return !(this.rooms[roomId]['integrants'].length == this.rooms[roomId]['size']);
  }

  // validates that if the room can be joined
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
