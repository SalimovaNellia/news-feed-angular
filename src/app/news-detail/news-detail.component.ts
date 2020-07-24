import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article.model';
import {ActivatedRoute, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NewsApiService} from '../services/news-api.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  subscription:  Subscription;
  selectedTitle: string;
  public selectedArticle: Article;

  constructor(private route: ActivatedRoute,
              private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      this.newsApiService.getArticleByTitle(this.selectedTitle).subscribe(data => {
        this.selectedArticle = data['articles'][0];
      });
    });
  }

}
