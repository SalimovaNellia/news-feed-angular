import {Component, OnInit, ViewChild} from '@angular/core';
import {Article} from '../models/article.model';
import {NewsApiService} from '../services/news-api.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private newsApiService: NewsApiService) { }

  public articles: Array<Article>;

  public searchForm = new FormGroup({
    searchInput: new FormControl('')
  });


  ngOnInit() {
    this.newsApiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
      console.log(this.articles);
    });
  }

  getNewsByText() {
    if (this.searchForm.controls.searchInput.value) {
      this.newsApiService.getNewsByText(this.searchForm.controls.searchInput.value).subscribe((data) => {
        this.articles = data['articles'];
        console.log(this.articles);

      })
    }
  }
}
