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
      if(roomId){
        // request the board created for the room
        this.socketService.emit("board",this.roomId);
        this.dataService.board.subscribe(board =>{
          if (board) {
            this.board = board;
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.dataService.roomId.next(null);
    this.dataService.roomId.complete();
  }

  test(){
    this.socketService.emit("test",{});
  }

}
