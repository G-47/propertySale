import { AdvertisementService } from './../../services/advertisement.service';
import { DirectLand } from './../../models/direct-land.model';
import { DirectHouse } from './../../models/direct-house.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss'],
})
export class PostAdComponent implements OnInit {
  PropertyTypeForm = this.formBuilder.group({
    type: ['land'],
  });

  LandForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    type: ['Bare Land'],
    size: ['', Validators.required],
    price: ['', Validators.required],
    locationName: ['', Validators.required],
    locationMap: ['', Validators.required],
  });

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

  landImages = [];
  houseImages = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private advertisementService: AdvertisementService
  ) {}

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
    const landDetails: DirectLand = {
      ...formData,
      images: this.landImages,
      inFromOwner: false,
      status: 0,
    };
    console.log(landDetails);
    this.advertisementService.postDirectLand(landDetails);
    this.router.navigate(['/payment']);
  }

  tryPostHouse(formData): void {
    const houseDetails: DirectHouse = {
      ...formData,
      images: this.houseImages,
      inFromOwner: false,
      status: 0,
    };
    console.log(houseDetails);
    this.advertisementService.postDirectHouse(houseDetails);
    this.router.navigate(['/payment']);
  }
}
