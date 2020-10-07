import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuctionAdService } from "src/app/services/auction-ad.service"
import { AuctionLandAd } from "src/app/models/auctionLandAd.model"

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
  public errorMsg;
  currentDate: any;

  SearchForm = this.formBuilder.group({
    word: [''],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private auctionAdService: AuctionAdService) {
    // this.createLand(
    //   "123142351336",
    //   "Land for Sale in Negambo",
    //   "Bare Land",
    //   "50",
    //   "Near to Colombo",
    //   "",
    //   [],
    //   ["https://www.primelands.lk/resources/893/icon.jpg","https://www.primelands.lk/resources/893/WEB-04.jpg"],
    //   "Negambo",
    //   {"longitude":6.2074,"latitude":80.6672},
    //   1288323623006,
    //   1288323623006,
    //   300000.50
    // );
    // this.createHouse(
    //   "123142351336",
    //   "House for Sale in Monaragala",
    //   "Luxury House",
    //   "40",
    //   "Near to Monaragala Town. Electricity and water. Beautifull sorrounding",
    //   "",
    //   [],
    //   ["https://www.primelands.lk/resources/893/icon.jpg","https://www.primelands.lk/resources/893/WEB-04.jpg"],
    //   "Negambo",
    //   {"longitude":6.2074,"latitude":80.6672},
    //   1288323623006,
    //   1288323623006,
    //   300000,
    //   5,
    //   2
    // );
    
    // this.selectedArray = this.lands;
    // this.selectedArrayIndex = 1;

    const x = this.selectedArray.filter((item) =>
      item.location.includes('Gal')
    );

    console.log(x);
  }

  ngOnInit(): void {    
    this.selectedArrayIndex = 1;
    this.auctionAdService.getAuctionLandAd().subscribe(
      (result) => {
        console.log(result);
        this.lands = result;
        this.selectedArray = this.lands;
      },
      (error) => (this.errorMsg = error)
    );
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
      // this.router.navigate(['/viewAuctionAd']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
    if(this.selectedArrayIndex === 1){
      this.auctionAdService.setSelectedLandAd(arr);
      this.router.navigate(['/viewAuctionAd']);
    }else{
      this.auctionAdService.setSelectedHouseAd(arr[0]);
    }
  }
}
