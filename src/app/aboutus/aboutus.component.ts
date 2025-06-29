import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  brandStory=[];
  exp=[];
  ngOnInit(): void {
    this.apiService.getData('about').subscribe({
    next: (data) => {
      console.log('data:',data)
      this.brandStory=data.brandStory;
      this.exp=data.exp;
    },
    error: (err) => {
      console.error('API 請求失敗', err);
    }
  });
  }

}
