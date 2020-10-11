import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DirectHouse } from 'src/app/models/direct-house.model';
import { DirectLand } from 'src/app/models/direct-land.model';
import { User } from 'src/app/models/user.model';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-direct-land-post-by-admin',
  templateUrl: './direct-land-post-by-admin.component.html',
  styleUrls: ['./direct-land-post-by-admin.component.scss'],
})
export class DirectLandPostByAdminComponent implements OnInit {
  LandForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    type: ['Bare Land'],
    size: ['', Validators.required],
    price: ['', Validators.required],
    locationName: ['', Validators.required],
    locationMap: ['', Validators.required],
  });

  errorMessage = 'temp';
  successMessage = 'temp';

  landImages = [];

  // currentUser: User;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private advertisementService: AdvertisementService,
    private authService: AuthService
  ) {
    // this.currentUser = authService.getCurrentUser();
  }

  ngOnInit(): void {}

  setLocationMap(location): void {
    this.LandForm.controls.locationMap.setValue(location);
  }

  addToImages(url): void {
    this.landImages.push(url);
  }

  tryPostLand(formData): void {
    const landDetails: DirectLand = {
      ...formData,
      images: this.landImages,
      isFromOwner: true,
      status: 1,
    };
    console.log(landDetails);
    this.advertisementService.postDirectLand(landDetails).then(
      (res) => {
        this.router.navigate(['/adminDashboard']);
      },
      (err) => {}
    );
  }
}
