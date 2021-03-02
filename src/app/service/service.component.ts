import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() {
  }
  services = [
    {
      img: "assets/images/service/servicePhoto/new born/invalid-name@2x.png",
      name: '新 生 兒 寫 真',
      price: 'NT$9,800',
      list01: ['精修 10 張電子檔', '贈 USB 一個', '拍攝造型套數 2~5 套 (視寶寶狀態而定)', '全程由專業保母證照的寶寶安撫師協助拍攝', '父母可以免費入鏡 (不含妝髮)', '拍攝地點於 PM 室內攝影棚'],
      note: '如需到府服務(含月子中心)須外團隊外出費用 $2,000 台北市以外地區及無電梯大樓車馬費另外報價',
      plusItem: '加購項目',
      list02: ['大寶合照 $500/位', '雙胞胎加價 $1,000', '三胞胎加價 $2,000', '精修電子檔 $800/張', '6x6 吋精緻相本(含盒子) $2,000', '假日拍攝需加價開棚費 $1,000元'],

    },
    {
      img: "assets/images/service/servicePhoto/children/copy@2x.png",
      name: '兒 童 寫 真',
      price: 'NT$10,800',
      list01: ['精修 15 張電子檔', '贈 5x7 桌框一個', '贈 USB 一個', '拍攝 2~3 套自備服裝', '拍攝方案以一位寶貝為主', '拍攝地點於 PM 室內攝影棚'],
      note: '',
      plusItem: '加購項目',
      list02: ['精修電子檔 $800/張', '6X8 吋相本(含盒子) $3,000', '假日拍攝需加價開棚費 $1,000', '如需增加拍攝人數：大人 $1,000/位，小孩 $500/位 (皆不含妝髮)'],

    },
    {
      img: "assets/images/service/servicePhoto/pregnant/copy-2@2x.png",
      name: '孕 媽 咪 寫 真',
      price: 'NT$11,800',
      list01: ['精修 18 張電子檔', '贈 USB 乙個', '提供一套孕婦裝及一個造型妝髮', '可另外自備一至兩套服裝', '適用於孕期 30-36 週的孕媽咪', '拍攝地點於 PM 室內攝影棚'],
      note: '',
      plusItem: '加購項目',
      list02: ['精修電子檔 $800/張', '6X8 吋相本(含盒子) $3,000', '假日拍攝需加價開棚費 $1,000', '如需增加拍攝人數：大人 $1,000/位，小孩 $500/位 (皆不含妝髮)'],

    },
    {
      img: "assets/images/service/servicePhoto/family/copy-3@2x.png",
      name: '全 家 福',
      price: 'NT$12,800',
      list01: ['精修 18 張電子檔', '贈 USB 乙個', '適用於一個 3-4 人小家庭', '拍攝畫面採自然風格，請著淡雅妝髮即可', '拍攝地點於 PM 室內攝影棚'],
      note: '',
      plusItem: '加購項目',
      list02: ['精修電子檔 $800/張', '增加拍攝人數：大人 $1,000/位；小孩 $500/位', '妝髮費用：大人 $2,000/位(淡妝自然髮型)；小孩 $500/位', '團隊外景拍攝費用 $2,000', '台北市以外，車馬費另計', '假日拍攝需加價開棚費 $1,000'],

    },
    {
      img: "assets/images/service/servicePhoto/professional/copy-4@2x.png",
      name: '專 業 形 象 照',
      price: 'NT$5,000',
      list01: ['精修 5 張電子檔 (雲端傳檔交件)', '拍攝一套服裝', '拍攝時間為 30-60 分鐘', '棚內素色背景拍攝', '於 PM 室內素色背景攝影棚拍攝', '精修範圍為身形及膚況，恕不做合成'],
      note: '如有特殊形象照用途需求，如特殊場景及道具等，須事前溝通後另外報價',
      plusItem: '加購項目',
      list02: ['精修電子檔 $800/張', '如需預約公司團隊專業形象照，請聯絡我們', '假日拍攝需加價開棚費 $1,000', '增加拍攝人數 $ 1,000 / 名 (不含妝髮)', '妝髮造型 $ 2,000 / 名 (淡妝自然髮型)'],

    },
    {
      img: "assets/images/service/servicePhoto/art/copy-5@2x.png",
      name: '藝 術 照',
      price: 'NT$10,800',
      list01: ['精修 18 張電子檔', '贈 USB 乙個', '提供一個造型妝髮', '自備 1-2 套服裝，無提供禮服', '拍攝地點於 PM 室內攝影棚'],
      note: '',
      plusItem: '加購項目',
      list02: ['精修電子檔 $800/張', '增加拍攝人數 $1,000/位', '妝髮費用 $2,000/位 (淡妝自然髮型)', '團隊外景拍攝費用 $2,000，車馬費另計', '假日拍攝需加價開棚費 $1,000'],

    },
    {
      img: "assets/images/service/servicePhoto/wedding/copy-6@2x.png",
      name: '婚 紗 攝 影',
      price: 'NT$42,000',
      list01: ['拍攝時間為 8hr (不含梳化時間)', '新娘整體造型 3 款', '新郎造型 1 款', '精修照片 30 張', '皮革相本 1 本', '風格調色檔案 USB 交件', '造型師全程跟外', '包含 PM 室內攝影棚'],
      note: '',
      plusItem: '加購項目',
      list02: ['拍攝超時 1 小時 $3000', '精修電子檔 $800/張'],

    },

    {
      img: "assets/images/service/servicePhoto/pmWedding/copy-7@2x.png",
      name: '蒂 米 琪 x PM 婚紗 拍 攝',
      price: 'NT$58,000',
      list01: ['拍攝時間為 8hr (不含梳化時間)', '新娘拍照款禮服 3 套', '新郎拍照款西服 1 套', '新娘整體造型 3 款', '新郎整體造型 1 套', '精修照片 30 張', '皮革相本 1 本', '放大框或桌框 1 個', '風格調色檔案 USB 交件'],
      note: '',
      plusItem: '加購項目',
      list02: ['拍攝超時 1 小時 $3000'],

    },
    {
      img: "assets/images/service/servicePhoto/weddingMemory/copy-8@2x.png",
      name: '婚 禮 紀 錄 ｜ 雙 機 拍 攝',
      price: '',
      list01: ['5hr 單儀式 or 單宴客 NT$20,000', '8hr 早儀式+午宴 NT$28,000', '12hr 早儀式+晚宴 NT$30,000', '全數調色檔案 USB 交件'],
      note: '',
      plusItem: '加購項目',
      list02: ['超時 $3000/1hr', '相本加購費用 $2,000-$5,000 （依尺寸、頁數，費用不同）'],
    },
    {
      img: "assets/images/service/servicePhoto/oneYearParty/copy-9@2x.png",
      name: '週 歲 派 對 攝 影 紀 錄',
      price: '',
      list01: ['3hr 純平面拍攝', '全數調色檔案約 60-80 張（雲端傳檔交件）', '12hr 早儀式+晚宴 NT$30,000', '全數調色檔案 USB 交件'],
      note: '',
      plusItem: '加購項目',
      list02: ['超時 $3000/1hr ( 超過 30 分鐘以 1 小時計算 )', '相本加購費用 $2,000-$5,000（依尺寸、頁數，費用不同）'],
    },
  ]

  ngOnInit(): void {
  }

}



