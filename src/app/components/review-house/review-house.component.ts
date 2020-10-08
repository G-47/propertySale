import { DirectHouse } from './../../models/direct-house.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  house: DirectHouse;
  owner: User = {} as User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private advertisementService: AdvertisementService,
    private emailService: EmailService
  ) {
    this.house = this.router.getCurrentNavigation().extras.state as DirectHouse;
    console.log(this.house);

    this.setOwner(this.house.ownerId);
  }

  setOwner(id: string): void {
    this.authService.getUser(id).then(
      (res) => {
        this.owner = res.user as User;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  accept(id: string): void {
    this.advertisementService.acceptDirectHouse(id).then(
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

  ngOnInit(): void {}

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
