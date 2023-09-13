import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosHandlerService {

  constructor(private http: HttpClient) { }

  public getVideos(): Observable<any> {
    return this.http.get<any>('/assets/videos.json');
  }
}
