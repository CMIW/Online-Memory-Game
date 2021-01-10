class SessionService{
  sessions = new Map();

  constructor(){}

  // adds a new session to the sessions map
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

  // returns the socket id for the given user token
  getSessionSocket(userToken){
    return this.sessions[userToken]['socketId'];
  }

  // adds a user name to the user session
  nameUserSession(userToken,userName){
    if(this.sessions[userToken]){
      this.sessions[userToken]['userName'] = userName;
    }
  }

  getSession(userToken){
    return this.sessions[userToken];
  }

}

module.exports = SessionService;
