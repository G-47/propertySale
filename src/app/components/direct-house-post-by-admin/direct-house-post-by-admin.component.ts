import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DirectHouse } from 'src/app/models/direct-house.model';
import { DirectLand } from 'src/app/models/direct-land.model';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-direct-house-post-by-admin',
  templateUrl: './direct-house-post-by-admin.component.html',
  styleUrls: ['./direct-house-post-by-admin.component.scss'],
})
export class DirectHousePostByAdminComponent implements OnInit {
  HouseForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    bedRooms: ['', Validators.required],
    bathRooms: ['', Validators.required],
    price: ['', Validators.required],
    locationName: ['', Validators.required],
    locationMap: ['', Validators.required],
  });

  errorMessage = 'temp';
  successMessage = 'temp';

  houseImages = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private advertisementService: AdvertisementService
  ) {}

  ngOnInit(): void {}

  setLocationMap(location): void {
    this.HouseForm.controls.locationMap.setValue(location);
  }

  addToImages(url): void {
    this.houseImages.push(url);
  }

  tryPostHouse(formData): void {
    const houseDetails: DirectHouse = {
      ...formData,
      images: this.houseImages,
      isFromOwner: true,
      status: 1,
    };
    console.log(houseDetails);
    this.advertisementService.postDirectHouse(houseDetails).then(
      (res) => {
        this.router.navigate(['/adminDashboard']);
      },
      (err) => {}
    );
  }
}
