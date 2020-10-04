import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  landTitle = 'Land for sale in Matara';
  landPrice = '500,000/-';
  landSize = '20';
  landType = 'Bare Land';
  landLocation = 'Matara';
  postedDuration = 20;

  @Input() image: string;
  @Input() title: string;    //////////////////////////////////////////////
  @Input() price: string;    ////////////                    //////////////
  @Input() size: string;     ////////////    inputs from     //////////////
  @Input() type: string;     ////////////   home component   //////////////
  @Input() location: string; //////////////////////////////////////////////
  @Input() time: string;

  constructor() {}

  ngOnInit(): void {}
}
