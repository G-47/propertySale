import { Component, OnInit, Input } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-direct-house-card',
  templateUrl: './direct-house-card.component.html',
  styleUrls: ['./direct-house-card.component.scss'],
})
export class DirectHouseCardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string; //////////////////////////////////////////////
  @Input() price: string; ////////////                    //////////////
  @Input() bedRooms: string; ////////////    inputs from     //////////////
  @Input() bathRooms: string; ////////////   home component   //////////////
  @Input() location: string; //////////////////////////////////////////////
  @Input() time: number;

  moment = (num: number) => Moment(num);

  constructor() {}

  ngOnInit(): void {}
}
