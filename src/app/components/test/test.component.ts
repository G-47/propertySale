import {Component, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  kirama = {lat: 6.207518008065241, lng: 80.66704548390341};

  constructor() {}

  ngOnInit(): void {
  }



}
