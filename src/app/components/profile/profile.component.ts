import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  lands = [];

  constructor() {
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

    const x = this.lands.filter((item) => item.location.includes('Gal'));

    console.log(x);
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

  clickhandle(){
    console.log("you fucking clicked");
  }

  ngOnInit(): void {}
}
