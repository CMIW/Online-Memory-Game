import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../../models/ICard.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: ICard;

  constructor() { }

  ngOnInit(): void {
  }

  click():void {
    this.card.flipped = !this.card.flipped;
  }

}
