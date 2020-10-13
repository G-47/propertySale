import { DirectHouse } from './../../models/direct-house.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-review-house',
  templateUrl: './review-house.component.html',
  styleUrls: ['./review-house.component.scss'],
})
export class ReviewHouseComponent implements OnInit {
  kirama = { lat: 6.2074, lng: 80.6672 };

  houseId: string;
  house: DirectHouse;
  owner: User = {} as User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private advertisementService: AdvertisementService,
    private emailService: EmailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.houseId = this.activatedRoute.snapshot.paramMap.get('id');

    this.setHouse(this.houseId);
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

  accept(id: string): void {
    this.advertisementService.acceptOrDeleteDirectHouse(id, 1).then(
      (res) => {
        console.log(res);
        this.emailService.sendEmail(
          this.owner.email,
          'Lanka Properties',
          `Your advertisement, "${this.house.title}" has been accepted by Lanka Properties. Now your advertisement is live in our web site.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
        );
        this.router.navigate(['/adminDashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  decline(id: string): void {
    this.advertisementService.acceptOrDeleteDirectHouse(id, -1).then(
      (res) => {
        console.log(res);
        this.emailService.sendEmail(
          this.owner.email,
          'Lanka Properties',
          `Your advertisement, "${this.house.title}" has been Declined by Lanka Properties.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
        );
        this.router.navigate(['/adminDashboard']);
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
