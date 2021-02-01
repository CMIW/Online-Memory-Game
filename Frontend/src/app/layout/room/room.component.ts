import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../core/services/socket/socket.service';
import { DataService } from '../../core/services/data/data.service';
import { IBoard } from '../../models/IBoard.interface';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public roomId:string;
  public board:IBoard;

  constructor(private socketService: SocketService, private dataService:DataService) { }

  ngOnInit(): void {
    // requests the id of the room
    this.dataService.getRoomId();
    this.dataService.roomId.subscribe(roomId =>{
      this.roomId = roomId;
    });
    this.socketService.emit("board",6);
    this.dataService.board.subscribe(board =>{
      if (board) {
        this.board = board;
      }
    });
  }

  test(){
    this.socketService.emit("test",{});
  }

}
