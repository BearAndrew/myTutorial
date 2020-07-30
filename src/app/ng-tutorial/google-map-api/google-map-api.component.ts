import { Component, OnInit } from '@angular/core';
// import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-google-map-api',
  templateUrl: './google-map-api.component.html',
  styleUrls: ['./google-map-api.component.scss']
})
export class GoogleMapApiComponent implements OnInit {

  markers = [];
  fitBounds = true;

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

  onMapReady(map) {
    console.log(map);

    map.addListener('center_changed', () => {
      this.fitBounds = false;
    });

    this.mapClick(map);
  }

  mapClick(map) {
    map.addListener('click', (e) => {
      // console.log(e);
      const coords = e.latLng.toString().replace(/\(|\)/g, '').split(/,/);
      console.log(coords);
      this.markers.push({
        position: {
          lat: coords[0],
          lng: coords[1]
        },
        draggable: true,
        animation: 'BOUNCE'
      });
    });
  }
}
