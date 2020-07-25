import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../model/article.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() article: Article;
  @Input() keyWord: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDetails() {
    if (this.keyWord) {
      this.router.navigate(['/article', this.keyWord, this.article.title])
    } else {
      this.router.navigate(['/article', this.article.title]);
    }
  }
}
