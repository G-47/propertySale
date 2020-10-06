import { DirectLand } from './../../../models/direct-land.model';
import { AdvertisementService } from './../../../services/advertisement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private advertisementService: AdvertisementService) {}

  nav = 1;

  setNav(n): void {
    this.nav = n;
  }

  ngOnInit(): void {
    let lands = [] as DirectLand[];
    this.advertisementService.getDirectLands(0).then(
      (res) => {
        lands = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
