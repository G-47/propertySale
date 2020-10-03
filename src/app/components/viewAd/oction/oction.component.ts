import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,Validators } from '@angular/forms';
import { AuctionAd } from 'src/app/models/auctionAd.model';
import { AuctionAdService } from 'src/app/services/auction-ad.service';

@Component({
  selector: 'app-oction',
  templateUrl: './oction.component.html',
  styleUrls: ['./oction.component.scss']
})
export class OctionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auctionAdService: AuctionAdService) {}

  kirama = {lat: 6.2074, lng: 80.6672};

  arr = {} as AuctionAd;

  ngOnInit(): void {
    this.arr = this.auctionAdService.getSelectedAd();
    console.log(this.arr.mapCordinates["latitude"]);
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
}
