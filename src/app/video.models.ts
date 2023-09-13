export interface videosItem {
  id: number,
  title: string,
  duration: string,
  uploadTime: string,
  views: string,
  author: string,
  videoUrl: string,
  description: string,
  subscriber : string
}

export enum filterItems {
  title = 'title',
  author = 'author',
  uploadTime = 'uploadTime'
}
