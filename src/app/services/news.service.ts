import { Injectable } from '@angular/core';
import { NewsModel } from '../models/news.model';

@Injectable()
export class NewsService {
  private title$: string = "LATEST NEWS"
  private newsList$: NewsModel[] = [
    {
      id: "1",
      title: "LOREM IPSUM DOLOR TITLE 1",
      date: "25 January 2019",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageUrl: "https://picsum.photos/900/300?1",
      buttonText: "READ MORE"
    },
    {
      id: "2",
      title: "LOREM IPSUM DOLOR TITLE 2",
      date: "3 March 2019",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageUrl: "https://picsum.photos/900/300?2",
      buttonText: "READ MORE"
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title$
  }

  getNewsList(): NewsModel[] {
    return this.newsList$
  }

}
