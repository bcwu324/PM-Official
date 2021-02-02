import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-endorsement',
  templateUrl: './home-endorsement.component.html',
  styleUrls: ['./home-endorsement.component.scss']
})
export class HomeEndorsementComponent implements OnInit {

  constructor() { }
  endorsements = [
    {
      name: 'B2 陳彥銘',
      headShotUrl: 'assets/images/homePortfolio/個人藝術照.jpg',
      endorsementPicUrl: 'assets/images/homePortfolio/新生兒寫真.JPG',
      endorsementDescription: '果然拍照當天超開心，該出動的消毒東西帶了不少，紫光燈、酒精、隔離衣…而且衣服配件東西也不少，而且每個都有保母師執照，真不錯，默默的就在歡樂的4 小時中度過啦，真是一個開心的經驗'
    },
    {
      name: '茜茜 育兒生活好好玩',
      headShotUrl: 'assets/images/homePortfolio/個人藝術照.jpg',
      endorsementPicUrl: 'assets/images/homePortfolio/新生兒寫真.JPG',
      endorsementDescription: '攝影團隊有攝影師、攝影助理，還有專門的安撫照護師來幫寶寶換衣服、安撫，如果拍攝中途餓了還會幫忙餵奶（好貼心）'
    },
    {
      name: 'Twins 大心小心',
      headShotUrl: 'assets/images/homePortfolio/個人藝術照.jpg',
      endorsementPicUrl: 'assets/images/homePortfolio/新生兒寫真.JPG',
      endorsementDescription: '攝影團隊讓人感覺放鬆，拍起照來格外自在。現在回想起當天拍攝的過程，覺得攝影師好厲害，厲害在於快門不必按得多、而是精，張張到位，被拍的我們也不會被要求擺太多POSE、可以自然的呈現。'
    },
    {
      name: '茜茜 育兒生活好好玩',
      headShotUrl: 'assets/images/homePortfolio/個人藝術照.jpg',
      endorsementPicUrl: 'assets/images/homePortfolio/新生兒寫真.JPG',
      endorsementDescription: '攝影團隊有攝影師、攝影助理，還有專門的安撫照護師來幫寶寶換衣服、安撫，如果拍攝中途餓了還會幫忙餵奶（好貼心）'
    },
    {
      name: 'Twins 大心小心',
      headShotUrl: 'assets/images/homePortfolio/個人藝術照.jpg',
      endorsementPicUrl: 'assets/images/homePortfolio/新生兒寫真.JPG',
      endorsementDescription: '攝影團隊讓人感覺放鬆，拍起照來格外自在。現在回想起當天拍攝的過程，覺得攝影師好厲害，厲害在於快門不必按得多、而是精，張張到位，被拍的我們也不會被要求擺太多POSE、可以自然的呈現。'
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
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
        items: 2
      },
      760: {
        items: 2
      },
      1000: {
        items: 3
      },
      1400: {
        items: 4
      }
    },
    nav: false
  }


  ngOnInit(): void {
  }

}
