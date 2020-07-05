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

  @Input('image') image: string;
  @Input('title') title: string; //////////////////////////////////////////////
  @Input('price') price: string; ////////////                    //////////////
  @Input('size') size: string; ////////////    inputs from     //////////////
  @Input('type') type: string; ////////////   home component   //////////////
  @Input('location') location: string; //////////////////////////////////////////////
  @Input('time') time: string;

  constructor() {}

  ngOnInit(): void {}
}
