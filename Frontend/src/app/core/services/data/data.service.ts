import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBoard } from '../../../models/IBoard.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public roomId: BehaviorSubject<any> = new BehaviorSubject("");
  public board: BehaviorSubject<IBoard> = new BehaviorSubject(null);

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

  setBoard(board){
    this.board.next(board);
  }

  clearStorage(){
    sessionStorage.removeItem('roomId');
    this.roomId = new BehaviorSubject("");
    this.board = new BehaviorSubject(null);
  }

}
