import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  API_KEY = 'abe0302406a54cda8a3807afbcdef117';

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`)
  }
}
