import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss']
})
export class HomePortfolioComponent implements OnInit {
  portfolios = [
    { name: '新生兒寫真', url: 'assets/images/homePortfolio/新生兒寫真.jpg' },
    { name: '孕婦寫真', url: 'assets/images/homePortfolio/孕婦寫真.jpg' },
    { name: '婚禮紀錄', url: 'assets/images/homePortfolio/婚禮紀錄.jpg' },
    { name: '孕婦寫真', url: 'assets/images/homePortfolio/孕婦寫真2.jpg' },
    { name: '婚紗攝影', url: 'assets/images/homePortfolio/婚紗攝影.jpg' },
    { name: '個人藝術照', url: 'assets/images/homePortfolio/個人藝術照.jpg' },
    { name: '兒童寫真', url: 'assets/images/homePortfolio/兒童寫真.jpg' },
    { name: '全家福', url: 'assets/images/homePortfolio/全家福.jpg' },
    { name: '專業形象照', url: 'assets/images/homePortfolio/專業形象照.jpg' },
  ]
  refresh(): void {
    setTimeout(() => {
      location.reload();
    }, 100);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
