import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  API_KEY = 'abe0302406a54cda8a3807afbcdef117';

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?language=en&apiKey=${this.API_KEY}`)
  }

  getNewsByText(text: string) {
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?q=${text}&language=en&apiKey=${this.API_KEY}`)
  }

  getArticleByTitle(selectedTitle: string) {
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?q=${selectedTitle}&language=en&apiKey=${this.API_KEY}`);
  }
}
