import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  lands = [];
  constructor(private formBuilder: FormBuilder) {
    this.createLand(
      'https://www.primelands.lk/resources/753/FB%20zone%205_04.jpg',
      'Prime capital - Hambantota',
      '850,000',
      '80',
      'Coconut Land',
      'Hambantota',
      '15'
    );
    this.createLand(
      'https://www.primelands.lk/resources/659/Kirindiwela.jpg',
      'Super Land in Walasmulla',
      '680,000',
      '40',
      'Cultivated Land',
      'Walasmulla',
      '12'
    );
    this.createLand(
      'https://www.primelands.lk/resources/857/image%20003.jpg',
      'Beautiful Land in Dickwella',
      '360,000',
      '30',
      'Bare Lands',
      'Dickwella',
      '20'
    );
    this.createLand(
      'https://www.primelands.lk/resources/493/image-2.jpg',
      'Land in Matara',
      '500,000',
      '20',
      'Bare Land',
      'Matara',
      '2'
    );
    this.createLand(
      'https://www.primelands.lk/resources/842/lot-002.jpg',
      'Heaven Land in Galle',
      '700,000',
      '15',
      'Bare Land',
      'Galle',
      '10'
    );
    this.createLand(
      'https://www.primelands.lk/resources/440/image1.jpg',
      'Land in Weligama',
      '350,000',
      '40',
      'Bare Lands',
      'Weligama',
      '15'
    );
    this.createLand(
      'https://www.primelands.lk/resources/440/image2.jpg',
      'Green Heaven Galle',
      '1,000,000',
      '35',
      'Bare Land',
      'Galle',
      '18'
    );
   }

  ngOnInit(): void {
  }

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

}
