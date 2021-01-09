import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../core/services/socket/socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  test(){
    this.socketService.emit("test",{});
  }

}
