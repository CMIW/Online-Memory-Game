import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { io } from 'socket.io-client';

import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor(private dataService:DataService) {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.listen('welcome').subscribe(res => {
      this.emit('welcome',{});
    });
    this.handshake();
  }

  // observable tha listen to socket channels and returns the data sent by the server
  listen(event: string){
    return new Observable<any>((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      })
    });
  }

  // emit messages to the server socket
  emit(event: string, data: any){
    this.socket.emit(event, { token: this.dataService.getToken(), data: data });
  }

  // requests a token from the server and stores it
  handshake(){
    this.listen('handshake').subscribe(res => {
      this.dataService.setToken(res.token);
    });
  }

}
