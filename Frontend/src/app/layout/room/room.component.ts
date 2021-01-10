import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../core/services/socket/socket.service';
import { DataService } from '../../core/services/data/data.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public roomId:string;

  constructor(private socketService: SocketService, private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getRoomId();
    this.dataService.roomId.subscribe(roomId =>{
      this.roomId = roomId;
    });
  }

  test(){
    this.socketService.emit("test",{});
  }

}
