import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-dialog',
  templateUrl: './join-dialog.component.html',
  styleUrls: ['./join-dialog.component.css']
})
export class JoinDialogComponent implements OnInit {
  public room: number;
  constructor() { }

  ngOnInit(): void {
  }

}
