import {Component, OnInit, ViewChild} from '@angular/core';
import {Article} from '../models/article.model';
import {NewsApiService} from '../services/news-api.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public articles: Array<Article>;

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
