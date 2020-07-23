import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  articles: Array<Article>;

  constructor() { }

  ngOnInit() {
  }

}
