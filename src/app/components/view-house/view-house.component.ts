import { DirectHouse } from './../../models/direct-house.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.scss'],
})
export class ViewHouseComponent implements OnInit {
  kirama = { lat: 6.2074, lng: 80.6672 };

  houseId: string;
  house: DirectHouse;
  owner: User = {} as User;

  constructor(
    private authService: AuthService,
    private advertisementService: AdvertisementService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  currentUser: User;

  ngOnInit(): void {
    this.houseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.currentUser = this.authService.getCurrentUser();
    this.setHouse(this.houseId);
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

  setHouse(id: string): void {
    this.advertisementService.getHouseById(id).then(
      (res) => {
        this.house = res;
        this.setOwner(this.house.ownerId);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  deleteAd(): void {
    this.advertisementService.deleteHouse(this.houseId).then(
      (res) => {
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
