import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  listen(event: string){
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      })
    });
  }

  emit(event: string, data: any){
    this.socket.emit(event, data);
  }

}
