import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BidedProperty } from 'src/app/models/bided-property.model';
import { DirectHouse } from 'src/app/models/direct-house.model';
import { DirectLand } from 'src/app/models/direct-land.model';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AuctionLandAd } from 'src/app/models/auctionLandAd.model';
import { AuctionHouseAd } from 'src/app/models/auctionHouseAd.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private advertisementService: AdvertisementService,
    private router: Router
  ) {}

  nav = 1;
  postedLands = [] as DirectLand[];
  postedHouses = [] as DirectHouse[];
  bidedLandIds = [] as string[];
  bidedHouseIds = [] as string[];
  bidedLands = [] as AuctionLandAd[];
  bidedHouses = [] as AuctionHouseAd[];

  setNav(n): void {
    this.nav = n;
  }

  ngOnInit(): void {}

  getPostedLands(): void {
    this.setNav(2);
    this.advertisementService.getLandstoUserId().then(
      (res) => {
        this.postedLands = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPostedHouses(): void {
    this.setNav(3);
    this.advertisementService.getHousestoUserId().then(
      (res) => {
        this.postedHouses = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getJoinLandAuctions() {
    this.setNav(4);
    this.advertisementService.getBidedPropertyIds('Land').then(
      (res) => {
        res.forEach((item) => {
          this.bidedLandIds.push(item.adID);
        });
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.advertisementService.getBidedLands(this.bidedLandIds).then(
      (res) => {
        this.bidedLands = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getJoinHouseAuctions() {
    this.setNav(5);
    this.advertisementService.getBidedPropertyIds('House').then(
      (res) => {
        res.forEach((item) => {
          this.bidedHouseIds.push(item.adID);
        });
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.advertisementService.getBidedHouses(this.bidedHouseIds).then(
      (res) => {
        this.bidedHouses = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openAd(type: string, property: any): void {
    if (type === 'land') {
      this.router.navigate(['/viewLand', property._id]);
    } else if (type === 'house') {
      this.router.navigate(['/viewHouse', property._id]);
    }
  }
}
