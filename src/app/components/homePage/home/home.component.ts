import { AdvertisementService } from 'src/app/services/advertisement.service';
import { DirectHouse } from './../../../models/direct-house.model';
import { DirectLand } from './../../../models/direct-land.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lands: DirectLand[] = [];
  houses: DirectHouse[] = [];
  selectedArray = [];
  selectedArrayName = 'lands';

  SearchForm = this.formBuilder.group({
    word: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private advertisementService: AdvertisementService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setHouses();
    this.setLands();

    setTimeout(() => {
      this.selectedArray = this.lands;
    }, 500);
    this.selectedArrayName = 'lands';
  }

  changeArray(type): void {
    this.SearchForm.reset();

    if (type === 'lands') {
      this.selectedArray = this.lands;
      this.selectedArrayName = 'lands';
    } else {
      this.selectedArray = this.houses;
      this.selectedArrayName = 'houses';
    }
  }

  search(form): void {
    if (this.selectedArrayName === 'lands') {
      this.selectedArray = this.lands.filter((item) =>
        item.locationName.toLowerCase().includes(form.word.toLowerCase())
      );
    } else if (this.selectedArrayName === 'houses') {
      this.selectedArray = this.houses.filter((item) =>
        item.locationName.toLowerCase().includes(form.word.toLowerCase())
      );
    }
  }

  openAd(): void {
    const isLogged = localStorage.getItem('token') !== null;

    if (isLogged) {
      this.router.navigate(['/viewAd']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  setLands(): void {
    this.advertisementService.getDirectLands(1).then(
      (res) => {
        this.lands = res;
        console.log(this.lands);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setHouses(): void {
    this.advertisementService.getDirectHouses(1).then(
      (res) => {
        this.houses = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
