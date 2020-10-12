import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DirectHouse } from 'src/app/models/direct-house.model';
import { DirectLand } from 'src/app/models/direct-land.model';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';
import { AuctionAdService } from 'src/app/services/auction-ad.service';
import { AuctionLandAd } from 'src/app/models/auctionLandAd.model';
import { AuctionHouseAd } from 'src/app/models/auctionHouseAd.model';
import * as Moment from 'moment';

@Component({
  selector: 'app-post-auction-ad',
  templateUrl: './post-auction-ad.component.html',
  styleUrls: ['./post-auction-ad.component.scss']
})
export class PostAuctionAdComponent implements OnInit {
  PropertyTypeForm = this.formBuilder.group({
    type: ['land'],
  });

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

  HouseForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    bedRooms: ['', Validators.required],
    bathRooms: ['', Validators.required],
    locationName: ['', Validators.required],
    locationMap: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['',Validators.required],
    startBid: ['', Validators.required]
  });

  errorMessage = 'temp';
  successMessage = 'temp';

  landImages = [];
  houseImages = [];

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
    if (this.PropertyTypeForm.get('type').value === 'land') {
      this.LandForm.controls.locationMap.setValue(location);
    } else if (this.PropertyTypeForm.get('type').value === 'house') {
      this.HouseForm.controls.locationMap.setValue(location);
    }
  }

  addToImages(url): void {
    if (this.PropertyTypeForm.get('type').value === 'land') {
      this.landImages.push(url);
    } else if (this.PropertyTypeForm.get('type').value === 'house') {
      this.houseImages.push(url);
    }
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

  tryPostHouse(formData): void {
    const houseDetails: AuctionHouseAd = {
      ...formData,
      images: this.houseImages,
      startDate: new Date(formData.startDate).getTime(),
      endDate: new Date(formData.startDate).getTime()
    };
    console.log(houseDetails);
    this.advertisementService.postAuctionHouse(houseDetails).then(
      (res) => {
        // this.emailService.sendEmail(
        //   this.currentUser.email,
        //   'Lanka Properties',
        //   `Your have successfully submitted your House advertisement. Our agent will come to you soon. Your advertisement will be live after verified your House by our agent.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
        // );
      },
      (err) => {}
    );
    // this.router.navigate(['/payment']);
  }
}
