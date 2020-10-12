import { AuctionHouseAd } from './../../../models/auctionHouseAd.model';
import { AuctionLandAd } from 'src/app/models/auctionLandAd.model';
import { AuctionAdService } from 'src/app/services/auction-ad.service';
import { Message } from './../../../models/message.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DirectHouse } from './../../../models/direct-house.model';
import { DirectLand } from './../../../models/direct-land.model';
import { AdvertisementService } from './../../../services/advertisement.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AdminsService } from 'src/app/services/admins.service';
import * as Moment from 'moment';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private advertisementService: AdvertisementService,
    private router: Router,
    private authService: AuthService,
    private adminService: AdminsService,
    private auctionAdService: AuctionAdService
  ) {}

  nav = 1;
  pendingLands = [] as DirectLand[];
  pendingHouses = [] as DirectHouse[];
  pendingUsers = [] as User[];
  activeUsers = [] as User[];
  messages = [] as Message[];

  endedLands = [] as AuctionLandAd[];
  endedHouses = [] as AuctionHouseAd[];

  moment = (num: number) => Moment(num);

  setNav(n): void {
    this.nav = n;
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef

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

  getPendingUsers(): void {
    this.setNav(6);
    this.authService.getUsers(0).then(
      (res) => {
        this.pendingUsers = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getActiveUsers(): void {
    this.setNav(7);
    this.authService.getUsers(1).then(
      (res) => {
        this.activeUsers = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getMessages(): void {
    this.setNav(8);
    this.adminService.getMessages().then(
      (res) => {
        console.log(res);
        this.messages = res.sort((a, b) => b.timestamp - a.timestamp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getEndedLandBids(): void {
    this.setNav(9);
    this.auctionAdService.getEndedLandBids().then(
      (res) => {
        console.log(res);
        this.endedLands = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getEndedHouseBids(): void {
    this.setNav(10);
    this.auctionAdService.getEndedHouseBids().then(
      (res) => {
        console.log(res);
        this.endedHouses = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  goToReviewLand(landDetails: DirectLand): void {
    this.router.navigate(['/reviewLand', landDetails._id]);
  }

  goToReviewHouse(houseDetails: DirectHouse): void {
    this.router.navigate(['/reviewHouse', houseDetails._id]);
  }

  goToReviewUser(userDetails: User): void {
    this.router.navigate(['/reviewUser', userDetails._id]);
  }

  goToNewAd(option: number): void {
    switch (option) {
      case 1:
        this.router.navigate(['/directLandPostByAdmin']);
        break;
      case 2:
        this.router.navigate(['/directHousePostByAdmin']);
        break;
      case 3:
        this.router.navigate(['/postAuctionLandAd']);
        break;
      case 4:
        this.router.navigate(['/postAuctionHouseAd']);
        break;
    }
  }
}
