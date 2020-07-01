import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  landTitle = "Land for sale in Matara";
  landPrice = "500,000/-";
  landSize = "20";
  landType = "Bare Land";
  landLocation = "Matara";
  postedDuration = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
