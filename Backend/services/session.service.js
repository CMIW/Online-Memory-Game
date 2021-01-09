class SessionService{
  sessions = new Map();

  constructor(){}

  addNewSession(session){
    this.sessions[session.socketId] = session;
  }

  // updates the socketid for que specified user token
  updateSession(userToken,socketId){
    // when user token exists in a session
    if(this.sessions[userToken]){
      this.sessions[userToken]['socketId'] = socketId;
    }
    // when user token does not exists in a session then add it to sessions
    else {
      this.sessions[userToken] = {socketId:socketId};
    }
  }

  getSession(userToken){
    return this.sessions[userToken];
  }

  nameUserSession(userToken,userName){
    if(this.sessions[userToken]){
      this.sessions[userToken]['userName'] = userName;
    }
  }
}

module.exports = SessionService;
