import { EmailService } from './../../services/email.service';
import { AdvertisementService } from './../../services/advertisement.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { DirectLand } from './../../models/direct-land.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-land',
  templateUrl: './review-land.component.html',
  styleUrls: ['./review-land.component.scss'],
})
export class ReviewLandComponent implements OnInit {
  kirama = { lat: 6.2074, lng: 80.6672 };

  landId: string;
  land: DirectLand;
  owner: User = {} as User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private advertisementService: AdvertisementService,
    private emailService: EmailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.landId = this.activatedRoute.snapshot.paramMap.get('id');

    this.setLand(this.landId);
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
    this.advertisementService.acceptOrDeleteDirectLand(id, 1).then(
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

  decline(id: string): void {
    this.advertisementService.acceptOrDeleteDirectLand(id, -1).then(
      (res) => {
        console.log(res);
        this.emailService.sendEmail(
          this.owner.email,
          'Lanka Properties',
          `Your advertisement, "${this.land.title}" has been declined by Lanka Properties.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
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
