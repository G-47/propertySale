import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuctionAdService } from "src/app/services/auction-ad.service"
import { AuctionLandAd } from "src/app/models/auctionLandAd.model"

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  lands = [];
  houses = [];
  selectedArray = [];
  selectedArrayIndex = 1;
  public errorMsg;
  currentDate: any;

  SearchForm = this.formBuilder.group({
    word: [''],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private auctionAdService: AuctionAdService) {
    
    const x = this.selectedArray.filter((item) =>
      item.location.includes('Gal')
    );

    console.log(x);
  }

  ngOnInit(): void {    
    this.auctionAdService.getAuctionLandAd().subscribe(
      (result) => {
        console.log(result);
        this.lands = result.sort((a, b) => a.startDate - b.startDate);
        this.selectedArray=this.lands;
        this.selectedArrayIndex = 1;
      },
      (error) => (this.errorMsg = error)
    );

    this.auctionAdService.getAuctionHouseAd().subscribe(
      (result) => {
        console.log(result);
        this.houses = result.sort((a, b) => b.startDate - a.startDate);
      },
      (error) => (this.errorMsg = error)
    );
  }


  changeArray(type) {
    this.SearchForm.reset();

    if (type === 'lands') {
      this.selectedArray = this.lands;
      this.selectedArrayIndex = 1;
    } else {
      this.selectedArray = this.houses;
      this.selectedArrayIndex = 2;
    }
  }

  search(form) {
    if (this.selectedArrayIndex === 1) {
      this.selectedArray = this.lands.filter((item) =>
        item.locationName.toLowerCase().includes(form.word.toLowerCase())
      );
    } else {
      this.selectedArray = this.houses.filter((item) =>
        item.locationName.toLowerCase().includes(form.word.toLowerCase())
      );
    }
  }

  openAd(arr) {
      if(this.selectedArrayIndex === 1){
        this.auctionAdService.setSelectedLandAd(arr);
        this.router.navigate(['/viewAuctionLandAd', arr._id]);
      }else{
        this.auctionAdService.setSelectedHouseAd(arr);
        this.router.navigate(['/viewAuctionHouseAd', arr._id]);
      }    
  }
}
