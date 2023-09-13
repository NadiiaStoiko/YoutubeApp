import { Component, OnInit } from '@angular/core';
import { VideosHandlerService } from 'src/app/services/videos-handler.service';
import { videosItem, filterItems } from 'src/app/video.models';

@Component({
  selector: 'app-video-cards-list',
  templateUrl: './video-cards-list.component.html',
  styleUrls: ['./video-cards-list.component.css']
})
export class VideoCardsListComponent implements OnInit {

  public isLoading = false;
  public vidiosList: Array<videosItem> = [];
  public inputValue: string='';
  public filterOption: string = '';

  constructor(private videosHandlerServ: VideosHandlerService ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.vidiosList = [];
    this.getAllVideos("");
    this.isLoading = false;
  }

  private getAllVideos(value: string): void {
    this.videosHandlerServ.getVideos().subscribe((videos)=>{
      this.vidiosList = videos;
      if (value != '') {
        let searchOptionName = this.filterOption;
        if (searchOptionName === '') { searchOptionName = filterItems.title };
        this.vidiosList = this.vidiosList.filter((video:any) => video[searchOptionName].toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      }
    });
  }

  public inputHandler(event:any): void {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.inputValue = (event.target as HTMLInputElement).value.trim();
      this.videosFilter(this.inputValue);
    }
  }

  public searchHandler(value: string): void {
    this.inputValue = value.trim();
    this.videosFilter(this.inputValue);
  }

  private videosFilter(value: string): void {
    this.getAllVideos(value);
}

public addFilterOption(option: string): void {
  this.filterOption = option;
}
}
