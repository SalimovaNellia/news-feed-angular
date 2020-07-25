import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private API_KEY = 'abe0302406a54cda8a3807afbcdef117';

  constructor(private httpClient: HttpClient) { }

  public getNews(amount: number = 10, page: number = 1): Observable<Article> {
    return this.httpClient.get<Article>(`http://newsapi.org/v2/top-headlines?language=en&apiKey=${this.API_KEY}&pageSize=${amount}&page=${page}`)
  }

  public getNewsByKeyword(text: string, amount: number = 10, page: number = 1): Observable<Article> {
    return this.httpClient.get<Article>(`http://newsapi.org/v2/top-headlines?q=${text}&language=en&apiKey=${this.API_KEY}&pageSize=${amount}&page=${page}`)
  }

  public getArticleByTitle(selectedTitle: string): Observable<Article> {
    return this.httpClient.get<Article>(`http://newsapi.org/v2/top-headlines?q=${selectedTitle}&language=en&apiKey=${this.API_KEY}`);
  }
}
