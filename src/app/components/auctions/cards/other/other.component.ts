import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  @Input('image') image: string;
  @Input('title') title: string; //////////////////////////////////////////////
  @Input('price') price: string; ////////////                    //////////////
  @Input('size') size: string; ////////////    inputs from     //////////////
  @Input('type') type: string; ////////////   home component   //////////////
  @Input('location') location: string; //////////////////////////////////////////////
  @Input('time') time: string;
  constructor() { }

  ngOnInit(): void {
  }

}
