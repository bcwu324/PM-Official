import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  brandStory = [];
  exp = [];
  // expDefault=[
  //   "從創辦以來,已有數品牌月子照護中心及知名人士與PM baby合作,透過專業攝影相關技術與進修嬰兒照護知識,提升攝影業也能滿足服務理念,紀錄初生的美好 近年整合PM baby(新生兒攝影)&PM Studio(婚紗人像攝影)",
  //   "品牌風格清晰化,持續為影像注入當代溫度,更希望藉由攝影,創意及造型的力量,堅持美感及藝術 實現愛的影像瞬間,創造生命的回憶,回憶永久留存",
  //   "從事人像攝影工作20年, 我們擅於人物,形象、新生兒、婚紗、婚禮，和家庭親子寫真",
  //   "攝影產業並非開膜後能做上千萬相同的產品,現今流行app攝影修圖,困難可貴的新生兒攝影,充滿溫度的作品渲染,透過相互溝通與尊重,一同創造,數十年後,這經典影像紀錄,能再次感動全家人"
  // ]
  qa = [];
  constructor(private apiService: ApiService) { }

  trackByIndex(index: number, item: any): number {
  return index;
}

  updateBrandStory(body) {
    console.log('body', body);
    // return
    this.apiService.putData('about', { brandStory: body, exp: this.exp }).subscribe({
      next: (res) => {
        console.log('BrandStory data updated successfully:', res);
      },
      error: (err) => {
        console.error('API 請求失敗', err);
      },
      complete: () => {
        console.log('Update request completed.');
      }
    });
  }
  updateExp(body) {
    console.log('body', body);
    // return
    this.apiService.putData('about', { brandStory: this.brandStory, exp: body }).subscribe({
      next: (res) => {
        console.log('Exp data updated successfully:', res);
      },
      error: (err) => {
        console.error('API 請求失敗', err);
      },
      complete: () => {
        console.log('Update request completed.');
      }
    });
  }

  updateQa(body) {
    console.log('body', body);
    // return
    this.apiService.putData('qAndA', { data: body }).subscribe({
      next: (res) => {
        console.log('Q&A data updated successfully:', res);
      },
      error: (err) => {
        console.error('API 請求失敗', err);
      },
      complete: () => {
        console.log('Update request completed.');
      }
    });
  }

  ngOnInit(): void {
    this.apiService.getData('about').subscribe({
      next: (data) => {
        console.log('data:', data);
        this.brandStory = data.brandStory;
        this.exp = data.exp;
      },
      error: (err) => {
        console.error('API 請求失敗', err);
      }
    });

    this.apiService.getData('qAndA').subscribe({
      next: (data) => {
        this.qa = data;
        console.log(data)
      },
      error: (err) => {
        console.error('API 請求失敗', err);
      }
    });





  }

}
