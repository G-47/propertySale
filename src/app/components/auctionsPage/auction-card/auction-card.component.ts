import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss']
})
export class AuctionCardComponent implements OnInit {

  @Input('_id') _id: string;
  @Input('title') title: string; //////////////////////////////////////////////
  @Input('type') type: string; ////////////                    //////////////
  @Input('size') size: string; ////////////    inputs from     //////////////
  @Input('description') description: string; ////////////   home component   //////////////
  @Input('threeSixtyImageUrl') threeSixtyImageUrl: string; //////////////////////////////////////////////
  @Input( 'images' ) images: String[] ;
  @Input( 'locationName' ) location: String ;
  @Input( 'locationMap' ) locationMap: Object ;
  @Input( 'startDate' ) startDate: any ;
  @Input( 'endDate' ) endDate: any ;
  @Input( 'startBid' ) startBid: number ;
  @Input( 'currentBid' ) currentBid: number ;
  @Input( 'postedTime' ) postedTime: any ;
   
  rest: number ;
  remain: number;     //////////////////////////////////////////////
  days: number ;     ///////                                ///////
  hours: number ;    ///////    variables for countdown     ///////
  mins: number ;     ///////                                ///////
  secs: number ;     //////////////////////////////////////////////



  constructor() {
  }

  ngOnInit(): void {
  }


  
}

