import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      // 400: {
      //   items: 1
      // },
      650: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      },
      1400: {
        items: 1
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
