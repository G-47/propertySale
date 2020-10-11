import { Component, OnInit, Input } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-direct-land-card',
  templateUrl: './direct-land-card.component.html',
  styleUrls: ['./direct-land-card.component.scss'],
})
export class DirectLandCardComponent implements OnInit {
  landTitle = 'Land for sale in Matara';
  landPrice = '500,000/-';
  landSize = '20';
  landType = 'Bare Land';
  landLocation = 'Matara';
  postedDuration = 20;

  @Input() image: string;
  @Input() title: string; //////////////////////////////////////////////
  @Input() price: string; ////////////                    //////////////
  @Input() size: string; ////////////    inputs from     //////////////
  @Input() type: string; ////////////   home component   //////////////
  @Input() location: string; //////////////////////////////////////////////
  @Input() time: number;

  moment = (num: number) => Moment(num);

  constructor() {}

  ngOnInit(): void {}
}
