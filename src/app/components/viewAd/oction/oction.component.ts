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
    private authService: AuthService
    ) {}

  kirama = {lat: 6.2074, lng: 80.6672};
  currentDate = Date.now();
  arr = {} as AuctionHouseAd;
  bids = [];
  currentBid: number;
  public errorMsg;
  isSubscribed = false;
  currentUser: any;

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.arr = this.auctionAdService.getSelectedHouseAd();
  
    this.biddingService.getUser_bids(this.arr._id,this.currentUser._id).subscribe(
      (result) => {
        if(result.length>0){
          this.isSubscribed = true;
          this.biddingService.getBids(this.arr._id).subscribe(
            (results) => {
              this.bids = results;
              this.currentBid = this.bids[0].biddingAmount;
            },
            (error) => (this.errorMsg = error)
          );
        }
        
      },
      (errors) => {
        // this.isSubscribed = true;
      }
    );
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  BiddingForm = this.formBuilder.group({
    biddingAmount: [null, this.bidValueValidator ],
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
        // this.router.navigate(['/']);
        this.BiddingForm.reset();
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
      },
      (error) => {
        console.log(error);
      } 
    );
  }
}
