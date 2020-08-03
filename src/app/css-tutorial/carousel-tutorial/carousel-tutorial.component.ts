import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-carousel-tutorial',
  templateUrl: './carousel-tutorial.component.html',
  styleUrls: ['./carousel-tutorial.component.scss']
})
export class CarouselTutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {
      $('.carousel').slick({
        autoplay: true,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        speed: 500,
        // fade: true,
      });
    });
  }

}
