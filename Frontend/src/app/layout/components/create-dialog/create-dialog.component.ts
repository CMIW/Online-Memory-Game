import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
  public dialogOptions = {size: 2, cards: 12};
  constructor() { }

  ngOnInit(): void {
  }

}
