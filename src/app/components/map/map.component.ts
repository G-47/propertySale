import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  @Input() inputPlace: { lat: number, lng: number };

  kirama = {lat: 6.2074, lng: 80.6672};
  sriLanka = {lat: 7.876191398729394, lng: 80.71122911861849 };

  place: {lat: number, lng: number};
  markerOptions: {draggable: boolean};
  markerPosition: google.maps.LatLngLiteral;
  zoom: number;

  constructor() {
    console.log(this.place);
  }

  ngOnInit(): void {
    console.log(this.place);
    if (this.inputPlace === undefined){
      this.place = this.sriLanka;
      this.zoom = 8;
      this.markerOptions = {draggable: true};
    } else {
      this.place = this.inputPlace;
      this.zoom = 15;
      this.markerOptions = {draggable: false};
      this.markerPosition = this.place as google.maps.LatLngLiteral;
    }
  }

  setMarker(event: google.maps.MouseEvent): void {
    if (this.inputPlace === undefined){
      this.markerPosition = event.latLng.toJSON();
      console.log(this.markerPosition);
    }
  }

  openInfoWindow(marker: MapMarker): void {
    this.infoWindow.open(marker);
  }

}
