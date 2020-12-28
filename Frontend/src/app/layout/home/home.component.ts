import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../core/services/socket/socket.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name: string;

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit(): void {
  }

  joinGroup(){
    this.router.navigate(['/join']);
  }

  createGroup(){
    console.log(this.name);
    this.socketService.emit("userName",this.name);
    this.router.navigate(['/room']);
  }

}
