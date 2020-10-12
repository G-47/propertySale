import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuctionHouseAd } from 'src/app/models/auctionHouseAd.model';
import { AuctionLandAd } from 'src/app/models/auctionLandAd.model';
import { AuctionAdService } from 'src/app/services/auction-ad.service';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-post-auction-land-ad',
  templateUrl: './post-auction-land-ad.component.html',
  styleUrls: ['./post-auction-land-ad.component.scss']
})
export class PostAuctionLandAdComponent implements OnInit {

  LandForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    type: ['Bare Land'],
    size: ['', Validators.required],
    locationName: ['', Validators.required],
    locationMap: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['',Validators.required],
    startBid: ['', Validators.required]
  });

  errorMessage = 'temp';
  successMessage = 'temp';

  landImages = [];

  currentUser: User;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private advertisementService: AuctionAdService,
    private emailService: EmailService,
    private authService: AuthService
  ) {
    this.currentUser = authService.getCurrentUser();
  }

  ngOnInit(): void {}

  setLocationMap(location): void {
    this.LandForm.controls.locationMap.setValue(location);
  }

  addToImages(url): void {
    this.landImages.push(url);
  }

  tryPostLand(formData): void {
    const landDetails: AuctionLandAd = {
      ...formData,
      images: this.landImages,
      startDate: new Date(formData.startDate).getTime(),
      endDate: new Date(formData.startDate).getTime()
    };
    console.log(landDetails);
    this.advertisementService.postAuctionLand(landDetails).then(
      (res) => {
        // this.emailService.sendEmail(
        //   this.currentUser.email,
        //   'Lanka Properties',
        //   `Your have successfully submitted your Land advertisement. Our agent will come to you soon. Your advertisement will be live after verified your land by our agent.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
        // );
      },
      (err) => {}
    );
    // this.router.navigate(['/payment']);
  } 

}
