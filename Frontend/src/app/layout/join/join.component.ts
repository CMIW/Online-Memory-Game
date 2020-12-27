import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../core/services/socket/socket.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {  }

}
