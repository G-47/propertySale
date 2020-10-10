import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectLand } from 'src/app/models/direct-land.model';
import { User } from 'src/app/models/user.model';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-land',
  templateUrl: './view-land.component.html',
  styleUrls: ['./view-land.component.scss'],
})
export class ViewLandComponent implements OnInit {
  kirama = { lat: 6.2074, lng: 80.6672 };

  landId: string;
  land: DirectLand;
  owner: User = {} as User;

  constructor(
    private authService: AuthService,
    private advertisementService: AdvertisementService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.landId = this.activatedRoute.snapshot.paramMap.get('id');

    this.setLand(this.landId);
  }

  setOwner(id: string): void {
    this.authService.getUser(id).then(
      (res) => {
        this.owner = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setLand(id: string): void {
    this.advertisementService.getLandById(id).then(
      (res) => {
        this.land = res;
        this.setOwner(this.land.ownerId);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
