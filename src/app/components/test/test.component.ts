import {Component, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  center = {lat: 6, lng: 79};
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 10;
  display?: google.maps.LatLngLiteral;

  constructor() {}

  ngOnInit(): void {
  }

  addMarker(event: google.maps.MouseEvent): void {
    this.markerPositions.push(event.latLng.toJSON());
    console.log(event.latLng);
  }

  move(event: google.maps.MouseEvent): void {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker): void {
    this.infoWindow.open(marker);
  }

  removeLastMarker(): void {
    this.markerPositions.pop();
  }
}
