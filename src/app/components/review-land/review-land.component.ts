import { EmailService } from './../../services/email.service';
import { AdvertisementService } from './../../services/advertisement.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { DirectLand } from './../../models/direct-land.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-land',
  templateUrl: './review-land.component.html',
  styleUrls: ['./review-land.component.scss'],
})
export class ReviewLandComponent implements OnInit {
  kirama = { lat: 6.2074, lng: 80.6672 };
  land: DirectLand;
  owner: User = {} as User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private advertisementService: AdvertisementService,
    private emailService: EmailService
  ) {
    this.land = this.router.getCurrentNavigation().extras.state as DirectLand;
    console.log(this.land);

    this.setOwner(this.land.ownerId);
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
    this.advertisementService.acceptDirectLand(id).then(
      (res) => {
        console.log(res);
        this.emailService.sendEmail(
          this.owner.email,
          'Lanka Properties',
          `Your advertisement, "${this.land.title}" has been accepted by Lanka Properties. Now your advertisement is live in our web site.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
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
