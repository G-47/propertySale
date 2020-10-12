import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,Validators } from '@angular/forms';
import { AuctionLandAd } from 'src/app/models/auctionLandAd.model';
import { Bidding } from 'src/app/models/bidding.model';
import { AuctionAdService } from 'src/app/services/auction-ad.service';
import { BiddingService } from 'src/app/services/bidding.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { AuctionHouseAd } from 'src/app/models/auctionHouseAd.model';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-oction',
  templateUrl: './oction.component.html',
  styleUrls: ['./oction.component.scss']
})
export class OctionComponent implements OnInit {
  errorMessage = 'temp';
  constructor(private formBuilder: FormBuilder, 
    private auctionAdService: AuctionAdService,
    private biddingService: BiddingService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService,
    private emailService: EmailService
    ) {}

  currentDate = Date.now();
  arr = {} as AuctionHouseAd;
  bids = [];
  currentBid: number;
  nextBid: number;
  public errorMsg;
  isSubscribed = false;
  currentUser: any;
  bidHistory= [];

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.arr = this.auctionAdService.getSelectedHouseAd();
    console.log(this.arr.locationMap);
  
    this.biddingService.getUser_bids(this.arr._id,this.currentUser._id).subscribe(
      (result) => {
        if(result.length>0){
          this.isSubscribed = true;          
        }
        
      },
      (errors) => {
        // this.isSubscribed = true;
      }
    );
    this.biddingService.getBids(this.arr._id).then(
      (results) => {
        this.bids = results;
        if(results.length > 0){
          this.currentBid = this.bids[0].biddingAmount;
          this.nextBid = (this.currentBid * 1.1);
        }else{
          this.currentBid = 0;
          this.nextBid = this.arr.startBid;
        }
        results.forEach(element => {
          this.authService.getUser(element.userID).then(
            (res) => {
              var temp = {
                "userName": res.firstName,
                "bidAmount": element.biddingAmount,
                "email": res.email,
                "phoneNumber": res.mobileNumber
              }
              this.bidHistory.push(temp);
            },
            (err) => {
              console.log(err);
            }
          )
        });
      },
      (error) => (this.errorMsg = error)
    );

      
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  BiddingForm = this.formBuilder.group({
    biddingAmount: [''],
  });

  bidValueValidator(control: AbstractControl):{[key: string]: boolean} | null {
    if( control.value !==null && (isNaN(control.value) || control.value < this.currentBid)){
      return {'bidValueValidator': true}
    }
    return null;
  };

  addBid(formData){
    var formDetails = {
      biddingAmount: formData.biddingAmount,
      type:'Land',
      adID: this.arr._id,
      userID: '',
    }
    this.biddingService.addBid(formDetails).subscribe(
      (res) => {
        this.toastr.success('Addign a Bid', 'Bid added successfully');
        this.router.navigate(['/auctions']);
        this.BiddingForm.reset();
        this.emailService.sendEmail(this.currentUser.email,'LankaProperties Auction: '+this.arr._id,'Bid worth: '+formData.biddingAmount+' was successfully added !');
      },
      (err) => {
        this.errorMessage = err.error[0];
        console.log(err.error[0]);
      }
    );
  }

  enterBid(){
    // this.router.navigateByUrl("/payment");

    this.biddingService.addUser_bids(this.arr._id,this.currentUser._id,"House").subscribe(
      (result) => {
        console.log(result);
        this.emailService.sendEmail(this.currentUser.email,'LankaProperties Auction: '+this.arr._id,'You have joined the bid successfully !');
      },
      (error) => {
        console.log(error);
      } 
    );
  }
}
