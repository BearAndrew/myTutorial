import { Component, OnInit } from '@angular/core';
// import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-google-map-api',
  templateUrl: './google-map-api.component.html',
  styleUrls: ['./google-map-api.component.scss']
})
export class GoogleMapApiComponent implements OnInit {

  markers = [];
  fitBounds = false;
  taipei101;
  president;

  public circle = {
    lat: 25,
    lng: 121.5,
    radius: 100,
    fillColor: 'rgba(194,60,172,1)'
  };

  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
        icon: 'https://i.imgur.com/7teZKif.png',
        label : {
          color: '#000000',
          fontSize: '30px',
          fontWeight: 'bold',
          text: '台北101',
        },
    },
    destination: {
        icon: 'https://i.imgur.com/7teZKif.png',
        label : {
          color: '#000000',
          fontSize: '30px',
          fontWeight: 'bold',
          text: '總統府',
        },
        infoWindow: `
        <p>總統府</p>`
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.taipei101 = {
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

    this.president = {
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
  }

  onMapReady(map) {
    console.log(map);

    // draw area
    map.data.loadGeoJson('assets/json/TaipeiCity.json');
    map.data.setStyle({
      strokeWeight: 1,
      strokeOpacity: .5,
      strokeColor: '#000',
      fillColor: '#f00',
      fillOpacity: .15
    });

    map.data.addListener('mouseover', (event) => {
      map.data.revertStyle();
      map.data.overrideStyle(event.feature, {fillColor: '#000'});
    });

    map.data.addListener('mouseout', (event) => {
      map.data.revertStyle();
    });

    // set fitBounds false
    map.addListener('center_changed', () => {
      this.fitBounds = false;
    });

    // click
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
