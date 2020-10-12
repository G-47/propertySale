import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
})
export class AuctionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
