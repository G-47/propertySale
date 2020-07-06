import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lands = [];
  houses = [];
  selectedArray = [];
  selectedArrayIndex = 1;

  SearchForm = this.formBuilder.group({
    word: [''],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createLand(
      'https://www.primelands.lk/resources/857/image%20001.jpg',
      'Land for sale in Matara',
      '500,000',
      '20',
      'Bare Land',
      'Matara',
      '2'
    );
    this.createLand(
      'https://www.primelands.lk/resources/843/WEB-03.jpg',
      'Heaven Land in Galle',
      '700,000',
      '15',
      'Bare Land',
      'Galle',
      '10'
    );
    this.createLand(
      'https://www.primelands.lk/resources/834/01.jpg',
      'Land for sale in Weligama',
      '350,000',
      '40',
      'Bare Lands',
      'Weligama',
      '15'
    );
    this.createLand(
      'https://www.primelands.lk/resources/447/image1.jpg',
      'Green Heaven Galle',
      '1,000,000',
      '35',
      'Bare Land',
      'Galle',
      '18'
    );
    this.createLand(
      'https://www.primelands.lk/resources/859/image%20001.jpg',
      'Prime capital - Hambantota',
      '850,000',
      '80',
      'Coconut Land',
      'Hambantota',
      '15'
    );
    this.createLand(
      'https://www.primelands.lk/resources/855/image%20001.png',
      'Super Land in Walasmulla',
      '680,000',
      '40',
      'Cultivated Land',
      'Walasmulla',
      '12'
    );
    this.createLand(
      'https://www.primelands.lk/resources/778/image%20001.jpg',
      'Beautiful Land in Dickwella',
      '360,000',
      '30',
      'Bare Lands',
      'Dickwella',
      '20'
    );

    this.createHouse(
      'https://www.primelands.lk/resources/857/image%20001.jpg',
      'Land for sale in Matara',
      '500,000',
      '20',
      'Bare Land',
      'Matara',
      '2'
    );
    this.createHouse(
      'https://www.primelands.lk/resources/843/WEB-03.jpg',
      'Heaven Land in Galle',
      '700,000',
      '15',
      'Bare Land',
      'Galle',
      '10'
    );

    this.selectedArray = this.lands;
    this.selectedArrayIndex = 1;

    const x = this.selectedArray.filter((item) =>
      item.location.includes('Gal')
    );

    console.log(x);
  }

  ngOnInit(): void {}

  createLand(image, title, price, size, type, location, time) {
    this.lands.push({
      image,
      title,
      price,
      size,
      type,
      location,
      time,
    });
  }

  createHouse(image, title, price, size, type, location, time) {
    this.houses.push({
      image,
      title,
      price,
      size,
      type,
      location,
      time,
    });
  }

  changeArray(type) {
    this.SearchForm.reset();

    if (type === 'lands') {
      this.selectedArray = this.lands;
      this.selectedArrayIndex = 1;
    } else {
      this.selectedArray = this.houses;
      this.selectedArrayIndex = 2;
    }
  }

  search(form) {
    if (this.selectedArrayIndex === 1) {
      this.selectedArray = this.lands.filter((item) =>
        item.location.toLowerCase().includes(form.word.toLowerCase())
      );
    } else {
      this.selectedArray = this.houses.filter((item) =>
        item.location.toLowerCase().includes(form.word.toLowerCase())
      );
    }
  }

  openAd() {
    const isLogged = localStorage.getItem('token') !== null;

    if (isLogged) {
      this.router.navigate(['/viewAd']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
