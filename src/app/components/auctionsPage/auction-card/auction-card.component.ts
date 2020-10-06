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
  @Input('extracts') extracts: Array<String>;
  @Input( 'otherImages' ) otherImages: Array<String> ;
  @Input( 'location' ) location: String ;
  @Input( 'mapCordinates' ) mapCordinates: Object ;
  @Input( 'startDate' ) startDate: any ;
  @Input( 'endDate' ) endDate: any ;
  @Input( 'startBid' ) startBid: String ;
   
  rest: number ;
  remain: number;     //////////////////////////////////////////////
  days: number ;     ///////                                ///////
  hours: number ;    ///////    variables for countdown     ///////
  mins: number ;     ///////                                ///////
  secs: number ;     //////////////////////////////////////////////


  timeLoop: any;
  eventDone = "notStarted" ; 

  constructor() {
    this.timeLoop = setInterval( () => {
      this.calculateTime();   // calculate remaining time every second
    }, 1000 );
  }

  ngOnInit(): void {
    this.calculateTime();
  }


  calculateTime() {  // this function calculating the time left & updating the databse, if event done

    this.rest = (  Date.now() - this.startDate ) / 1000 ;   // remaining time as a number
  
    if ( this.rest >= 0 ) {      // if time is left
      this.eventDone = "onGoing";

      this.remain = ( this.endDate - Date.now() ) / 1000 ;
      if(this.remain >= 0){
        this.days = Math.floor(this.remain / 86400);
        this.hours = Math.floor(this.remain / 3600) % 24;
        this.mins = Math.floor(this.remain / 60) % 60;
        this.secs = Math.round( this.remain % 60 );
      }else {                    // if time is end
        this.eventDone = "ended" ;
        clearInterval( this.timeLoop );
      }      
    }else{
      this.eventDone = "notStarted";
    } 
  }
}

