import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../core/services/socket/socket.service';
import { DataService } from '../../core/services/data/data.service';
import { MatDialog } from '@angular/material/dialog';

import { JoinDialogComponent } from '../components/join-dialog/join-dialog.component';
import { CreateDialogComponent } from '../components/create-dialog/create-dialog.component';
import { MessageDialogComponent } from '../components/message-dialog/message-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name: string;
  public room: number;
  public size: number;

  constructor(public dialog:MatDialog, private router: Router, private socketService: SocketService,  private dataService:DataService) { }

  ngOnInit(): void {
    this.name = this.dataService.getUserName();
    this.socketService.listen('roomAccess').subscribe(res => {
      if(res.data.access){
        this.router.navigate(['/room']);
      }
      else{
        this.dialog.open(MessageDialogComponent,{data:{message:res.data.message}});
      }
    });
  }

  joinGroup(){
    let dialogRef = this.dialog.open(JoinDialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.room = result;
        this.socketService.emit("joinRoom",this.room);
        this.setUserName();
      }
    });
  }

  createGroup(){
    let dialogRef = this.dialog.open(CreateDialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);

      if(result){
        this.size = result;
        this.socketService.emit("createRoom",this.size);
        this.setUserName();
      }
    });
  }

  // sends que user name to the server, que server attaches the name to the user token
  setUserName(){
    this.dataService.setUserName(this.name);
    this.socketService.emit("userName",this.name);
  }

}
