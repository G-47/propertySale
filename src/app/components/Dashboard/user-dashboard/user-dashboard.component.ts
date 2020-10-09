import { Component, OnInit } from '@angular/core';
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
}
