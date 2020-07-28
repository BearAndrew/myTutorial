import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map-api',
  templateUrl: './google-map-api.component.html',
  styleUrls: ['./google-map-api.component.scss']
})
export class GoogleMapApiComponent implements OnInit {

  markers = [];

  constructor() { }

  ngOnInit(): void {
    const taipei101 = {
      position: {
        lat: 25.033671,
        lng: 121.564427
      },
      label : {
        color: '#000000',
        fontSize: '30px',
        fontWeight: 'bold',
        text: '台北101',
      },
      icon : {
        url: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
        scaledSize: {width: 45, height: 45},
      }
    };
    this.markers.push(taipei101);

    const markerPickup = {
      position: {
        lat: 25.04,
        lng: 121.511944
      },
      label : {
        color: '#000000',
        fontSize: '30px',
        fontWeight: 'bold',
        text: '總統府'
    }};
    this.markers.push(markerPickup);
  }

}
