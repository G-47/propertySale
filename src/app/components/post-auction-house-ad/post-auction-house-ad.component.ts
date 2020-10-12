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
  selector: 'app-post-auction-house-ad',
  templateUrl: './post-auction-house-ad.component.html',
  styleUrls: ['./post-auction-house-ad.component.scss']
})
export class PostAuctionHouseAdComponent implements OnInit {

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
    this.HouseForm.controls.locationMap.setValue(location);
  }

  addToImages(url): void {
    this.houseImages.push(url);
  }

  tryPostHouse(formData): void {
    const houseDetails: AuctionHouseAd = {
      ...formData,
      images: this.houseImages,
      startDate: new Date(formData.startDate).getTime(),
      endDate: new Date(formData.endDate).getTime()
    };
    console.log(houseDetails);
    this.advertisementService.postAuctionHouse(houseDetails).then(
      (res) => {
        // this.emailService.sendEmail(
        //   this.currentUser.email,
        //   'Lanka Properties',
        //   `Your have successfully submitted your House advertisement. Our agent will come to you soon. Your advertisement will be live after verified your House by our agent.\n\nThis email has been sent automatically. Please do not reply this email.\n\nThank you !`
        // );
        this.gotoDashboard();
      },
      (err) => {}
    );
    // this.router.navigate(['/payment']);
  }

  gotoDashboard(): void {
    switch (this.currentUser.userType) {
      case 0:
        this.router.navigate(['/userDashboard']);
        break;

      case 1:
        this.router.navigate(['/adminDashboard']);
        break;

      case 2:
        this.router.navigate(['/managerDashboard']);
        break;
    }
  }
}
