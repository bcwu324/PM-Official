import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss']
})
export class HomePortfolioComponent implements OnInit {
  portfolios = [
    { name: '新生兒寫真', url: 'assets/images/homePortfolio/newBorn.jpg' },
    { name: '孕婦寫真', url: 'assets/images/homePortfolio/孕婦寫真.jpg' },
    // { name: '婚禮紀錄', url: 'assets/images/homePortfolio/婚禮紀錄.jpg' },
    { name: '孕婦寫真', url: 'assets/images/homePortfolio/孕婦寫真2.jpg' },
    { name: '婚紗攝影', url: 'assets/images/homePortfolio/婚紗攝影.jpg' },
    { name: '個人藝術照', url: 'assets/images/homePortfolio/個人藝術照.jpg' },
    { name: '兒童寫真', url: 'assets/images/homePortfolio/兒童寫真.jpg' },
    { name: '全家福', url: 'assets/images/homePortfolio/全家福.jpg' },
  ]
  refresh(): void {
    setTimeout(() => {
      location.reload();
    }, 100);
  }
  constructor() { }

  ngOnInit(): void {
  }
  openLink() {
    window.open('https://drive.google.com/drive/folders/16vySjdfK6YYYYA_tq8zw14KT7QMKzBQj?usp=share_link', '_blank');
  }

}
