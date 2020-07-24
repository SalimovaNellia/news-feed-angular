import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';
import {NewsApiService} from '../../services/news-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() article: Article;

  constructor(private newsApiService: NewsApiService,
              private router: Router) { }

  ngOnInit() {
  }

}
