import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {
      $('.carousel').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        infinite: true,
        cssEase: 'linear',
        speed: 1500,
        fade: true,
        pauseOnHover: false,
      });
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
