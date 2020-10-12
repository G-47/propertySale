import { Component, Input, OnInit } from '@angular/core';
import { Bidding } from 'src/app/models/bidding.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { BiddingService } from 'src/app/services/bidding.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  @Input( '_id' ) _id: any ;
  @Input( 'startDate' ) startDate: any ;
  @Input( 'endDate' ) endDate: any ;

  rest: number ;
  remain: number;     //////////////////////////////////////////////
  days: number ;     ///////                                ///////
  hours: number ;    ///////    variables for countdown     ///////
  mins: number ;     ///////                                ///////
  secs: number ;     //////////////////////////////////////////////


  timeLoop: any;
  eventDone = "onGoing" ;


  constructor(private emailService: EmailService, private biddingService: BiddingService, private authService: AuthService) { 
    this.timeLoop = setInterval( () => {
      this.calculateTime();   // calculate remaining time every second
    }, 1000 );}

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
        this.notifyUser(this._id);     
        clearInterval( this.timeLoop );
      }      
    }else{
      this.eventDone = "notStarted";
    } 
  }
  user: User;
  notifyUser(_id){
    this.biddingService.getBids(_id).then(
      (result) => {
        this.authService.getUser(result[0].userID).then(
          (res) => {
            this.user = res;
            this.emailService.sendEmail(this.user.email,"Lanka Properties: Bid number: "+ result[0].title,"Congradulations!!! You are the winner. For further details contact manager 0552277448");
          },
          err => {

          }
        );

      }
    )
  }

}
