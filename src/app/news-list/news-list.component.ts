import {Component, OnInit, ViewChild} from '@angular/core';
import {Article} from '../models/article.model';
import {NewsApiService} from '../services/news-api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private newsApiService: NewsApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  public articles: Array<Article>;
  public keyWord: string;

  public searchForm = new FormGroup({
    searchInput: new FormControl('')
  });


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['keyword']) {
        this.keyWord = params['keyword'];
        this.newsApiService.getNewsByText(this.keyWord).subscribe(data => {
          this.articles = data['articles'];
          console.log(this.articles);
        });
      } else {
        this.newsApiService.getNews().subscribe((data) => {
          this.articles = data['articles'];
          console.log(this.articles);
        });
      }
    });


  }


  getNewsByText() {
    if (this.searchForm.controls.searchInput.value) {
      this.newsApiService.getNewsByText(this.searchForm.controls.searchInput.value).subscribe((data) => {
        this.articles = data['articles'];
        this.router.navigate(['news', this.searchForm.controls.searchInput.value]);
      });
    }
  }
}
