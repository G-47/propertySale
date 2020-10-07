import { Router } from '@angular/router';
import { DirectHouse } from './../../../models/direct-house.model';
import { DirectLand } from './../../../models/direct-land.model';
import { AdvertisementService } from './../../../services/advertisement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private advertisementService: AdvertisementService,
    private router: Router
  ) {}

  nav = 1;
  pendingLands = [] as DirectLand[];
  pendingHouses = [] as DirectHouse[];

  setNav(n): void {
    this.nav = n;
  }

  ngOnInit(): void {}

  getPendingLands(): void {
    this.setNav(2);
    this.advertisementService.getDirectLands(0).then(
      (res) => {
        this.pendingLands = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPendingHouses(): void {
    this.setNav(3);
    this.advertisementService.getDirectHouses(0).then(
      (res) => {
        this.pendingHouses = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  goToReviewLand(landDetails: DirectLand): void {
    this.router.navigate(['/reviewLand'], { state: landDetails });
  }

  goToReviewHouse(houseDetails: DirectLand): void {
    this.router.navigate(['/reviewLand'], { state: houseDetails });
  }
}
