import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public roomId = new BehaviorSubject("");
  //public userName = new BehaviorSubject("");

  constructor() { }

  setToken(token:string){
    sessionStorage.setItem('token', token);
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  setRoomId(roomId:string){
    sessionStorage.setItem('roomId', roomId);
    this.roomId.next(roomId);
  }

  getRoomId(){
    this.roomId.next(sessionStorage.getItem('roomId'));
  }

  setUserName(userName){
    sessionStorage.setItem('userName', userName);
    //this.userName.next(userName);
  }

  getUserName(){
    return sessionStorage.getItem('userName');
    //this.userName.next(sessionStorage.getItem('userName'));
  }

}
