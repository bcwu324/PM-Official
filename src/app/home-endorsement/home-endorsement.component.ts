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
      name: '步步媽',
      link: 'https://mamibuy.com.tw/talk/article/164286',
      headShotUrl: 'assets/images/homeEndorsement/步步媽.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/步步媽作品.jpg',
      endorsementDescription:
        '我要來推薦⾃⼰好喜歡的(台北)新⽣兒攝影PM baby攝影,因為他們有跟我入住的⽉⼦中配合，在⽉⼦中⼼拍攝不僅⽅便也節省了許多時間，拍攝環境更不⽤擔⼼，也不⽤媽咪帶著⼤包⼩包的東奔西跑(超貼⼼服務),拍出來的照⽚每⼀張都好喜歡,是我們拍不到寶寶的瞬間表情,他們家的風格是很⾃然,照⽚非常溫暖~相當有溫度,也有簡單的美式風格...<<看更多>>'
    },
    {
      name: '陳思蓉',
      link: 'https://mamibuy.com.tw/talk/article/151840',
      headShotUrl: 'assets/images/homeEndorsement/陳思蓉.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/陳思蓉作品.jpg',
      endorsementDescription: '今年我多了⼀個新⾝分，也迎接了我的第⼀個寶寶所以想要幫寶寶拍個寫真作紀念將來寶寶長⼤送給她。就在不久前，我在FB上看到蔡波能在PM baby攝影拍寫真。於是我就立⾺上網搜尋他們家的作品，果然很中我的⼼，於是立⾺喬了拍照時間。由於疫情關係加上寶寶還⼩，我就選擇了到府拍攝服務。...<<看更多>>'
    },
    {
      name: '動眼神經',
      link: 'https://www.popdaily.com.tw/forum/mama/955191',
      headShotUrl: 'assets/images/homeEndorsement/動眼神經.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/動眼神經作品.jpg',
      endorsementDescription: '本來⼀直沒有很想拍寶寶寫真，因為之前看到多數的成品幾乎千篇⼀律，都是寶寶在睡覺的照片，沒什麼稀奇的，⽽且很多照片都把寶寶修得⽪膚好滑、擺飾太夢幻，看了好像假的、沒什麼靈魂。不過孩兒出⽣之後，每天都覺得他好可愛（這⼤概是每個媽媽的通病😅），所以⼜開始研究新⽣兒攝影。...<<看更多>>'
    },
    {
      name: 'B2 陳彥銘',
      link: 'https://www.facebook.com/PMphotomakeup/posts/863756150703164',
      headShotUrl: 'assets/images/homeEndorsement/yangming.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/yanphoto.jpg',
      endorsementDescription: '果然拍照當天超開心，該出動的消毒東西帶了不少，紫光燈、酒精、隔離衣…而且衣服配件東西也不少，而且每個都有保母師執照，真不錯，默默的就在歡樂的4 小時中度過啦，真是一個開心的經驗'
    },
    {
      name: '茜茜 育兒生活好好玩',
      link: 'https://www.facebook.com/permalink.php?story_fbid=3226009434189010&id=352619754861340',
      headShotUrl: 'assets/images/homeEndorsement/changchang.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/changchangPhoto.jpg',
      endorsementDescription: '攝影團隊有攝影師、攝影助理，還有專門的安撫照護師來幫寶寶換衣服、安撫，如果拍攝中途餓了還會幫忙餵奶（好貼心）'
    },
    {
      name: 'Twins 大心小心',
      link: 'https://www.facebook.com/permalink.php?id=217598935053909&story_fbid=1567195653427557',
      headShotUrl: 'assets/images/homeEndorsement/Twins大心小心.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/Twins大心小心作品.jpg',
      endorsementDescription: '攝影團隊讓人感覺放鬆，拍起照來格外自在。現在回想起當天拍攝的過程，覺得攝影師好厲害，厲害在於快門不必按得多、而是精，張張到位，被拍的我們也不會被要求擺太多POSE、可以自然的呈現。'
    },
    // {
    //   name: '茜茜 育兒生活好好玩',
    //   headShotUrl: 'assets/images/homeEndorsement/黃彥鈞黃老斯.jpg',
    //   endorsementPicUrl: 'assets/images/homeEndorsement/黃彥鈞黃老斯作品.JPG',
    //   endorsementDescription: '攝影團隊有攝影師、攝影助理，還有專門的安撫照護師來幫寶寶換衣服、安撫，如果拍攝中途餓了還會幫忙餵奶（好貼心）'
    // },
    // {
    //   name: 'Twins 大心小心',
    //   headShotUrl: 'assets/images/homeEndorsement/Aiko愛可愛生活.jpg',
    //   endorsementPicUrl: 'assets/images/homeEndorsement/Aiko愛可愛生活作品.jpg',
    //   endorsementDescription: '攝影團隊讓人感覺放鬆，拍起照來格外自在。現在回想起當天拍攝的過程，覺得攝影師好厲害，厲害在於快門不必按得多、而是精，張張到位，被拍的我們也不會被要求擺太多POSE、可以自然的呈現。'
    // },
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
