import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../core/services/socket/socket.service';
import { DataService } from '../../core/services/data/data.service';
import { MatDialog } from '@angular/material/dialog';

import { JoinDialogComponent } from '../components/join-dialog/join-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name: string;
  public room: number;

  constructor(public dialog:MatDialog, private router: Router, private socketService: SocketService,  private dataService:DataService) { }

  ngOnInit(): void {
    this.name = this.dataService.getUserName();
  }

  joinGroup(){
    let dialogRef = this.dialog.open(JoinDialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.room = result;
        this.socketService.emit("joinRoom",this.room);
      }
    });

    this.socketService.listen('roomAccess').subscribe(res => {
      if(res.data){
        this.router.navigate(['/room']);
      }
    });
  }

  createGroup(){
    this.dataService.setUserName(this.name);
    this.socketService.emit("userName",this.name);
    this.socketService.emit("createRoom",{});
    this.router.navigate(['/room']);
  }

}
