import { Component, OnInit } from '@angular/core';
import { BidedProperty } from 'src/app/models/bided-property.model';
import { DirectHouse } from 'src/app/models/direct-house.model';
import { DirectLand } from 'src/app/models/direct-land.model';
import { AdvertisementService } from 'src/app/services/advertisement.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private advertisementService: AdvertisementService) {}

  nav = 1;
  postedLands = [] as DirectLand[];
  postedHouses = [] as DirectHouse[];
  bidedLands = [] as BidedProperty[];
  bidedHouses = [] as BidedProperty[];

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
        this.bidedHouses = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
