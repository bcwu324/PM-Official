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
    {
      name: 'Aiko',
      link: 'https://www.facebook.com/130573260308437/posts/2873789129320156/?d=n',
      headShotUrl: 'assets/images/homeEndorsement/Aiko愛可愛生活.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/Aiko愛可愛生活作品.jpg',
      endorsementDescription: '今天翻到當時在 御兒軒產後護理之家，他們配合的寶寶攝影PM studio｜攝影工作室，他們拍好的照片放在資料夾竟然一直忘了發給你們看！！！除了可愛的寶寶寫真，爹娘也入鏡真的很值得紀念，最重要的是有把我們拍瘦，不然產後爹娘真的都好胖，哭哭～而且閃亮拍了好多造型都可愛到爆炸！...<<看更多>>'
    },
    {
      name: '翻白眼太太',
      link: 'https://www.facebook.com/643927388977722/posts/3086923994678037/?d=n',
      headShotUrl: 'assets/images/homeEndorsement/翻白眼太太.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/翻白眼太太作品.jpg',
      endorsementDescription: '現在月子中心的加值服務非常豐富，也不過三年半沒生小孩都不知道世界這麼進步了XDDD只要住在御兒軒就有贈送嬰兒寫真一張還有嬰兒證件照，其他照片也都能再加購， PM baby 攝影 他們的攝影師跟安撫師都擁有保姆執照， 會將寶撫再進行拍攝，使用在寶寶身上的道具都會用紫外線燈消毒，全套的防護拍攝完也不需要母嬰同室呢...<<看更多>>'
    },
    {
      name: '爸媽請放心',
      link: 'https://othuang777.pixnet.net/blog/post/360190038-%e5%b0%8f%e6%ab%bb%e6%a1%83%e7%9a%84%e7%8f%8d%e8%b2%b4%e7%9a%84%e5%af%b6%e5%af%b6%e5%af%ab%e7%9c%9f',
      headShotUrl: 'assets/images/homeEndorsement/爸媽請放心.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/爸媽請放心作品.jpg',
      endorsementDescription: '因為我們所住的後兒軒產後護理之家有配合新生兒寫真的服務，一入住時就要決定可以拍攝的時間，對後就滿心期著那天的到。...<<看更多>>'
    },
    {
      name: '黃彥鈞 黃老斯',
      link: 'https://www.facebook.com/969640466409294/posts/4601777209862250/?d=n',
      headShotUrl: 'assets/images/homeEndorsement/huang.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/huang2.jpg',
      endorsementDescription: '小櫻桃🍒Day18的全家福👪有她小公主的模樣、有灰姑娘的模樣（就是最後一張證件照啦），也有爸爸媽媽初為人父人母的樣子。這些珍貴的回憶，希望她可以看到100歲❤️攝影團隊是 #新生兒寫真 界很有名的 PM baby 攝影，團隊每個人都有 #保母證書（超厲害！）不僅是拍照，哄小孩技巧也高超到嚇到我們👍有人問寶寶這麼小能帶出門拍攝嗎？不不不，其實床就可以變成攝影棚唷！...<<看更多>>'
    },
    {
      name: 'jennleelover',
      link: 'https://www.instagram.com/p/COaDTuIprIs/?utm_medium=share_sheet',
      headShotUrl: 'assets/images/homeEndorsement/jennleelover.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/jennleelover作品.jpg',
      endorsementDescription: '前一陣子陸續發布的寶寶照片，是我們跟 @newbornpm 在月子中心拍的。這次的拍攝經驗非常棒，他們是非常專業的寶寶拍攝團隊，很懂寶寶的習性，要怎麼取角度跟哄寶寶，讓寶寶感到平靜，這讓我格外安心。拍攝前我們先把想要的風格告訴他們，來了以後直接在房間取景，快狠準，不囉嗦直接到位的風格很中我的喜好！...<<看更多>>'
    },
    {
      name: '蔡波能成長日記',
      link: 'https://www.youtube.com/watch?v=fGfL1U0mSXw',
      headShotUrl: 'assets/images/homeEndorsement/蔡阿嘎.jpg',
      endorsementPicUrl: 'assets/images/homeEndorsement/蔡阿嘎作品.jpg',
      endorsementDescription: '新生兒寫真拍起來，連拍一個多小時都沒生氣！...<<看更多>>'
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
