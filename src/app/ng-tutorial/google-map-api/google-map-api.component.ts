import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  showTaipei = true;
  addMarkerToggle = false;

  public renderOptions = {
    // suppressMarkers: true,
    polylineOptions: {
      strokeColor: 'rgba(27, 79, 250, 1)',
      strokeWeight: 5,
    }
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

    // set fitBounds false
    map.addListener('center_changed', () => {
      this.fitBounds = false;
    });

    // click
    this.mapClick(map);

    this.mapDataLayer(map);

    this.createCircle(map);

    this.mapareaControlUI(map);
  }

  mapClick(map) {
    map.addListener('click', (e) => {
      if (!this.addMarkerToggle) { return; }
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

  mapDataLayer(map) {
    // draw area
    map.data.loadGeoJson('assets/json/TaipeiCity.json');
    map.data.setStyle({
      // strokeWeight: 1,
      // strokeOpacity: .5,
      // strokeColor: '#000',
      // fillColor: '#f00',
      // fillOpacity: .15
    });

    map.data.addListener('mouseover', (event) => {
      map.data.revertStyle();
      map.data.overrideStyle(event.feature, {fillColor: '#000'});
    });

    map.data.addListener('mouseout', (event) => {
      map.data.revertStyle();
    });
  }

  mapareaControlUI(map) {
    const controlDiv = document.createElement('div');
    const areaControlUI = document.createElement('div');
    areaControlUI.style.backgroundColor = '#ccc';
    areaControlUI.style.borderRadius = '3px';
    areaControlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    areaControlUI.style.cursor = 'pointer';
    areaControlUI.style.margin = '10px';
    areaControlUI.style.textAlign = 'center';
    areaControlUI.title = '顯示/隱藏台北市區域';
    controlDiv.appendChild(areaControlUI); // Set CSS for the control interior.

    const areaControlText = document.createElement('div');
    areaControlText.style.color = 'rgb(25,25,25)';
    areaControlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    areaControlText.style.fontSize = '16px';
    areaControlText.style.lineHeight = '38px';
    areaControlText.style.paddingLeft = '5px';
    areaControlText.style.paddingRight = '5px';
    areaControlText.style.userSelect = 'none';
    areaControlText.innerHTML = '區域/關';
    areaControlUI.appendChild(areaControlText);

    areaControlUI.addEventListener('click', () => {
      this.showTaipei = !this.showTaipei;
      if (this.showTaipei) {
        areaControlText.innerHTML = '區域/關';
        areaControlUI.style.backgroundColor = '#ccc';
      } else {
        areaControlText.innerHTML = '區域/開';
        areaControlUI.style.backgroundColor = '#fff';
      }
      map.data.setStyle({visible: this.showTaipei});
    });


    // ------------------------------------------
    const markerControlUI = document.createElement('div');
    markerControlUI.style.backgroundColor = '#fff';
    markerControlUI.style.borderRadius = '3px';
    markerControlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    markerControlUI.style.cursor = 'pointer';
    markerControlUI.style.margin = '10px';
    markerControlUI.style.textAlign = 'center';
    markerControlUI.title = '開啟後新增地圖標記';
    controlDiv.appendChild(markerControlUI); // Set CSS for the control interior.

    const markerControlText = document.createElement('div');
    markerControlText.style.color = 'rgb(25,25,25)';
    markerControlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    markerControlText.style.fontSize = '16px';
    markerControlText.style.lineHeight = '38px';
    markerControlText.style.paddingLeft = '5px';
    markerControlText.style.paddingRight = '5px';
    markerControlText.style.userSelect = 'none';
    markerControlText.innerHTML = '地標/開';
    markerControlUI.appendChild(markerControlText);

    markerControlUI.addEventListener('click', () => {
      this.addMarkerToggle = !this.addMarkerToggle;
      if (this.addMarkerToggle) {
        markerControlText.innerHTML = '地標/關';
        markerControlUI.style.backgroundColor = '#ccc';
      } else {
        markerControlText.innerHTML = '地標/開';
        markerControlUI.style.backgroundColor = '#fff';
      }
    });

    // @ts-ignore TODO(jpoehnelt)
    controlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);
  }

  createCircle(map) {
    // tslint:disable-next-line: no-unused-expression
    new google.maps.Circle({
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      map,
      center: {lat: 25, lng: 121.5},
      radius: 5000,
      draggable: true,
      editable: true
    });
  }

}
