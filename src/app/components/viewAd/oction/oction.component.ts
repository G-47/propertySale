import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,Validators } from '@angular/forms';
import { AuctionLandAd } from 'src/app/models/auctionLandAd.model';
import { Bidding } from 'src/app/models/bidding.model';
import { AuctionAdService } from 'src/app/services/auction-ad.service';
import { BiddingService } from 'src/app/services/bidding.service';

@Component({
  selector: 'app-oction',
  templateUrl: './oction.component.html',
  styleUrls: ['./oction.component.scss']
})
export class OctionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auctionAdService: AuctionAdService, private biddingService: BiddingService) {}

  kirama = {lat: 6.2074, lng: 80.6672};
  currentDate = Date.now();
  arr = {} as AuctionLandAd;
  bids = [];
  public errorMsg;

  ngOnInit(): void {
    this.arr = this.auctionAdService.getSelectedLandAd();
    console.log(this.arr.locationMap["latitude"]);
    console.log(this.arr.title);

    this.biddingService.getBids().subscribe(
      (result) => {
        console.log(result);
        this.bids = result;
      },
      (error) => (this.errorMsg = error)
    );
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  BiddingForm = this.formBuilder.group({
    biddingAmount: [null, this.bidValueValidator ],
  });

  bidValueValidator(control: AbstractControl):{[key: string]: boolean} | null {

    if( control.value !==null && (isNaN(control.value) || control.value < 20)){
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

    this.biddingService.addBid(formDetails);
  }
}
