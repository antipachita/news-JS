import News from './news/news';
import Sources from './sources/sources';
import { articlecontentResponse, SourcearrayResponse } from '../interfaces/interfaces';

export class AppView {
  news: News;
  
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: articlecontentResponse): void {
    const values = data.articles ? data.articles : [];
    this.news.draw(values);
  }

  drawSources(data: SourcearrayResponse): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
