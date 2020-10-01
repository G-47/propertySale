import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss'],
})
export class DirectComponent implements OnInit {
  constructor() {}

  kirama = {lat: 6.2074, lng: 80.6672};

  ngOnInit(): void {}

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
