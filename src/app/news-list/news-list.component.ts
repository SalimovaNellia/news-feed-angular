import {Component, OnInit, ViewChild} from '@angular/core';
import {Article} from '../model/article.model';
import {NewsApiService} from '../services/news-api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator} from '@angular/material';
import {PageEvent} from '@angular/material/typings/esm5/paginator';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false})
  paginator: MatPaginator;

  constructor(private newsApiService: NewsApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  public articles: Array<Article> = [];
  public keyWord: string;
  public articlesAmount: number;
  public pageIndex: number = 1;
  public articlesPerPage: number = 10;

  public searchForm = new FormGroup({searchInput: new FormControl('')});

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.activatedRoute.params.subscribe(params => {
      if (params['keyword']) {

        this.keyWord = params['keyword'];

        this.newsApiService.getNewsByKeyword(this.keyWord, this.articlesPerPage, this.pageIndex).subscribe(data => {
          this.articles = data['articles'];
          this.articlesAmount = data['totalResults'];
        });
      } else {
        this.newsApiService.getNews(this.articlesPerPage, this.pageIndex).subscribe((data) => {
          this.articles = data['articles'];
          this.articlesAmount = data['totalResults'];
        });
      }
    });
  }

  getNewsByText() {
    const inputValue = this.searchForm.controls.searchInput.value;

    if (inputValue) {
      this.newsApiService.getNewsByKeyword(inputValue).subscribe((data) => {
        this.articles = data['articles'];
        this.router.navigate(['news', inputValue]);
      });
    } else {
      this.router.navigate(['/news']);
    }
  }

  resetKeyWord() {
    this.keyWord = '';
    this.router.navigate(['/news']);
  }

  pageEvents($event: PageEvent) {
    if ($event.pageIndex >= this.pageIndex) {
      this.pageIndex++;
    } else {
      this.pageIndex--;
    }

    this.fetchArticles();
  }
}
