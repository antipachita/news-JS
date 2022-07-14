import News from './news/news';
import Sources from './sources/sources';
import { IarticlecontentResponse, IsourcearrayResponse } from '../interfaces/response.model/response.model';
import { IsourcearrayData, IarticlecontentData } from '../interfaces/data.model/data.model';

export class AppView {
  news: News;
  
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IarticlecontentResponse): void {
    const values: IarticlecontentData[]  = data.articles ? data.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IsourcearrayResponse): void {
    const values: IsourcearrayData[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
