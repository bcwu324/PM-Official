import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // 匯入 HttpClient
import { Observable } from 'rxjs';  // 匯入 Observable，用來回傳資料流
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private baseUrl = 'https://k48kr84wr6.execute-api.ap-southeast-1.amazonaws.com/dev'; 
  private baseUrl = 'https://t6vp59bn69.execute-api.ap-southeast-1.amazonaws.com/dev'; 

  constructor(private http: HttpClient) { }

    // GET 請求
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

      // PUT 請求
  putData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, { headers });
  }

}
