export class Article {
  title: string;
  urlToImage: string;
  description: string;
  content: string;
  publishedAt: Date;
  author: string;
  source: {
    id: string,
    name: string
  }
}
