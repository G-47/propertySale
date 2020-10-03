import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuctionAdService } from "src/app/services/auction-ad.service"

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  lands = [];
  houses = [];
  selectedArray = [];
  selectedArrayIndex = 1;

  SearchForm = this.formBuilder.group({
    word: [''],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private auctionAdService: AuctionAdService) {
    this.createLand(
      "123142351336",
      "Land for Sale in Negambo",
      "Bare Land",
      "50",
      "Near to Colombo",
      "",
      [],
      ["https://www.primelands.lk/resources/893/icon.jpg","https://www.primelands.lk/resources/893/WEB-04.jpg"],
      "Negambo Road, Colombo 11",
      {"longitude":6.2074,"latitude":80.6672},
      1288323623006,
      1288323623006,
      "300000"
    );
    // this.createLand(
    //   'https://www.primelands.lk/resources/843/WEB-03.jpg',
    //   'Heaven Land in Galle',
    //   '700,000',
    //   '15',
    //   'Bare Land',
    //   'Galle',
    //   '10'
    // );
    // this.createLand(
    //   'https://www.primelands.lk/resources/834/01.jpg',
    //   'Land for sale in Weligama',
    //   '350,000',
    //   '40',
    //   'Bare Lands',
    //   'Weligama',
    //   '15'
    // );
    // this.createLand(
    //   'https://www.primelands.lk/resources/447/image1.jpg',
    //   'Green Heaven Galle',
    //   '1,000,000',
    //   '35',
    //   'Bare Land',
    //   'Galle',
    //   '18'
    // );
    // this.createLand(
    //   'https://www.primelands.lk/resources/859/image%20001.jpg',
    //   'Prime capital - Hambantota',
    //   '850,000',
    //   '80',
    //   'Coconut Land',
    //   'Hambantota',
    //   '15'
    // );
    // this.createLand(
    //   'https://www.primelands.lk/resources/855/image%20001.png',
    //   'Super Land in Walasmulla',
    //   '680,000',
    //   '40',
    //   'Cultivated Land',
    //   'Walasmulla',
    //   '12'
    // );
    // this.createLand(
    //   'https://www.primelands.lk/resources/778/image%20001.jpg',
    //   'Beautiful Land in Dickwella',
    //   '360,000',
    //   '30',
    //   'Bare Lands',
    //   'Dickwella',
    //   '20'
    // );

    // this.createHouse(
    //   'https://www.lankaad.lk/uploads/files/lk/7674/thumb-816x460-0e36fbd8797e87dea066127a93c8807f.JPG',
    //   'Luxury House in matara',
    //   '500,000',
    //   '20',
    //   'Luxury House',
    //   'Matara',
    //   '2'
    // );
    // this.createHouse(
    //   'https://www.lankapropertyweb.com/pics/335040/xthumb_424_335040_1582642645_6476.JPG.pagespeed.ic.83iRcIO4uD.jpg',
    //   'House for sale in Galle',
    //   '700,000',
    //   '15',
    //   'Luxury House',
    //   'Galle',
    //   '10'
    // );

    this.selectedArray = this.lands;
    this.selectedArrayIndex = 1;

    const x = this.selectedArray.filter((item) =>
      item.location.includes('Gal')
    );

    console.log(x);
  }

  ngOnInit(): void {}

  createLand(_id, name, type, size, description, threeSixtyImageUrl, extracts, otherImages, location, mapCordinates, startDate, endDate, startBid) {
    this.lands.push({
      _id,
      name,
      type,
      size,
      description,
      threeSixtyImageUrl,
      extracts,
      otherImages,
      location,
      mapCordinates,
      startDate,
      endDate,
      startBid
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

  openAd(arr) {
    // const isLogged = localStorage.getItem('token') !== null;

    // if (isLogged) {
      this.router.navigate(['/viewAuctionAd']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
    this.auctionAdService.setAd(arr[0]);
  }
}
